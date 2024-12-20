import React from "react";
import setupTags from "../utils/setupTags";
import { Link } from "gatsby";
import slugify from "slugify";

const TagsList = ({recipes}) => {
    const newTags = setupTags(recipes);
    return (
        <div className="tag-container">
            <h4>recipe</h4>
            <div className="tags-list">
                {
                    newTags.map((tag, index) => {
                        const [text, value] = tag;
                        console.log('text', text);
                        console.log('value', value);
                        const slug = slugify(text, {lower: true});
                        return <Link to={`/tags/${slug}`} key={index}> {text} ({value})</Link>
                    })
                }
            </div>
        </div>
    )
}

export default TagsList;