import React from 'react';
import JournalEntries from './JournalEntries'
import NewJournalEntry from './NewJournalEntry'
import ChildInfo from './ChildInfo'
import './Homepage.css'
import LastDiaper from './LastDiaper';
import LastFeeding from './LastFeeding';
import LastNap from './LastNap';


export default class Homepage extends React.Component {
    state = {
        entries: [],
        naps: [],
        feedings: [],
        diapers: [],
        children: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/v1/journal_entries")
        .then(resp => resp.json())
        .then((allEntries) => {
        this.setState({
            entries: allEntries
        })
        })

        fetch("http://localhost:3000/api/v1/naps")
        .then(resp => resp.json())
        .then((allEntries) => {
        this.setState({
            naps: allEntries
        })
        })

        fetch("http://localhost:3000/api/v1/feedings")
        .then(resp => resp.json())
        .then((allEntries) => {
        this.setState({
            feedings: allEntries
        })
        })

        fetch("http://localhost:3000/api/v1/diapers")
        .then(resp => resp.json())
        .then((allEntries) => {
        this.setState({
            diapers: allEntries
        })
        })

        fetch("http://localhost:3000/api/v1/children")
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
        const entries = this.state.entries 
        console.log(entries)
        return this.state.entries.reverse().map((entryObj) => <JournalEntries key={entryObj.id} entry={entryObj} removeEntry={this.removeEntry} />)
    }

    addEntry = (newEntry) => {
        let updatedEntries = [...this.state.entries, newEntry]
        this.setState({
            entries: [updatedEntries]
        })
    }

    removeEntry = (entryObj) => {
        let updatedEntries = this.state.entries.filter((obj) => {
            return obj.id !== entryObj.id
        })
        this.setState({
            entries: [updatedEntries]
        })
    }

    renderChildren = () => {
        this.state.children.filter((child) => { return child.user_id === true }).map((child)=> <ChildInfo key={child.id} child={child} />)
    }


    render() {
    return (
        <div>
            <div className="App">
                <h1>Home</h1>
            </div>
            <br/><br/>
            <div className="grid-container">
                {this.state.children.length && this.state.diapers.length && this.state.feedings.length > 0 ?
                this.renderChildren() : <p>loading...</p>
                }

                {/* {this.state.children.length && this.state.diapers.length && this.state.feedings.length > 0 ?
                <div>
                <div className="Last-Logs">
                <div className="Log-Diaper-Change" >
                    <LastDiaper diapers={this.state.diapers}/>
                </div>

                <div className="Log-Feeding" >
                    <LastFeeding feedings={this.state.diapers}/>
                </div>

                <div className="Log-Nap" >
                    <LastNap/>
                </div>
                </div>
                </div>
                : null
                } */}
                
                
                <div className="Journal-Entries" >
                    <NewJournalEntry addEntry={this.addEntry} /> 
                    {this.renderEntries()}
                </div>
            </div>
        </div>
    )
}
}