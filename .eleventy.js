const fs = require("fs");

const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const cleanCSS = require("clean-css");
const { minify } = require("terser");
const slugify = require('@sindresorhus/slugify');

module.exports = function(eleventyConfig) {
  // Copy static folders to the output
  eleventyConfig.addPassthroughCopy({"static-root": "/"});
  eleventyConfig.addPassthroughCopy("files");
  eleventyConfig.addPassthroughCopy("img");
  
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addFilter("cssmin", function(code) {
    return new cleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function(code, callback) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } 
    catch (err) {
      console.error("Terser error: ", err);
      // Fail gracefully.
      callback(null, code);
    }
  });
  
  // get reference to built-in `slugify` filter.
  const slugifyFn = eleventyConfig.getFilter("slugify");

  // customize slugify generation
  eleventyConfig.addFilter("slugify", function (value, opts) {
    opts = Object.assign({
      customReplacements: [
        ["'", ""]
      ],
    }, opts);
    return slugifyFn(value, opts);
  });
  
  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // Watch CSS files for changes
  eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/**/*.css'
  });

  return {
    // Control which files Eleventy will process
    templateFormats: [
      "md",
      "njk",
      "html"
    ],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk"    
  };
};
