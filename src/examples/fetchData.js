import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  query FirstQuery {
    site {
      info:siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
        }
        person {
          age
          name
        }
      }
    }
  }
`;

const FetchData = () => {
  // const data = useStaticQuery(getData);
  const {
    site: {
        info: {title},
    },
  } = useStaticQuery(getData);

  console.log('title', title);
  return (
    <div>
        {/* <h1>Hello</h1> */}
      {/* <h1>Name: {data.site.site}</h1> */}
      {/* <h2>site title is: {title}</h2> */}
    </div>
  );
};

export default FetchData;
