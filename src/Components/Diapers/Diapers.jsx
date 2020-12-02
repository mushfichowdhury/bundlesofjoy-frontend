import React, { Component } from 'react'
import DiaperRow from "./DiaperRow"
import NewDiaper from './NewDiaper'
import { connect } from 'react-redux'
import { getDiapers } from '../../redux/actions'


class Diapers extends Component {
    state = {
        diapers: [],
        counter: 50
	}

	componentDidMount = () => {
        if(this.props.user === null){
            this.props.routerProps.history.push("/login")
        }
        this.props.getDiapers()
    }

    reduxClickHandler = () => {
        console.log("clicking")
        this.props.incrementCounter();
    }

    renderDiaperChanges = () => {
        return this.props.diapers.reverse().map((change) => <DiaperRow key={change.id} change={change}/>)
    }

    diaperSubmitHandler = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        this.setState({
            counter: e.target.value
        })
    }

    render() {
        console.log("# of Diapers:", this.props.diapers.length)
        return (
            <div>
                <h1>All Diaper Changes</h1>
                <h2>Number of Diapers Left: {this.state.counter - this.props.diapers.length} <input name="counter" onSubmit={this.diaperSubmitHandler}></input></h2>
                <NewDiaper submitHandler={this.submitHandler}/>
                <table className="diaperTable" >
                    <thead style={{textAlign: "center"}}>
                        <tr>
                            <th >
                                Date
                            </th>
                            <th >
                                Time
                            </th>
                            <th>
                                Quality
                            </th>
                            <th>
                                Color
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>{this.renderDiaperChanges()}</tbody>
                </table>
            </div>
        )
    }
}

function mdp(dispatch) {
    return {
        getDiapers: () => dispatch(getDiapers()),
        incrementCounter: () => dispatch({ type: "INCREMENT_COUNTER" })
    }
}

function msp(state) {
    return {diapers: state.diapers}
}

export default connect(msp,mdp)(Diapers)


