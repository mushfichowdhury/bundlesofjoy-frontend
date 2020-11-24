import React, { useState, useEffect } from 'react';
import { useStateValue } from './StateProvider';
import NapRow from "./NapRow"
import NewNap from './NewNap'


export default function Naps () {
    // state = {
	// 	naps: [],
	// }

	// componentDidMount = () => {
	// 	fetch("http://localhost:3000/naps")
	// 	.then(resp => resp.json())
	// 	.then((data) => {
	// 		this.setState({
	// 			naps: data
	// 		})
	// 	})
    // }

    const [{ currentUser }, dispatch] = useStateValue();
    const [naps, setNaps] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/naps")
        .then(resp => resp.json())
        .then((allNap) => setNaps(allNap.filter(obj => (obj.child.user_id === {currentUser}.id))))

        console.log("Naps:", {naps});
    }, [naps]);

    const submitHandler = (newNap) => {
        fetch('http://localhost:3000/naps', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(newNap)
        })
            .then(resp => resp.json())
            .then(nap => setNaps(nap))
            .catch(console.log)
    }
    
    const renderNaps = () => {
        return naps.map((nap) => <NapRow key={nap.id} nap={nap} />)
    }

        return (
            <div >
                <h1 > All Naps</h1>
                <NewNap submitHandler={submitHandler} />
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
                    <tbody>{renderNaps()}</tbody>
                </table>
            </div>
        )
}

