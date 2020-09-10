require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Muhammad Ibragimov | Web Developer`,
    description: `Personal portfolio`,
    author: `@mibragimov`,
    lang: `en`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `Bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
        },
        // HTTP headers alternatively accepts a function (allows async)

        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
