require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Shop`,
    description: `Just a shop`,
    author: `Josh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        verbose: true,
      },
    },
  ],
}
