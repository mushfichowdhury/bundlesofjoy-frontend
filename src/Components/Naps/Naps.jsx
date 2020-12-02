import React from 'react';
import { connect } from 'react-redux'
import { getNaps } from '../../redux/actions'
import NapRow from "./NapRow"
import NewNap from './NewNap'
import HomepageNaps from '../Graphs/HomepageNaps'


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
                <HomepageNaps/>
                <NewNap submitHandler={this.submitHandler} />
                <table className="napTable" >
                    <thead style={{textAlign: "center"}}>
                        <tr>
                            <th >
                                Date
                            </th>
                            <th >
                                Time
                            </th>
                            <th>
                                Duration
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>{this.renderNaps()}</tbody>
                </table>
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
