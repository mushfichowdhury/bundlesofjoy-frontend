import React from "react";
import { connect } from 'react-redux'
import { Button } from "semantic-ui-react";
import { deleteEntry } from '../../redux/actions'
import './AllEntries.css'

class JournalEntries extends React.Component {

    deleteHandler = () => {
        console.log("deleting entry", this.props.entry.id)
        this.props.reduxDeleteHandler(this.props.entry.id)
    }

    render() {
        return (
            <>
                <div className="timeline-content">
                    <h3 className="date">{new Date(Date.parse(this.props.entry.created_at)).toDateString()}</h3>
                    <h1>{this.props.entry.title}</h1>
                    <p>{this.props.entry.content}</p>
                    <img src={this.props.entry.image} alt="entryimage" />
                    <Button floated="right" style={{background: "rgb(150, 150, 250)", color: "white"}} onClick={this.deleteHandler}> Delete </Button>
                </div>
                
            {/* <Item style={{textAlign: "left"}}>
                <Item.Image src={this.props.entry.image} />
                <Item.Content>
                    <Item.Header>{this.props.entry.title}</Item.Header>
                    <Item.Meta>
                        <span>{new Date(Date.parse(this.props.entry.created_at)).toDateString()}</span>
                    </Item.Meta>
                    <Item.Description>{this.props.entry.content}</Item.Description>
                    <Item.Extra>
                        <Button floated="right" style={{background: "rgb(150, 150, 250)", color: "white"}} onClick={this.deleteHandler}> Delete </Button>
                    </Item.Extra>
                </Item.Content>
            </Item> */}
        </>
        );
    }
}

function mdp(dispatch) {
    return {
        reduxDeleteHandler: (entryObj) => dispatch(deleteEntry(entryObj)),
    }
}

export default connect(null, mdp)(JournalEntries)
