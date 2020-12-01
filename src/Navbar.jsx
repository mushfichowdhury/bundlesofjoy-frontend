import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css'

function Navbar(props) {

    const backtologin = () => {
        props.routerProps.history.push("/")
    }

    const logOut = () => {
        props.logOut()
        backtologin()
    }

    return (
    <>
    {props.user || props.child ? <button onClick={logOut} >Logout</button> : null}
        <nav className="navbar">
            <Link to="/home"><button className="nav-button">H O M E</button></Link>
            <Link to="/diapers"><button className="nav-button">D I A P E R S</button></Link>
            <Link to="/feedings"><button className="nav-button">F E E D I N G S</button></Link>
            <Link to="/naps"><button className="nav-button">N A P S</button></Link>
            <Link to="/children"><button className="nav-button">C H I L D R E N</button></Link>
        </nav>
    </>
    );
}

export default Navbar;