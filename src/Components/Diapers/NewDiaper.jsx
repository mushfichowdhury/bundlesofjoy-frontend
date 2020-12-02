import React, { Component } from 'react'
import {connect} from 'react-redux'
import { newDiaper } from '../../redux/actions'

class NewDiaper extends Component {
    state = {
        texture: "soft",
        color: "olive",
        image: ""
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
        this.setState({ texture: "", color: "olive", image: "" })
    }

    render() {
        return (
            <div>
            <h3>Log Diaper Change</h3>
            <form onSubmit={this.localSubmitHandler} >

                <label for="texture">Texture:</label>
                <select name="texture" id="texture" onChange={this.changeHandler}>
                    <option name="texture" value="soft" onChange={this.changeHandler}>Soft</option>
                    <option name="texture" value="watery" onChange={this.changeHandler}>Watery</option>
                    <option name="texture" value="hard" onChange={this.changeHandler}>Hard</option>
                    <option name="texture" value="firm" onChange={this.changeHandler}>Firm</option>
                    <option name="texture" value="pellets" onChange={this.changeHandler}>Pellets</option>
                </select>

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

                <label for="image">Image:</label>
                <input name="image" type="text" value={this.state.image} onChange={this.changeHandler} />


                <input type="submit" value="Submit"/>
            </form>
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