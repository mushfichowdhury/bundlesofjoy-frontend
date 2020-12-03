import React from 'react'
import { Component } from 'react'
import { Redirect } from 'react-router-dom';
import logo from '../../Bundles of Joy.png'
import './Login.css'
import { Button, Form, Icon } from 'semantic-ui-react'


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
                <div class="balloon"><h1>B</h1></div>
                <div class="balloon"><h1>U</h1></div>
                <div class="balloon"><h1>N</h1></div>
                <div class="balloon"><h1>D</h1></div>
                <div class="balloon"><h1>L</h1></div>
                <div class="balloon"><h1>E</h1></div>
                <div class="balloon"><h1>S</h1></div>
                <h1 class="floating">Child</h1>
                <Form>
                    <Form.Input placeholder="Enter Name" type="text" />
                    <div className="divider"/>
                    <Form.Input placeholder="Enter Password" type="password" />
                    <div className="divider"/>
                    <Button.Group vertical>
                    <Button style={{background: "rgb(207, 207, 250)", color: "white"}} animated='fade' type="submit" onClick={this.submitHandler}>
                        <Button.Content visible>Log In</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                    <Button style={{background: "rgb(207, 207, 250)", color: "white"}} animated='fade' onClick={this.childLogin}>
                        <Button.Content visible>Back</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow left' />
                        </Button.Content>
                    </Button>
                    </Button.Group >
                </Form>
                </div>
            </div>
        )
    }
}

export default ChildLogIn