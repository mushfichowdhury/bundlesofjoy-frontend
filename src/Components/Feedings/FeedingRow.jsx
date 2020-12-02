import React from 'react'
import { connect } from 'react-redux'
import { deleteFeeding } from '../../redux/actions'

const FeedingRow = (props) => {

    const deleteHandler = () => {
        console.log("deleting feeding", props.feeding.id)
        props.reduxDeleteHandler(props.feeding.id)
    }

    return (
        <tr>
            <td>
                <span>{ new Date(Date.parse(props.feeding.created_at)).toDateString() }</span>
            </td>
            <td>
                <span>{ new Date(Date.parse(props.feeding.created_at)).toLocaleTimeString() }</span>
            </td>
            <td>
                {props.feeding.food ? <span>{ props.feeding.food }</span> : <span>{ props.feeding.feeding_method }</span>}
            </td>
            <td>
                <span>{ props.feeding.amount } oz.</span>
            </td>
            <td>
                <button onClick={deleteHandler}>Delete</button>
            </td>
        </tr>
    )
}

function mdp(dispatch) {
    return {
        reduxDeleteHandler: (feedingObj) => dispatch(deleteFeeding(feedingObj)),
    }
}

export default connect(null, mdp)(FeedingRow)