import React from 'react';
import { connect } from 'react-redux'
import { getEntries, getChildren } from '../../redux/actions'
import JournalEntries from '../Entries/JournalEntries'
import ChildInfo from '../Child/ChildInfo'


class ChildHome extends React.Component {
    state = {
        user: "",
        entries: [],
        children: []
    }

    componentDidMount() {
        if(this.props.user === null){
            this.props.routerProps.history.push("/login")
        }
        this.props.getEntries()
        this.props.getChildren()
        
    }

    getEntries = () => {
        return this.state.entries
    }

    renderEntries = () => {
        const entries = this.props.entries 
        return entries.reverse().map((entryObj) => <JournalEntries key={entryObj.id} entry={entryObj} removeEntry={this.removeEntry} />)
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
        return this.state.children.filter((child) => { return child.user_id === this.props.user.user.id }).map((child)=> <ChildInfo key={child.id} child={child} />)
    }


    render() {
        console.log("render", this.props.user)
    return (
        <div>
            <div className="App">
                <h1>Home</h1>
            </div>
            <br/><br/>
            <div className="grid-container">
                <div className="Journal-Entries" >
                    {this.renderEntries()}
                </div>
            </div>
        </div>
    )
}}

function mdp(dispatch) {
    return {
        getEntries: () => dispatch(getEntries()),
        getChildren: () => dispatch(getChildren())
    }
}

function msp(state) {
    return state
}

export default connect(msp,mdp)(ChildHome)