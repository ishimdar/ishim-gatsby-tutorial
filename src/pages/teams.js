import React from "react";
import Layout from "../components/Layout";
import Gallery from "../examples/Gallery";
import { graphql, useStaticQuery } from "gatsby";
import TeamsList from "../components/TeamsList";


const query = graphql`
  query {
    allContentfulTeam {
      nodes {
        name
        designation
        info {
          info
        }
        profileImg {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`;

const Teams = () => {

  const {allContentfulTeam: {nodes}} = useStaticQuery(query);
  // console.log('nodes--------', nodes);

  return (
    <Layout>
      <main className="page">
        <TeamsList teams={nodes} />
      </main>
    </Layout>
  );
};

export default Teams;
