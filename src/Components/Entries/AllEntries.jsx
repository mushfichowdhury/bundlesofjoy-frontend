import React, { Component } from 'react'
import { Form, Item, Input } from 'semantic-ui-react';
import JournalEntries from './JournalEntries'
import './AllEntries.css'


export default class AllEntries extends Component {
    render() {
        return (
            <div>
                <Form >
                    <Form.Field className="entrySearchBar" control={Input} name="search" placeholder="Search" value={this.props.searchInput} onChange={this.props.handleSearch} />    
                </Form>
                <Item.Group divided className="entryContainer">
                    {
                        this.props.filteredEntries.reverse().map(entryObj => {
                            return <JournalEntries key={entryObj.id} entry={entryObj} removeEntry={this.removeEntry} />
                        })
                    }
                </Item.Group>
            </div>
        )
    }
}