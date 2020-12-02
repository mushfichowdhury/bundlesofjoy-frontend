import React from "react";
import { connect } from 'react-redux'
import { deleteEntry } from '../../redux/actions'
import './JournalEntries.css'

class JournalEntries extends React.Component {

    deleteHandler = () => {
        console.log("deleting entry", this.props.entry.id)
        this.props.reduxDeleteHandler(this.props.entry.id)
    }

    render() {
        return (
        <div className="grid-container-entry">
            <div className="post-image">
                <img src={this.props.entry.image} />
            </div>
            <div className="post-content">
                <div className="post-date">
                    {/* <h3 style={{justifyContent: "left"}}>{this.props.entry.title}</h3> */}
                    <h4>{ new Date(Date.parse(this.props.entry.created_at)).toDateString() }</h4>
                </div>

                <div className="post-button">
                    <button onClick={this.deleteHandler}> Delete </button>
                </div>

                <div className="post-text" >
                    <p>{this.props.entry.content}</p>
                </div>
            </div>
        </div>
        );
    }
}

function mdp(dispatch) {
    return {
        reduxDeleteHandler: (entryObj) => dispatch(deleteEntry(entryObj)),
    }
}

export default connect(null, mdp)(JournalEntries)
