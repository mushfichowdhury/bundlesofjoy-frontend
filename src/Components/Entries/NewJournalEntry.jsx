import React from "react";
import { connect } from 'react-redux'
import { newEntry } from '../../redux/actions'
import "./NewJournalEntry.css"

class NewJournalEntry extends React.Component {

    state={
        user_id: 1,
        title: "",
        image: "",
        content: "",
    }

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.reduxHandleSubmit(this.state)
        // this.resetForm(e)
        this.setState=({
            user_id: 1,
            title: "",
            image: "",
            content: "",
        })

    }
    
    render() {
        return (
            <div className="new-journal-entry">
                <form onSubmit={this.handleSubmit}>
                    <input name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
                    <input name="content" placeholder="Write Journal Entry" id="content" rows={10} value={this.state.content} onChange={this.handleChange}/>
                    <input name="image" placeholder="Photo" value={this.state.image} onChange={this.handleChange}/>
                    <input type="submit" placeholder="Share" />
                </form>
            </div>
        );
    }
}

function mdp(dispatch){
    return { 
        reduxHandleSubmit: (newEntryObj) => dispatch(newEntry(newEntryObj))
    }
}

export default connect(null, mdp)(NewJournalEntry)

