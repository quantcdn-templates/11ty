const fs = require('fs');
const path = require('path');
const postcss = require('postcss');

module.exports = class {
  /**
   * Additional data for CSS for 11ty.
   *
   * @return {object}
   */
  async data() {
    const cssDir = path.join(__dirname, '..', '_includes', 'css');
    const rawFilepath = path.join(cssDir, '_main.css');

    return {
      permalink: `css/page.css`,
      rawFilepath,
      rawCss: fs.readFileSync(rawFilepath),
    };
  }

  /**
   * Render the css during the build.
   *
   * @param {string} rawCss
   * @param {string} rawFilepath
   *
   * @return {void}
   */
  async render({rawCss, rawFilepath}) {
    return await postcss([
      require('postcss-import'),
      require('postcss-extend-rule'),
      // require('@csstools/postcss-sass'),
      require('autoprefixer'),
      require('tailwindcss'),
    ])
        .process(rawCss, {from: rawFilepath})
        .then((result) => result.css);
  }
};
