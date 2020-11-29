import React from 'react'

const FeedingRow = (props) => {

    console.log("Date", props.feeding.created_at)
    return (
        <tr>
            <td>
                <span>{ new Date(Date.parse(props.feeding.created_at)).toDateString() }</span>
            </td>
            <td>
                <span>{ new Date(Date.parse(props.feeding.created_at)).toLocaleTimeString() }</span>
            </td>
            <td>
                <span>{ props.feeding.feeding_method }</span>
            </td>
            <td>
                <span>{ props.feeding.duration }</span>
            </td>
            <td>
                <span>{ props.feeding.amount } oz.</span>
            </td>
        </tr>
    )
}

export default FeedingRow