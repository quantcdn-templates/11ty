const markdownIt = require('markdown-it')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const { DateTime } = require("luxon")

module.exports = (eleventyConfig) => {
  const md = new markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  })

  eleventyConfig.setLibrary('md', md)
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });

  eleventyConfig.addFilter("debug", (obj) => {
    console.log(obj);
    return JSON.stringify(obj)
  });

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->"
  });

  return {
    dir: {
      input: 'src',
      output: 'public',
      data: './_data',
      includes: './_includes',
      layouts: './_layouts',
    }
  }
}
