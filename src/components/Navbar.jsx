import React from "react";
import logo from "../images/airbnb1.png";
import "../index.css";

const airLogo = require('../images/airbnb1.png');

const Navbar = () => {
    return(
        <div>
            <nav className="navbar">
                <img src={airLogo} alt="airbnb-logo" className="airbnblogo" />
            </nav>
        </div>
    )
}

export default Navbar;