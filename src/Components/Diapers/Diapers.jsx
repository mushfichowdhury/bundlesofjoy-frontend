import React, { Component } from 'react'
import DiaperRow from "./DiaperRow"
import NewDiaper from './NewDiaper'
import { connect } from 'react-redux'
import { getDiapers } from '../../redux/actions'


class Diapers extends Component {
    state = {
		diapers: [],
	}

	componentDidMount = () => {
        if(this.props.user === null){
            this.props.routerProps.history.push("/login")
        }
        this.props.getDiapers()
    }


    renderDiaperChanges = () => {
        // if(this.props.diapers === undefined){
        // } else { 
        //     return this.props.diapers.reverse().map((change) => <DiaperRow key={change.id} change={change}/>)
        // }
        return this.props.diapers.reverse().map((change) => <DiaperRow key={change.id} change={change}/>)
    }

    render() {
        return (
            <div>
                <h1>All Diaper Changes</h1>
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
    return {getDiapers: () => dispatch(getDiapers())}
}

function msp(state) {
    return {diapers: state.diapers}
}

export default connect(msp,mdp)(Diapers)


