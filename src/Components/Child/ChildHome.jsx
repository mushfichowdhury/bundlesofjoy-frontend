import React from 'react';
import { connect } from 'react-redux'
import { getEntries, getChildren } from '../../redux/actions'
import ChildJournalEntries from './ChildJournalEntries'
// import ChildInfo from '../Child/ChildInfo'
import { Card } from 'semantic-ui-react';


class ChildHome extends React.Component {
    state = {
        user: "",
        entries: [],
        children: [],
        searchValue: ""
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

    // handleSearchFilterRender = (allEntries, searchText) => {
    //     if (searchText === ""){
    //         return allEntries
    //     } else {
    //         let searchArray = searchText.split(",").map(e=> e.trim()).filter( e => e !=="")
    //         console.log("searchArray", searchArray)
    //         return allEntries.filter(entry => { 
    //             searchArray.findAll( term => `${entry.title}`.includes(term))
    //         })
    //     }
    // }
    
    // mainEntriesRender = () => {
    //     let allEntries = this.renderEntries()
    //     let searchText = this.state.searchValue
    //     let renderList = this.handleSearchFilterRender(allEntries, searchText)
    //     return renderList.map((entry) => <ChildJournalEntries key={entry.id} entry={entry}/>)
    // }
    
    searchHandler = (e) => {
        const search = e.target.value 
        this.setState({ searchValue: search })
    }

    render() {
        console.log("childhome", this.state.searchValue)
    return (
        <div>
            <div className="App">
                <h1 style={{marginTop: "1%"}}>Bundles of Joy Memory Bank</h1>
            </div>
            <br/><br/>
            <div className="App">
                <Card.Group itemsPerRow={4} >
                    {this.renderEntries()}
                </Card.Group>
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