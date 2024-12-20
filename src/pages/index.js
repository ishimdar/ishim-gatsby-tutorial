import * as React from "react";
import Layout from "../components/Layout";
import { page, text } from "../examples/home.module.css";
import { Link } from "gatsby";
import { ExampleButton } from "../examples/button";
import { StaticImage } from "gatsby-plugin-image";
import FetchData from "../examples/fetchData";
import AllRecipes from "../components/AllRecipes";
import SEO from "../components/SEO";
// cahce clean 
// gatsby clean && gatsby develop

const IndexPage = () => {
  return (
    <Layout>      
      <SEO title="Home" description="this is home page" />
      <main className="page">
        <header className="hero">
          <StaticImage 
            src="../assets/images/main.jpeg" 
            alt="eggs" 
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container ">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <FetchData />
        <AllRecipes />
      </main>      
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
