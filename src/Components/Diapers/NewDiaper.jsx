import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Button, Form, Message } from 'semantic-ui-react'
import { newDiaper } from '../../redux/actions'

class NewDiaper extends Component {
    state = {
        texture: "soft",
        color: "olive",
        image: "",
        visible: false
    }

    handleDismiss = () => {
        this.setState({ visible: false })
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        const newDiaperChange = {
            child_id: 2,
            texture: this.state.texture,
            color: this.state.color,
            image: this.state.image

        }
        this.props.submitHandler(newDiaperChange)
        this.setState({ texture: "", color: "olive", image: "", visible: true })
    }

    render() {
        return (
            <div>
            <Form success onSubmit={this.localSubmitHandler} >
                <Form.Group inline widths='equal' style={{padding: "0px 300px 0px 300px"}}>
                <Form.Field inline width={3}>
                <label for="texture">Texture:</label>
                <select name="texture" id="texture" onChange={this.changeHandler}>
                    <option name="texture" value="soft" onChange={this.changeHandler}>Soft</option>
                    <option name="texture" value="watery" onChange={this.changeHandler}>Watery</option>
                    <option name="texture" value="hard" onChange={this.changeHandler}>Hard</option>
                    <option name="texture" value="firm" onChange={this.changeHandler}>Firm</option>
                    <option name="texture" value="pellets" onChange={this.changeHandler}>Pellets</option>
                </select>
                </Form.Field>
                <Form.Field inline width={3}>
                <label for="color">Color:</label>
                <select name="color" id="color" onChange={this.changeHandler}>
                    <option name="color" value="olive" onChange={this.changeHandler}>Olive</option>
                    <option name="color" value="dark green" onChange={this.changeHandler}>Dark Green</option>
                    <option name="color" value="red" onChange={this.changeHandler}>Red</option>
                    <option name="color" value="orange" onChange={this.changeHandler}>Orange</option>
                    <option name="color" value="yellow" onChange={this.changeHandler}>Yellow</option>
                    <option name="color" value="dark yellow" onChange={this.changeHandler}>Dark Yellow</option>
                    <option name="color" value="white" onChange={this.changeHandler}>White</option>
                    <option name="color" value="black" onChange={this.changeHandler}>Black</option>
                </select>
                </Form.Field>
                <Form.Field inline width={3}>
                <label for="image">Image:</label>
                <input name="image" type="text" value={this.state.image} onChange={this.changeHandler} />
                </Form.Field>
                
                <Button style={{background: "rgb(207, 207, 250)", color: "white", padding: "10px 10px 0px -10px"}} type="submit" value="Submit">Enter</Button>
                </Form.Group>
                {this.state.visible ? <Message
                    success
                    floating
                    onDismiss={this.handleDismiss}
                    size="tiny"
                    compact
                    
                    header='Success!'
                    content="Logged a diaper change"
                /> : null }
            </Form>
            <br/>
            </div>
        )
    }
}

function mdp(dispatch) {
    return {
        submitHandler: (newDiaperObj) => dispatch(newDiaper(newDiaperObj)),
    }
}

export default connect(null, mdp)(NewDiaper)