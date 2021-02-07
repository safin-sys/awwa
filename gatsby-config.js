module.exports = {
  siteMetadata: {
    title: `AWWA`,
    description: `Click Here Previous Next OUR MISSION To empower the disadvantaged to maximise their potential to lead dignified and independent lives. ABOUT AWWA AWWA is a social service agency, which serves persons of different demographics across life-stages yearly. Services include early intervention for pre-schoolers, education and disability support for children and adults with additional needs, assistance to […]`,
    author: `Safin Ahmed`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AWWA`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
