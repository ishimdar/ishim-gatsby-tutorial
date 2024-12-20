import React from "react";
import styled from "styled-components";
import big from "../assets/images/big.jpg";
import { StaticImage } from "gatsby-plugin-image";

export const Images = () => {
    return (
        <Wrapper>
            {/* <img src={big} alt="food" /> */}
            <StaticImage 
                src="../assets/images/big.jpg" 
                alt="food" 
                className="about-img"
                placeholder="blurred"
                />
            <h2>gatsBy images</h2>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;

  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
    height: 100px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    .example-img {
      height: 200px;
    }
  }
`