import * as React from 'react';

import Layout from '../components/layout';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
import { graphql, useStaticQuery } from 'gatsby';

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query pageQuery {
			contentfulHomePage(id: { eq: "e12c9c90-b195-5cc8-9aef-832fcd8060c6" }) {
				id
				contentful_id
				Title
				photo {
					gatsbyImageData
				}
			}
		}
	`);

	return (
		// <Layout pageTitle="Home Page">
		// 	<p>Hello :)</p>
		// 	<p>{data.contentfulHomePage.Title}</p>
		// 	<GatsbyImage
		// 		image={data.contentfulHomePage.photo.gatsbyImageData}
		// 		alt="Profile pic of Ulysse Coates"
		// 	/>
		// </Layout>
		<div>Coming soon :)</div>
	);
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
