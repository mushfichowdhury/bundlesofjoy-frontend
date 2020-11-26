import React, { Component } from 'react'

export default class NewFeeding extends Component {
    state = {
        feeding_method: "breast",
        duration: "",
        amount: "",
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        const newFeeding = {
            child_id: 2,
            feeding_method: this.state.method,
            duration: this.state.duration,
            amount: this.state.amount
        }
        this.props.submitHandler(newFeeding)
        this.setState({ feeding_method: "breast", duration: "", amount: "" })

    }

    render() {
        return (
            <div>
            <h3>Log Feeding</h3>
            <form onSubmit={this.localSubmitHandler} >
                <label for="duration">Duration:</label>
                <input name="duration" type="text" value={this.state.duration} onChange={this.changeHandler} />
                <label for="amount">Amount (oz.):</label>
                <input name="amount" type="number" value={this.state.amount} onChange={this.changeHandler} />
                <label for="feeding_method">Method:</label>
                <select name="feeding_method" id="feeding_method" onChange={this.changeHandler}>
                    <option name="feeding_method" value="breast" onChange={this.changeHandler}>Breast</option>
                    <option name="feeding_method" value="bottle" onChange={this.changeHandler}>Bottle</option>
                </select>

                <input type="submit" value="Submit"/>
            </form>
            <br/>
            </div>
        )
    }
}

