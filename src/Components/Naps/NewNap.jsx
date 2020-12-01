import React, { Component } from 'react'
import {connect} from 'react-redux'
import { newNap } from '../../redux/actions'

class NewNap extends Component {
    state = {
        duration: "",
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        const newNapObj = {
            child_id: 2,
            duration: this.state.duration,
        }
        this.props.submitHandler(newNapObj)
        console.log(newNapObj)
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

function mdp(dispatch) {
    return {
        submitHandler: (newNapObj) => dispatch(newNap(newNapObj)),
    }
}

export default connect(null, mdp)(NewNap)
