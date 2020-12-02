import React, { Component } from 'react'
import DiaperRow from "./DiaperRow"
import NewDiaper from './NewDiaper'
import { connect } from 'react-redux'
import { getDiapers } from '../../redux/actions'
import { Table } from 'semantic-ui-react'


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
                <h2>Number of Diapers Left: {this.state.counter - this.props.diapers.length}</h2>
                <NewDiaper submitHandler={this.submitHandler}/>
                <Table striped className="diaperTable">
                    <Table.Header style={{textAlign: "center"}}>
                        <Table.Row style={{textAlign: "center"}}>
                            <Table.HeaderCell >
                                Date
                            </Table.HeaderCell>
                            <Table.HeaderCell >
                                Time
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Quality
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Color
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Action
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>{this.renderDiaperChanges()}</Table.Body>
                </Table>
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


