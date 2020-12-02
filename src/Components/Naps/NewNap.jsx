import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
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
            <Form inline onSubmit={this.localSubmitHandler} >
                <Form.Group style={{}}>
                <Form.Field inline>
                <label for="duration">Duration:</label>
                <input name="duration" type="text" value={this.state.duration} onChange={this.changeHandler} />
                </Form.Field>
                <Button style={{background: "rgb(207, 207, 250)", color: "white"}} type="submit" value="Submit">Submit</Button>
                </Form.Group>
            </Form>
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
