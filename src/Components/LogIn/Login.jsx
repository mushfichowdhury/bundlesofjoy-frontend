import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { userLoginAction } from '../../redux/actions';
import { withRouter, Redirect } from 'react-router-dom';
import logo from '../../Bundles of Joy.png'
import './Login.css'
import { Button, Icon } from 'semantic-ui-react'


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
                    <div className="divider"/><div className="divider"/>
                    <Button.Group vertical>
                    <Button style={{background: "rgb(207, 207, 250)", color: "white"}} animated='fade' type="submit" onClick={this.submitHandler}>
                        <Button.Content visible>Log In</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                    <Button style={{background: "rgb(207, 207, 250)", color: "white"}} animated='fade' >
                        <Button.Content visible>New Parent</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                    <Button style={{background: "rgb(207, 207, 250)", color: "white"}} animated='fade' onClick={this.childLogin}>
                        <Button.Content visible>Child Log In</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                    </Button.Group>
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