/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `Ulyssecoates.com`,
		siteUrl: `https://ulyssecoates.com`,
		description: `I'm Ulysse Coates, and I like making Websites!`,
	},
	plugins: [
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.SPACE_ID,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENT_DELIVERY_KEY,
				// accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				// host: `preview.contentful.com`,
			},
		},
	],
};
