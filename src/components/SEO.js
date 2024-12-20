import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";


const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;


const SEO = ({title, description}) => {
    const {site} = useStaticQuery(query);
    const metaDecription = description || site.siteMetadata.description;
    return(
        <Helmet
            htmlAttributes={{lang: "en"}}
            // title={title} 
            title={`${title} | ${site.siteMetadata.title}`} 
            meta={[{
                name: `description`,
                content: metaDecription
            }]}
            >
                
        </Helmet>
    )
}

export default SEO;