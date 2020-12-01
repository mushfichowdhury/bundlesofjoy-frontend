import React, { Component } from 'react'
import {connect} from 'react-redux'
import { newFeeding } from '../../redux/actions'



class NewFeeding extends Component {
    state = {
        feeding_method: "n/a",
        amount: "",
        food: ""
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
        this.setState({ feeding_method: "n/a", amount: "", food: "" })

    }

    render() {
        return (
            <div>
            <h3>Log Feeding</h3>
            <form onSubmit={this.localSubmitHandler} >

                <label for="food">Food:</label>
                <input name="food" type="text" value={this.state.food} onChange={this.changeHandler} />
                
                <label for="feeding_method">Milk:</label>
                <select name="feeding_method" id="feeding_method" onChange={this.changeHandler}>
                    <option name="feeding_method" value="" onChange={this.changeHandler}>n/a</option>
                    <option name="feeding_method" value="breast" onChange={this.changeHandler}>Breast</option>
                    <option name="feeding_method" value="bottle" onChange={this.changeHandler}>Bottle</option>
                </select>
                

                <label for="amount">Amount (oz.):</label>
                <input name="amount" type="number" value={this.state.amount} onChange={this.changeHandler} />

                <input type="submit" value="Submit"/>
            </form>
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
