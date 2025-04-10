module.exports = function (eleventyConfig) {
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setLayoutsDirectory("../layouts");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("scripts");
};