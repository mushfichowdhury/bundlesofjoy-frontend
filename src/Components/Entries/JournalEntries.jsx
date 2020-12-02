import React from "react";
import { connect } from 'react-redux'
import { Button, Item } from "semantic-ui-react";
import { deleteEntry } from '../../redux/actions'
import './JournalEntries.css'

class JournalEntries extends React.Component {

    deleteHandler = () => {
        console.log("deleting entry", this.props.entry.id)
        this.props.reduxDeleteHandler(this.props.entry.id)
    }

    render() {
        return (
        <Item style={{textAlign: "left"}}>
            <Item.Image src={this.props.entry.image} />
                <Item.Content>
                    <Item.Header>{this.props.entry.title}</Item.Header>
                    <Item.Meta>
                        <span>{new Date(Date.parse(this.props.entry.created_at)).toDateString()}</span>
                    </Item.Meta>
                    <Item.Description>{this.props.entry.content}</Item.Description>
                    <Item.Extra>
                        <Button floated="right" style={{background: "rgb(207, 207, 250)", color: "white"}} onClick={this.deleteHandler}> Delete </Button>
                    </Item.Extra>
                </Item.Content>
        </Item>
        );
    }
}

function mdp(dispatch) {
    return {
        reduxDeleteHandler: (entryObj) => dispatch(deleteEntry(entryObj)),
    }
}

export default connect(null, mdp)(JournalEntries)
