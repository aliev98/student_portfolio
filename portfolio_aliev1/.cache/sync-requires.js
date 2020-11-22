const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\kuba-\\OneDrive\\Skrivbord\\student_portfolio\\portfolio_aliev1\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\Users\\kuba-\\OneDrive\\Skrivbord\\student_portfolio\\portfolio_aliev1\\src\\pages\\about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("C:\\Users\\kuba-\\OneDrive\\Skrivbord\\student_portfolio\\portfolio_aliev1\\src\\pages\\blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\Users\\kuba-\\OneDrive\\Skrivbord\\student_portfolio\\portfolio_aliev1\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\kuba-\\OneDrive\\Skrivbord\\student_portfolio\\portfolio_aliev1\\src\\pages\\index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("C:\\Users\\kuba-\\OneDrive\\Skrivbord\\student_portfolio\\portfolio_aliev1\\src\\pages\\projects.js"))),
  "component---src-templates-blog-template-js": hot(preferDefault(require("C:\\Users\\kuba-\\OneDrive\\Skrivbord\\student_portfolio\\portfolio_aliev1\\src\\templates\\blog-template.js")))
}

