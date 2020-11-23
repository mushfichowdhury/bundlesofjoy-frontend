import React from "react";
import "./NewJournalEntry.css"

class NewJournalEntry extends React.Component {

    state={
        user_id: 1,
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
        fetch("http://localhost:3000/journal_entries", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then((newEntry) => {
            this.props.addEntry(newEntry)
        })
        // this.resetForm(e)
        this.setState=({
            user_id: 1,
            image: "",
            content: "",
        })

    }

    // resetForm = (e) => {
    //   console.log("reset???")
    //   this.setState=({
    //     title: "",
    //     content: "",
    //     author: ""
    //   })
    // }
    
    render() {
        console.log("Entry", this.state)
        return (
            <div className="new-journal-entry">
                <form onSubmit={this.handleSubmit}>
                    <input name="content" placeholder="Write Journal Entry" rows={10} value={this.state.content} onChange={this.handleChange}/>
                    <input name="image" placeholder="Photo" value={this.state.image} onChange={this.handleChange}/>
                    <input type="submit" value="Share" />
                </form>
            </div>
        );
    }
}

export default NewJournalEntry;
