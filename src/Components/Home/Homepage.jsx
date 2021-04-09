import React from 'react';
import { connect } from 'react-redux'
import { getNaps, getDiapers, getFeedings, getEntries, getChildren } from '../../redux/actions'
import NewJournalEntry from '../Entries/NewJournalEntry'
import './Homepage.css'
import RecentEvents from './RecentEvents';
import AllEntries from '../Entries/AllEntries';
// import DailyStats from './DailyStats';


class Homepage extends React.Component {
    state = {
        user: "",
        entries: [],
        naps: [],
        feedings: [],
        diapers: [],
        children: [],
        searchInput: ""
    }

    componentDidMount() {
        if(this.props.user === null){
            this.props.routerProps.history.push("/login")
        }
        this.props.getEntries()
        this.props.getNaps()
        this.props.getFeedings()
        this.props.getDiapers()
        this.props.getChildren()
        
    }

    getEntries = () => {
        return this.state.entries
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

    handleSearch = (e) => {
        console.log("Search Text", e.target.value)
        this.setState({
            searchInput: e.target.value
        })
    }


    // renderChildren = () => {
    //     return this.state.children.filter((child) => { return child.user_id === this.props.user.user.id }).map((child)=> <ChildInfo key={child.id} child={child} />)
    // }


    render() {
        console.log("Logged In As:", this.props.user)

        const filteredEntries = 
            this.props.entries.filter(entry => {
                return entry.title.toLowerCase().includes(this.state.searchInput.toLowerCase())
            })
    return (
        <div className="homepage">
            {/* <DailyStats
                feedings={this.state.feedings}
                diapers={this.state.diapers}
                naps={this.state.naps}
            /> */}
            <div className="grid-container">
                {this.props.diapers.length && this.props.feedings.length > 0 ?
                    <div className="Side-Bar" >
                    <NewJournalEntry addEntry={this.addEntry} />
                    <RecentEvents diapers={this.props.diapers} feedings={this.props.feedings} naps={this.props.naps} style={{marginLeft: "500px"}}/>
                </div>
                : null
                }
                <div className="Journal-Entries" >
                    <AllEntries
                        className="entryContainer"
                        renderEntries={this.renderEntries}
                        filteredEntries={filteredEntries}
                        searchInput={this.state.searchInput}
                        handleSearch={this.handleSearch}
                    />
                </div>
            </div>
        </div>
    )
}}

function mdp(dispatch) {
    return {
        getNaps: () => dispatch(getNaps()),
        getDiapers: () => dispatch(getDiapers()),
        getFeedings: () => dispatch(getFeedings()),
        getEntries: () => dispatch(getEntries()),
        getChildren: () => dispatch(getChildren())
    }
}

function msp(state) {
    return state
}

export default connect(msp,mdp)(Homepage)