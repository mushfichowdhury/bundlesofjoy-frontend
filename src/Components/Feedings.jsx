import React, { Component } from 'react'
import FeedingRow from "./FeedingRow"
import NewFeeding from './NewFeeding'

export default class Feedings extends Component {
    state = {
		feedings: [],
	}

	componentDidMount = () => {
		fetch("http://localhost:3000/feedings")
		.then(resp => resp.json())
		.then((data) => {
			this.setState({
				feedings: data
			})
		})
    }

    submitHandler = (newFeeding) => {
        fetch('http://localhost:3000/feedings', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(newFeeding)
        })
            .then(resp => resp.json())
            .then(feed => this.setState({ feedings: [feed, ...this.state.feedings] }))
            .catch(console.log)
    }
    
    renderFeedings = () => {
        return this.state.feedings.map((feeding) => <FeedingRow key={feeding.id} feeding={feeding} />)
        // console.log(this.state.feedings)
    }

    render() {
        return (
            <div>
                <h1>All Feedings</h1>
                <NewFeeding submitHandler={this.submitHandler} />
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
                                Method
                            </th>
                            <th>
                                Duration
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

