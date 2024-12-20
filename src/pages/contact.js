import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO";

export default function Contact({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) {  
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>What is Lorem Ipsum?</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </article>
          <article>
            <form className="form contact-form" action="https://formspree.io/f/mvgoeoyj" method="POST">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at Awsomesource!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query {
    allContentfulRecipe(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;
