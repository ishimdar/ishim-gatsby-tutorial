import * as React from "react";
// import { Link } from "gatsby";

export default function Footer() {
    
    return(
        <footer className="page-footer">
            &copy;  {new Date().getFullYear()}  
            <span> Simply Recipes</span>
            <a href="">GatsBy</a>
        </footer>
    )
}