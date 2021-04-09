import React from "react";
import { connect } from 'react-redux'
import { Button, Form, Input, TextArea } from "semantic-ui-react";
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
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group widths='equal'>
                        <Form.Field control={Input} name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
                        <Form.Field control={Input} name="image" placeholder="Photo" value={this.state.image} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Field style={{ height: '10em'}} control={TextArea} name="content" placeholder="Write Journal Entry" id="content" value={this.state.content} onChange={this.handleChange}/>
                    <Button type="submit" style={{"background": "rgb(150, 150, 250)", "color": "white"} }>Post</Button>
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

