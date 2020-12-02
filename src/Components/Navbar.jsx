import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "semantic-ui-react";
import './Navbar.css'

class Navbar extends React.Component {

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

    backtologin = () => {
        this.props.routerProps.history.push("/login")
    }

    logOut = () => {
        this.props.logOut()
        this.backtologin()
    }
    render() {
    return (
    <>
        {this.props.user || this.props.child ? <button onClick={this.logOut} >Logout</button> : null}
        <nav className="navbar">
            <Link to="/home"><Button style={{background: "transparent"}} className="nav-button">H O M E</Button></Link>
            <Link to="/diapers"><Button style={{background: "transparent"}} className="nav-button">D I A P E R S</Button></Link>
            <Link to="/feedings"><Button style={{background: "transparent"}} className="nav-button">F E E D I N G S</Button></Link>
            <Link to="/naps"><Button style={{background: "transparent"}} className="nav-button">N A P S</Button></Link>
        </nav>
    </>
    )};
}

export default Navbar;