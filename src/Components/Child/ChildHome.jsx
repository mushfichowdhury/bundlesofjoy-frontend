import React from 'react';
import { connect } from 'react-redux'
import { getEntries, getChildren } from '../../redux/actions'
import ChildJournalEntries from './ChildJournalEntries'
import ChildInfo from '../Child/ChildInfo'


class ChildHome extends React.Component {
    state = {
        user: "",
        entries: [],
        children: []
    }

    componentDidMount() {
        this.props.getEntries()
        this.props.getChildren()
    }

    getEntries = () => {
        return this.state.entries
    }

    renderEntries = () => {
        const entries = this.props.entries 
        return entries.reverse().map((entryObj) => <ChildJournalEntries key={entryObj.id} entry={entryObj} />)
    }

    renderChildren = () => {
        return this.state.children.filter((child) => { return child.user_id === this.props.user.user.id }).map((child)=> <ChildInfo key={child.id} child={child} />)
    }


    render() {
        console.log("render", this.props.user)
    return (
        <div>
            <div className="App">
                {/* <h1>{this.props.child[0].name}</h1> */}
            </div>
            <br/><br/>
            <div className="App">
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