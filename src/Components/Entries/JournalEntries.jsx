import React from "react";
import './JournalEntries.css'

class JournalEntries extends React.Component {

    deleteHandler = () => {
        fetch(`http://localhost:3000/api/v1/journal_entries/${this.props.entry.id}`, {
        method: "DELETE"
        })
        .then(resp => resp.json())
        .then((data) => {
            this.props.removeEntry(this.props.entry)
        })
    }

    render() {
        return (
        <div className="grid-container-entry">
            <div className="post-image">
                <img src={this.props.entry.image} />
            </div>
            <div className="post-content">
                <div className="post-date">
                    <h3 style={{justifyContent: "left"}}>{this.props.entry.title}</h3>
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

export default JournalEntries;
