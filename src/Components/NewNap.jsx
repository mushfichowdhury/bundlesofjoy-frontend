import React, { Component } from 'react'

export default class NewNap extends Component {
    state = {
        duration: "",
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        const newNap = {
            child_id: 2,
            duration: this.state.duration,
        }
        this.props.submitHandler(newNap)
        this.setState({ duration: "" })

    }

    render() {
        return (
            <div>
            <h3>Log Nap</h3>
            <form onSubmit={this.localSubmitHandler} >
                <label for="duration">Duration:</label>
                <input name="duration" type="text" value={this.state.duration} onChange={this.changeHandler} />
                <input type="submit" value="Submit"/>
            </form>
            <br/>
            </div>
        )
    }
}

