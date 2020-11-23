import React from 'react'
import HomepageNaps from './Homepage Charts/HomepageNaps';
import JournalEntries from './JournalEntries'
import NewJournalEntry from './NewJournalEntry'
import ChildInfo from './ChildInfo'
import './Homepage.css'
import _ from 'underscore'

export default class Homepage extends React.Component {
    
    state = {
        entries: [],
        naps: [],
        feedings: [],
        diapers: [],
        children: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/journal_entries")
        .then(resp => resp.json())
        .then((allEntries) => {
        this.setState({
            entries: allEntries
        })
        })

        fetch("http://localhost:3000/naps")
        .then(resp => resp.json())
        .then((allEntries) => {
        this.setState({
            naps: allEntries
        })
        })

        fetch("http://localhost:3000/feedings")
        .then(resp => resp.json())
        .then((allEntries) => {
        this.setState({
            feedings: allEntries
        })
        })

        fetch("http://localhost:3000/diapers")
        .then(resp => resp.json())
        .then((allEntries) => {
        this.setState({
            diapers: allEntries
        })
        })

        fetch("http://localhost:3000/children")
        .then(resp => resp.json())
        .then((allEntries) => {
        this.setState({
            children: allEntries
        })
        })
    }

    getEntries = () => {
        return this.state.entries
    }

    renderEntries = () => {
        return this.state.entries.reverse().map((entryObj) => <JournalEntries key={entryObj.id} entry={entryObj} removeEntry={this.removeEntry} />)
    }

    addEntry = (newEntry) => {
        let updatedEntries = [...this.state.entries, newEntry]
        this.setState({
        entries: updatedEntries
        })
    }

    removeEntry = (entryObj) => {
        let updatedEntries = this.state.entries.filter((obj) => {
            return obj.id !== entryObj.id
        })
        this.setState({
            entries: updatedEntries
        })
    }

    renderChildren = () => {
        _.delay(3000)
        this.state.children.filter((child) => { return child.user_id === 1 }).map((child)=> <ChildInfo key={child.id} child={child} />)
    }


    render() {
        console.log("renderChildren", this.renderChildren())
    return (
        <div>
            <div className="App">
                <h1>Home</h1>
            </div>
            <br/><br/>
            <div className="grid-container" >
                {this.renderChildren()}
                <div className="Journal-Entries" >
                    <NewJournalEntry addEntry={this.addEntry} /> 
                    {this.renderEntries()}
                </div>
            </div>
            <HomepageNaps/>
        </div>
    )}
}
