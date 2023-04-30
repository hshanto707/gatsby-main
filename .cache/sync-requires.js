const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("D:\\Projects\\Gatsby-main\\src\\pages\\404.js"))),
  "component---src-pages-blog-index-js": hot(preferDefault(require("D:\\Projects\\Gatsby-main\\src\\pages\\blog\\index.js"))),
  "component---src-pages-contact-examples-js": hot(preferDefault(require("D:\\Projects\\Gatsby-main\\src\\pages\\contact\\examples.js"))),
  "component---src-pages-contact-file-upload-js": hot(preferDefault(require("D:\\Projects\\Gatsby-main\\src\\pages\\contact\\file-upload.js"))),
  "component---src-pages-contact-index-js": hot(preferDefault(require("D:\\Projects\\Gatsby-main\\src\\pages\\contact\\index.js"))),
  "component---src-pages-contact-thanks-js": hot(preferDefault(require("D:\\Projects\\Gatsby-main\\src\\pages\\contact\\thanks.js"))),
  "component---src-pages-tags-index-js": hot(preferDefault(require("D:\\Projects\\Gatsby-main\\src\\pages\\tags\\index.js"))),
  "component---src-templates-about-page-js": hot(preferDefault(require("D:\\Projects\\Gatsby-main\\src\\templates\\about-page.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("D:\\Projects\\Gatsby-main\\src\\templates\\blog-post.js"))),
  "component---src-templates-index-page-js": hot(preferDefault(require("D:\\Projects\\Gatsby-main\\src\\templates\\index-page.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("D:\\Projects\\Gatsby-main\\src\\templates\\tags.js")))
}

