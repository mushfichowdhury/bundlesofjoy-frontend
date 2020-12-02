import React from 'react'
import { connect } from 'react-redux'
import { Button, Table } from 'semantic-ui-react'
import { deleteFeeding } from '../../redux/actions'

const FeedingRow = (props) => {

    const deleteHandler = () => {
        console.log("deleting feeding", props.feeding.id)
        props.reduxDeleteHandler(props.feeding.id)
    }

    return (
        <Table.Row style={{textAlign: "center"}}>
            <Table.Cell>
                <span>{ new Date(Date.parse(props.feeding.created_at)).toDateString() }</span>
            </Table.Cell>
            <Table.Cell>
                <span>{ new Date(Date.parse(props.feeding.created_at)).toLocaleTimeString() }</span>
            </Table.Cell>
            <Table.Cell>
                {props.feeding.food ? <span>{ props.feeding.food }</span> : <span>{ props.feeding.feeding_method }</span>}
            </Table.Cell>
            <Table.Cell>
                <span>{ props.feeding.amount } oz.</span>
            </Table.Cell>
            <Table.Cell>
                <Button style={{background: "rgb(207, 207, 250)", color: "white"}} onClick={deleteHandler}>Delete</Button>
            </Table.Cell>
        </Table.Row>
    )
}

function mdp(dispatch) {
    return {
        reduxDeleteHandler: (feedingObj) => dispatch(deleteFeeding(feedingObj)),
    }
}

export default connect(null, mdp)(FeedingRow)