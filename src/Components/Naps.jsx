import React, { Component } from 'react'
import NapRow from "./NapRow"
import NewNap from './NewNap'
import { Link } from "react-router-dom";


export default class Naps extends Component {
    state = {
		naps: [],
	}

	componentDidMount = () => {
		fetch("http://localhost:3000/naps")
		.then(resp => resp.json())
		.then((data) => {
			this.setState({
				naps: data
			})
		})
    }

    submitHandler = (newNap) => {
        fetch('http://localhost:3000/naps', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(newNap)
        })
            .then(resp => resp.json())
            .then(nap => this.setState({ naps: [nap, ...this.state.naps] }))
            .catch(console.log)
    }
    
    renderNaps = () => {
        return this.state.naps.map((nap) => <NapRow key={nap.id} nap={nap} />)
    }

    render() {
        return (
            <div>
                <Link to="/home"><button>Go to Home</button></Link>
                <Link to="/diapers"><button>Go to Diapers</button></Link>
                <Link to="/feedings"><button>Go to Feedings</button></Link>
                <Link to="/naps"><button>Go to Naps</button></Link>
                <h1>All Naps</h1>
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
        )
    }
}

