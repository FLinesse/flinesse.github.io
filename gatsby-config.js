module.exports = {
  siteMetadata: {
    title: `josh's landing page`,
    description: `A quick landing page built with the default Gatsbyjs starter. <3 Nowara`,
    author: `Joshua Lin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `joshua lin`,
        short_name: `jlin`,
        start_url: `/`,
        background_color: `#25625c`,
        theme_color: `#25625c`,
        display: `minimal-ui`,
        icon: `src/assets/heyguys.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
