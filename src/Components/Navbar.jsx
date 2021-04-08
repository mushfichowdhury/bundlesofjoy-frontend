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
        <Sticky>
            <Menu inverted pointed secondary style={{background: "rgb(150, 150, 250)" }}>
                <div className='header item'>
                <NavLink className='item ' exact to='/childhome'>
                    <Image src={logo} size='mini' />
                </NavLink>
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