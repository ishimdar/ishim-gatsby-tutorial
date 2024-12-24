import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";

const TeamsList = ({teams}) => {

    return (
        <div className="recipes-list">
            {
                teams.map((team, map) => {
                    const {name, designation, info, profileImg} = team;
                    const pathToImage = getImage(profileImg);
                    return (
                        <div className="recipe">
                            <GatsbyImage 
                                image={pathToImage}
                                className="recipe-img"
                                alt={name}
                            />
                            <h4>{name}</h4>
                            <h5>{designation}</h5>
                            <p>{info?.info}</p>
                        </div>
                    )
                })
            }            
        </div>
    )
}

export default TeamsList;