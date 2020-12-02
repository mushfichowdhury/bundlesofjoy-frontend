import React from "react";
import { connect } from 'react-redux'
import { deleteEntry } from '../../redux/actions'
import '../Entries/JournalEntries.css'

class ChildJournalEntries extends React.Component {

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
                    <h2>{this.props.entry.title}</h2>
                </div>

                <div className="post-button">
                    <h3>{ new Date(Date.parse(this.props.entry.created_at)).toDateString() }</h3>
                </div>

                <div className="post-text" >
                    <p>{this.props.entry.content}</p>
                </div>
            </div>
        </div>
        );
    }
}

export default ChildJournalEntries
