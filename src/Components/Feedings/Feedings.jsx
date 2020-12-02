import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
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
                    <Table className="feedingTable" >
                        <Table.Header style={{textAlign: "center"}}>
                            <Table.Row>
                                <Table.HeaderCell >
                                    Date
                                </Table.HeaderCell>
                                <Table.HeaderCell >
                                    Time
                                </Table.HeaderCell>
                                <Table.HeaderCell >
                                    Meal
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Amount
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Action
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>{this.renderFeedings()}</Table.Body>
                    </Table>
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

