import React from "react";
import TagsList from "./TagsList";
import RecipesList from "./RecipesList";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        id
        title
        cookTime
        content {
          tags
        }
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
    const data = useStaticQuery(query);
    // const { allContentfulRecipe: {nodes: recipes} } = useStaticQuery(query);
    const recipes = data.allContentfulRecipe.nodes;
    // console.log('recipes', recipes);
    return (
        <section className="recipes-container">
            <TagsList recipes={recipes} />
            <RecipesList recipes={recipes} />
        </section>
    )
}

export default AllRecipes;