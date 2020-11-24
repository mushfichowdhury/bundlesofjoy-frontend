import React, { useState, useEffect } from 'react';
import HomepageNaps from './Homepage Charts/HomepageNaps';
import JournalEntries from './JournalEntries'
import NewJournalEntry from './NewJournalEntry'
import ChildInfo from './ChildInfo'
import './Homepage.css'
import _ from 'underscore'
import { useStateValue } from './StateProvider';


export default function Homepage() {
    const [{ user }, dispatch] = useStateValue();
    const [entries, setEntries] = useState([]);
    const [naps, setNaps] = useState([]);
    const [feedings, setFeedings] = useState([]);
    const [diapers, setDiapers] = useState([]);
    const [children, setChildren] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/journal_entries")
        .then(resp => resp.json())
        .then((allEntries) => setEntries(allEntries))

        fetch("http://localhost:3000/naps")
        .then(resp => resp.json())
        .then((allNap) => setNaps(allNap.filter(obj => (obj.user_id === {user}.id))))

        fetch("http://localhost:3000/feedings")
        .then(resp => resp.json())
        .then((allFeedings) => setFeedings(allFeedings.filter(obj => (obj.user_id === {user}.id))))

        fetch("http://localhost:3000/diapers")
        .then(resp => resp.json())
        .then((allDiapers) => setDiapers(allDiapers.filter(obj => (obj.user_id === {user}.id))))

        fetch("http://localhost:3000/children")
        .then(resp => resp.json())
        .then((allChildren) => setChildren(allChildren.filter(obj => (obj.user_id === {user}.id))))

        console.log("Entries:", {entries});
        console.log("Naps:", {naps});
        console.log("Diapers:", {diapers});
    }, []);
    // state = {
    //     entries: [],
    //     naps: [],
    //     feedings: [],
    //     diapers: [],
    //     children: []
    // }

    // componentDidMount() {
    //     fetch("http://localhost:3000/journal_entries")
    //     .then(resp => resp.json())
    //     .then((allEntries) => {
    //     this.setState({
    //         entries: allEntries.filter(obj => (obj.user_id === {user}.id))
    //     })
    //     })

    //     fetch("http://localhost:3000/naps")
    //     .then(resp => resp.json())
    //     .then((allEntries) => {
    //     this.setState({
    //         naps: allEntries
    //     })
    //     })

    //     fetch("http://localhost:3000/feedings")
    //     .then(resp => resp.json())
    //     .then((allEntries) => {
    //     this.setState({
    //         feedings: allEntries
    //     })
    //     })

    //     fetch("http://localhost:3000/diapers")
    //     .then(resp => resp.json())
    //     .then((allEntries) => {
    //     this.setState({
    //         diapers: allEntries
    //     })
    //     })

    //     fetch("http://localhost:3000/children")
    //     .then(resp => resp.json())
    //     .then((allEntries) => {
    //     this.setState({
    //         children: allEntries
    //     })
    //     })
    // }

    const getEntries = () => {
        return {entries}
    }

    const renderEntries = () => {
        return {entries}.reverse().map((entryObj) => <JournalEntries key={entryObj.id} entry={entryObj} removeEntry={this.removeEntry} />)
    }

    const addEntry = (newEntry) => {
        let updatedEntries = [...{entries}, newEntry]
        setEntries(updatedEntries)
    }

    const removeEntry = (entryObj) => {
        let updatedEntries = {entries}.filter((obj) => {
            return obj.id !== entryObj.id
        })
        setEntries(updatedEntries)
    }

    // const renderChildren = () => {
    //     children.filter((child) => { return child.user_id === {user}.id }).map((child)=> <ChildInfo key={child.id} child={child} />)
    // }


    // render() {
    //     console.log("renderChildren", this.renderChildren())
    return (
        <div>
            <div className="App">
                <h1>Home</h1>
            </div>
            <br/><br/>
            <div className="grid-container" >
                {/* {renderChildren()} */}
                <div className="Journal-Entries" >
                    <NewJournalEntry addEntry={addEntry} /> 
                    {renderEntries()}
                </div>
            </div>
            <HomepageNaps/>
        </div>
    )
}
