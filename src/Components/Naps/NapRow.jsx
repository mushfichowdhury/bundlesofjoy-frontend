import React from 'react'
import { connect } from 'react-redux'
import { deleteNap } from '../../redux/actions'

const NapRow = (props) => {

    const deleteHandler = () => {
        console.log("deleting nap", props.nap.id)
        props.reduxDeleteHandler(props.nap.id)
    }
    return (
        <tr>
            <td>
                <span>{ new Date(Date.parse(props.nap.created_at)).toDateString() }</span>
            </td>
            <td>
                <span>{ new Date(Date.parse(props.nap.created_at)).toLocaleTimeString() }</span>
            </td>
            <td>
                <span>{ props.nap.duration }</span>
            </td>
            <td>
                <button onClick={deleteHandler}>Delete</button>
            </td>
        </tr>
    )
}

function mdp(dispatch) {
    return {
        reduxDeleteHandler: (napObj) => dispatch(deleteNap(napObj)),
    }
}

export default connect(null, mdp)(NapRow)