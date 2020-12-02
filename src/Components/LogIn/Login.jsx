import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { userLoginAction } from '../../redux/actions';
import { withRouter, Redirect } from 'react-router-dom';
import logo from '../../Bundles of Joy.png'
import './Login.css'

class Login extends Component {

    state = {
        username: "",
        password: ""
    }
    

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log("test test")
        this.props.userLogin(this.state)
    }

    childLogin = () => {
        console.log("clicking")
        this.props.routerProps.history.push("/childlogin")
    }


    render() {
        if(this.props.user) {
            return <Redirect to="/home"/>
        } 
        return (
            <div class="login"> 
                <div className="login-form">
                <img src={logo} alt="logo" />
                <h1>Parent Log In</h1>
                <form>
                    <input onChange={this.changeHandler} value={this.state.username} name="username" placeholder="Enter Username" type="text" label="username"/>
                    <div className="divider"/>
                    <input onChange={this.changeHandler} value={this.state.password} name="password" placeholder="Enter Password" type="password" label="password" ></input>
                    <button type="submit" onClick={this.submitHandler}>Log in</button>
                </form>
                <button onClick={this.childLogin}>Child Log In</button>
                </div>
            </div>
        )
    }
}

const msp = (state) => {
    return {user: state.user}
}

const mdp = (dispatch) => {
    return { userLogin: (user) => dispatch(userLoginAction(user, dispatch))}
}

export default connect(msp, mdp)(withRouter(Login))