import React, { Component } from 'react'
import DiaperRow from "./DiaperRow"
import NewDiaper from './NewDiaper'
import { Link } from "react-router-dom";


export default class Diapers extends Component {
    state = {
		diapers: [],
	}

	componentDidMount = () => {
		fetch("http://localhost:3000/diapers")
		.then(resp => resp.json())
		.then((data) => {
			this.setState({
				diapers: data
			})
		})
    }
    
    submitHandler = (newDiaperChange) => {
        fetch('http://localhost:3000/diapers', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(newDiaperChange)
        })
            .then(resp => resp.json())
            .then(diaperchange => this.setState({ diapers: [diaperchange, ...this.state.diapers] }))
            .catch(console.log)
    }

    renderDiaperChanges = () => {
        return this.state.diapers.map((change) => <DiaperRow key={change.id} change={change}/>)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Link to="/home"><button>Go to Home</button></Link>
                <Link to="/diapers"><button>Go to Diapers</button></Link>
                <Link to="/feedings"><button>Go to Feedings</button></Link>
                <Link to="/naps"><button>Go to Naps</button></Link>
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
                        </tr>
                    </thead>
                    <tbody>{this.renderDiaperChanges()}</tbody>
                </table>
            </div>
        )
    }
}

