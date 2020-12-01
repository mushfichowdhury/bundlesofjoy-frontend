import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFeedings } from '../../redux/actions'
import FeedingRow from "./FeedingRow"
import NewFeeding from './NewFeeding'

class Feedings extends Component {
    state = {
		feedings: [],
	}

	componentDidMount = () => {
    if(this.props.user === null){
        this.props.routerProps.history.push("/login")
    }
    this.props.getFeedings()
    }
    
    renderFeedings = () => {
        if(this.props.feedings === undefined){
        } else {
        return this.props.feedings.reverse().map((feeding) => <FeedingRow key={feeding.id} feeding={feeding} />)
        }
    }

    render() {
        return (
            <div>
                <h1>All Feedings</h1>
                <NewFeeding />
                    <table className="feedingTable" >
                        <thead style={{textAlign: "center"}}>
                            <tr>
                                <th >
                                    Date
                                </th>
                                <th >
                                    Time
                                </th>
                                <th >
                                    Meal
                                </th>
                                <th>
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>{this.renderFeedings()}</tbody>
                    </table>
            </div>
        )
    }
}

function mdp(dispatch) {
    return {
        getFeedings: () => dispatch(getFeedings())
    }
}

function msp(state) {
    return {feedings: state.feedings}
}

export default connect(msp,mdp)(Feedings)

