import React from "react";
import './Navbar.css'

function Navbar(){
    return(
        <div className="mainHeader">
            <div className="logo">
            <a href="/"><h1>Questify</h1></a>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <div className="searchBar">
                <input type="text" placeholder="Search..."/>
                <button>Search</button>
                </div>
        </div>
    )
}

export default Navbar;