import * as React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import './layout.css';
import "normalize.css";
import "../assets/css/main.css";

export default function Layout({children}) {
    
    return(
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}