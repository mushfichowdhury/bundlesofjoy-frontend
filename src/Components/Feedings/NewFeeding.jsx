import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Button, Form, Message } from 'semantic-ui-react'
import { newFeeding } from '../../redux/actions'



class NewFeeding extends Component {
    state = {
        feeding_method: "n/a",
        amount: "",
        food: "",
        visible: false,
    }

    handleDismiss = () => {
        this.setState({ visible: false })
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        const newFeeding = {
            child_id: 2,
            feeding_method: this.state.feeding_method,
            amount: this.state.amount,
            food: this.state.food
        }
        this.props.submitHandler(newFeeding)
        this.setState({ feeding_method: "n/a", amount: "", food: "", visible: true })

    }

    render() {
        return (
            <div>
            <Form onSubmit={this.localSubmitHandler} >
            <Form.Group inline widths='equal' style={{padding: "0px 325px 0px 325px"}}>
                <Form.Field inline width={8}>
                <label for="food">Food:</label>
                <input name="food" type="text" value={this.state.food} onChange={this.changeHandler} />
                </Form.Field>
                <Form.Field inline width={8}>
                <label for="feeding_method">Milk:</label>
                <select name="feeding_method" id="feeding_method" onChange={this.changeHandler}>
                    <option name="feeding_method" value="" onChange={this.changeHandler}>n/a</option>
                    <option name="feeding_method" value="breast" onChange={this.changeHandler}>Breast</option>
                    <option name="feeding_method" value="bottle" onChange={this.changeHandler}>Bottle</option>
                </select>
                </Form.Field>
                <Form.Field inline width={8}>
                <label for="amount">Amount (oz.):</label>
                <input name="amount" type="number" value={this.state.amount} onChange={this.changeHandler} />
                </Form.Field>
                <Button style={{background: "rgb(150, 150, 250)", color: "white"}} type="submit" value="Submit">Submit</Button>
                </Form.Group>
                {this.state.visible ? <Message
                    success
                    floating
                    onDismiss={this.handleDismiss}
                    size="tiny"
                    compact
                    header='Success!'
                    content="You logged a feeding."
                    /> : null }
            </Form>
            <br/>
            </div>
        )
    }
}

function mdp(dispatch) {
    return {
        submitHandler: (newFeedingObj) => dispatch(newFeeding(newFeedingObj)),
    }
}

export default connect(null, mdp)(NewFeeding)
