import React from "react";
import { connect } from 'react-redux'
import { Button, Form } from "semantic-ui-react";
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
                <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field>
                    <Form.Input name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
                    </Form.Field>
                    
                    <Form.Field>
                    <Form.Input name="image" placeholder="Photo" value={this.state.image} onChange={this.handleChange}/>
                    </Form.Field>
                    </Form.Group>

                    <Form.TextArea name="content" placeholder="Write Journal Entry" id="content" value={this.state.content} onChange={this.handleChange}/>
                    <Button style={{background: "rgb(207, 207, 250)", color: "white"}} type="submit">Post</Button>
                </Form>
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

