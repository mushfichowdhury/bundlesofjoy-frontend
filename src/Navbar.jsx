import React, { Component } from "react";
import { Link } from "react-router-dom";

import './Navbar.css'

function Navbar() {
    return (
    <>
        <nav className="navbar">
            <Link to="/home"><button>Go to Home</button></Link>
            <Link to="/diapers"><button>Go to Diapers</button></Link>
            <Link to="/feedings"><button>Go to Feedings</button></Link>
            <Link to="/naps"><button>Go to Naps</button></Link>
        </nav>
    </>
    );
}

export default Navbar;