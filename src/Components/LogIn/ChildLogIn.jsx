import React from 'react'
import { Component } from 'react'
import { Redirect } from 'react-router-dom';
import logo from '../../Bundles of Joy.png'
import './Login.css'

class ChildLogIn extends Component {

    submitHandler = (e) => {
        e.preventDefault()
        console.log("clicking")
        return <Redirect to="/childhome"/>
    }

    childLogin = () => {
        this.props.routerProps.history.push("/login")
    }

    render() {
        return (
            <div class="login"> 
                <div className="login-form">
                <img src={logo} alt="logo" />
                <h1>Child Log In</h1>
                <form>
                    <input placeholder="Enter Name" type="text" label="username"/>
                    <div className="divider"/>
                    <input placeholder="Enter Password" type="password" label="password" ></input>
                    <button type="submit" onSubmit={this.submitHandler}>Log in</button>
                </form>
                <button onClick={this.childLogin}>Parent Log In</button>
                </div>
            </div>
        )
    }
}

export default ChildLogIn