import React from 'react';
import { connect } from 'react-redux'
import { getNaps } from '../../redux/actions'
import NapRow from "./NapRow"
import NewNap from './NewNap'
import HomepageNaps from '../Graphs/HomepageNaps'
import { Table, Statistic } from 'semantic-ui-react';


class Naps extends React.Component {
    state = {
		naps: [],
	}

	componentDidMount = () => {
    if(this.props.user === null){
        this.props.routerProps.history.push("/login")
    }
    this.props.getNaps()
    }
    
    renderNaps = () => {
        return this.props.naps.reverse().map((nap) => <NapRow key={nap.id} nap={nap} />)
    }
    render(){
        return (
            <div>
                <Statistic style={{marginTop: "1%"}}>
                    <Statistic.Value>{this.props.naps.filter(nap => new Date(Date.parse(nap.created_at)).toDateString() === new Date(Date.parse(this.props.naps[this.props.naps.length-1].created_at)).toDateString()).length}</Statistic.Value>
                    <Statistic.Label>Naps Today</Statistic.Label>
                </Statistic>
                <NewNap submitHandler={this.submitHandler} />
                <Table striped className="diaperTable" style={{width: "75%", margin: "auto"}} >
                    <Table.Header style={{textAlign: "center"}}>
                        <Table.Row>
                            <Table.HeaderCell >
                                Date
                            </Table.HeaderCell>
                            <Table.HeaderCell >
                                Time
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Duration
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Action
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body onScroll>{this.renderNaps()}</Table.Body>
                </Table>
            </div>
        )}
}


function mdp(dispatch) {
    return {getNaps: () => dispatch(getNaps())}
}

function msp(state) {
    return {naps: state.naps}
}

export default connect(msp,mdp)(Naps)
