import React from 'react';
import { connect } from 'react-redux'
import { getNaps } from '../../redux/actions'
import NapRow from "./NapRow"
import NewNap from './NewNap'
import HomepageNaps from '../Graphs/HomepageNaps'
import { Table } from 'semantic-ui-react';


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
            <div >
                <h1>All Naps</h1>
                {/* <HomepageNaps/> */}
                <NewNap submitHandler={this.submitHandler} />
                <Table striped className="napTable" >
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
                    <Table.Body>{this.renderNaps()}</Table.Body>
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
