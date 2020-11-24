import React, { Component } from 'react'
import DiaperRow from "./DiaperRow"
import NewDiaper from './NewDiaper'


export default class Diapers extends Component {
    state = {
		diapers: [],
	}

	componentDidMount = () => {
		fetch("http://localhost:3000/api/v1/diapers")
		.then(resp => resp.json())
		.then((data) => {
			this.setState({
				diapers: data
			})
		})
    }
    
    submitHandler = (newDiaperChange) => {
        fetch('http://localhost:3000/api/v1/diapers', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(newDiaperChange)
        })
            .then(resp => resp.json())
            .then(diaperchange => this.setState({ diapers: [...this.state.diapers, diaperchange] }))
            .catch(console.log)
        this.renderDiaperChanges()
    }

    renderDiaperChanges = () => {
        return this.state.diapers.reverse().map((change) => <DiaperRow key={change.id} change={change}/>)
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
                        </tr>
                    </thead>
                    <tbody>{this.renderDiaperChanges()}</tbody>
                </table>
            </div>
        )
    }
}

