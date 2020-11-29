import React from 'react';
import NapRow from "./NapRow"
import NewNap from './NewNap'
import HomepageNaps from './Homepage Charts/HomepageNaps'


export default class Naps extends React.Component {
    state = {
		naps: [],
	}

	componentDidMount = () => {
		fetch("http://localhost:3000/api/v1/naps")
		.then(resp => resp.json())
		.then((data) => {
			this.setState({
				naps: data
			})
		})
    }

    submitHandler = (newNap) => {
        fetch('http://localhost:3000/api/v1/naps', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(newNap)
        })
            .then(resp => resp.json())
            .then(nap => this.setState({
                naps: nap
            }))
            .catch(console.log)
    }
    
    renderNaps = () => {
        return this.state.naps.reverse().map((nap) => <NapRow key={nap.id} nap={nap} />)
    }
    render(){
        console.log("naps", this.state.naps)
        return (
            <div >
                <h1>All Naps</h1>
                <HomepageNaps naps={this.state.naps}/>
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
                        </tr>
                    </thead>
                    <tbody>{this.renderNaps()}</tbody>
                </table>
            </div>
        )}
}

