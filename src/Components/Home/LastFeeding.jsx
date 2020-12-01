import React from 'react'

export default function LastFeeding(props) {
    let dateCreated = new Date(Date.parse(props.feedings[props.feedings.length-1].created_at))
    let dateNow = Date.now()
    let difference = new Date(dateNow - dateCreated).getMinutes()
    let name = props.feedings[props.feedings.length-1].child.name
    return (
        <div>
            <h1>Last Feeding</h1>
            <h3>{difference} minutes ago</h3> 
            <strong>Child: {name}</strong>
            <p>Duration: <strong>{props.feedings[props.feedings.length-1].duration}</strong></p> 
        </div>
    )
}


