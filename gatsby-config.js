/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({
      path: `.env`,
    })
 }

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Fairy Lights`,
    siteUrl: `https://sarahfrench.github.io/fairy-lights`,
    description: `Fairy Lights web design`,
  },
  plugins: [`gatsby-plugin-sass`],
  pathPrefix: process.env.GATSBY_PATH_PREFIX,
}
