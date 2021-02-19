import React from 'react'
import { connect } from 'react-redux'
import { Button, Table } from 'semantic-ui-react'
import { deleteNap } from '../../redux/actions'

const NapRow = (props) => {

    const deleteHandler = () => {
        console.log("deleting nap", props.nap.id)
        props.reduxDeleteHandler(props.nap.id)
    }
    return (
        <Table.Row style={{textAlign: "center"}}>
            <Table.Cell>
                <span>{ new Date(Date.parse(props.nap.created_at)).toDateString() }</span>
            </Table.Cell>
            <Table.Cell>
                <span>{ new Date(Date.parse(props.nap.created_at)).toLocaleTimeString() }</span>
            </Table.Cell>
            <Table.Cell>
                <span>{ props.nap.duration }</span>
            </Table.Cell>
            <Table.Cell>
                <Button style={{background: "rgb(150, 150, 250)", color: "white"}} onClick={deleteHandler}>Delete</Button>
            </Table.Cell>
        </Table.Row>
    )
}

function mdp(dispatch) {
    return {
        reduxDeleteHandler: (napObj) => dispatch(deleteNap(napObj)),
    }
}

export default connect(null, mdp)(NapRow)