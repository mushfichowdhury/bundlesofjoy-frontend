import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Statistic } from 'semantic-ui-react'
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
                <Statistic style={{marginTop: "1%"}}>
                    <Statistic.Value>{this.props.feedings.filter(feeding => new Date(Date.parse(feeding.created_at)).toDateString() === new Date(Date.parse(this.props.feedings[this.props.feedings.length-1].created_at)).toDateString()).length}</Statistic.Value>
                    <Statistic.Label>Feedings Today</Statistic.Label>
                </Statistic>
                <NewFeeding />
                    <Table striped className="diaperTable" style={{width: "75%", margin: "auto"}} >
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
                        <Table.Body onScroll >{this.renderFeedings()}</Table.Body>
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

