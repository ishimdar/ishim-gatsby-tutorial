/**
 * @type {import('gatsby').GatsbyConfig}
 */


require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "Simply Recipes",
    description: "Nice and clean recioes",
    author: "@ishimdar",
    person: { name: "Ishimdar", age: 32 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      {name: "ishimdar", age: 32},
      {name: "ahamad", age: 33}
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `k60pebhb66ur`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        // accessToken: `RF7esHffQ9T1xx_7fghm8zjIY-CZBvjafXm0tHpYKs8`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`
  ],
}
