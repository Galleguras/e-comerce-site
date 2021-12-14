/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({path: `.env.${process.env.NODE_ENV}`})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Price', 'Product'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      },
    },
  ],
  siteMetadata: {
    title: 'Codigo Facilito',
    url: 'https://codigofacilito.com',
    descripcion: 'Buy and aquire SWAG from codigofacilito',
  },
}
