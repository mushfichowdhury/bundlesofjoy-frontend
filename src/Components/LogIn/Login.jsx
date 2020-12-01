import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { userLoginAction } from '../../redux/actions';
import { withRouter } from 'react-router-dom';
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
        this.props.userLogin(this.state)
        if (localStorage.getItem("token") !== "undefined") {
            this.props.routerProps.history.push("/home")
        }
    }


    render() {
        return (
            <div class="login"> 
                <div className="login-form">
                <img src={logo} alt="logo" />
                <form>
                    <input onChange={this.changeHandler} value={this.state.username} name="username" placeholder="Enter Username" type="text" label="username"/>
                    <div className="divider"/>
                    <input onChange={this.changeHandler} value={this.state.password} name="password" placeholder="Enter Password" type="password" label="password" ></input>
                    <button type="submit" onClick={this.submitHandler}>Log in</button>
                </form>
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