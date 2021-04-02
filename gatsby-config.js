module.exports = {
  siteMetadata: {
    title: `Nikki Peel - Portfolio`,
    description: `Personal website for Nikki Peel includes recent projects, certifications, link to download resume, and contact form`,
    author: `Nikki Peel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        // It's important to specify the maxWidth (in pixels) of
        // the content container as this plugin uses this as the
        // base for generating different widths of each image.
        maxWidth: 1440,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nikki Peel - Portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#05234C`,
        theme_color: `#D62B83`,
        display: `minimal-ui`,
        icon: `src/images/portfolio-logo.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-postcss',
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
