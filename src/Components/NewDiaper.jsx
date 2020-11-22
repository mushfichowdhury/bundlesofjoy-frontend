import React, { Component } from 'react'

export default class NewDiaper extends Component {
    state = {
        wet: false,
        solid: false,
        color: "green",
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }
    radioChangeHandler = (e) => {
        if(e.target.checked) {
            console.log("checked")
        } else {
            console.log("unchecked")
        }
        this.setState({ [e.target.id]: e.target.value })
        console.log(this.state)
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        const newDiaperChange = {
            child_id: 2,
            wet: this.state.wet,
            solid: this.state.solid,
            color: this.state.color

        }
        this.props.submitHandler(newDiaperChange)
        this.setState({ wet: false, solid: false, color: "green" })
    }

    render() {
        console.log(this.state)
        return (
            <div>
            <h3>Log Diaper Change</h3>
            <form onSubmit={this.localSubmitHandler} >
                <input type="radio" id="wet" name="quality" value={true} onChange={this.radioChangeHandler}/>
                <label for="wet">Wet</label>

                <input type="radio" id="solid" name="quality" value={true} onChange={this.radioChangeHandler}/>
                <label for="solid">Solid</label>
                <label for="color">Color:</label>
                <select name="color" id="color" onChange={this.changeHandler}>
                    <option name="color" value="green" onChange={this.changeHandler}>Green</option>
                    <option name="color" value="red" onChange={this.changeHandler}>Red</option>
                    <option name="color" value="yellow" onChange={this.changeHandler}>Yellow</option>
                    <option name="color" value="brown" onChange={this.changeHandler}>Brown</option>
                    <option name="color" value="white" onChange={this.changeHandler}>White</option>
                    <option name="color" value="black" onChange={this.changeHandler}>Black</option>
                </select>

                <input type="submit" value="Submit"/>
            </form>
            <br/>
            </div>
        )
    }
}

