import React from "react";
import { NavLink } from "react-router-dom";
import { Sticky, Menu, Image } from "semantic-ui-react";
import './Navbar.css'
import logo from './images/BOJlogo.png'

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
        {/* {this.props.user || this.props.child ? <button onClick={this.logOut} >Logout</button> : null}
        <nav className="navbar">
            <Link to="/home"><Button style={{background: "transparent"}} className="nav-button">H O M E</Button></Link>
            <Link to="/diapers"><Button style={{background: "transparent"}} className="nav-button">D I A P E R S</Button></Link>
            <Link to="/feedings"><Button style={{background: "transparent"}} className="nav-button">F E E D I N G S</Button></Link>
            <Link to="/naps"><Button style={{background: "transparent"}} className="nav-button">N A P S</Button></Link>
        </nav> */}

        <Sticky>
            <Menu inverted pointed secondary style={{background: "rgb(150, 150, 250)" }}>
                <div className='header item'>
                <Image src={logo} size='mini' />
                </div>
                <NavLink className='item ' exact to='/home'>
                Home
                </NavLink>
                <NavLink className='item' exact to='/diapers'>
                Diapers
                </NavLink>
                <NavLink className='item' exact to='/feedings'>
                Feedings
                </NavLink>
                <NavLink className='item' exact to='/naps'>
                Naps
                </NavLink>
                {this.props.user === null && (
                <Menu.Menu position='right'>
                    <NavLink className='item' to='/login'>
                    Login
                    </NavLink>
                    <NavLink className='item' to='/signup'>
                    Signup
                    </NavLink>
                </Menu.Menu>
                )}
                {this.props.user && (
                <>
                    <Menu.Item position='right' onClick={this.logOut}>
                    Logout
                    </Menu.Item>
                </>
                )}
            </Menu>
            </Sticky>
    </>
    )};
}

export default Navbar;