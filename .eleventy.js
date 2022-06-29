const markdownIt = require('markdown-it')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = (eleventyConfig) => {

  let markdownOptions = {
    html: true,
    breaks: true,
    linkify: true,
  }

  eleventyConfig.setLibrary('md', markdownIt(markdownOptions))
  eleventyConfig.addPlugin(syntaxHighlight);

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
