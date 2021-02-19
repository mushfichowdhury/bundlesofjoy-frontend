import React from 'react';
import { connect } from 'react-redux'
import { getNaps, getDiapers, getFeedings, getEntries, getChildren } from '../../redux/actions'
import NewJournalEntry from '../Entries/NewJournalEntry'
import './Homepage.css'
import LastDiaper from './LastDiaper';
// import LastFeeding from './LastFeeding';
// import LastNap from './LastNap';
import { Statistic } from 'semantic-ui-react';
import AllEntries from '../Entries/AllEntries';


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
        <div>
            <div className="App" style={{marginTop: "1%"}}>
                {/* <h1>Welcome, {this.props.user.user.username}!</h1> */}
            </div>
            <br/>
            <Statistic >
                    <Statistic.Value className="floating">{this.props.feedings.filter(feeding => new Date(Date.parse(feeding.created_at)).toDateString() === new Date(Date.parse(this.props.feedings[this.props.feedings.length-1].created_at)).toDateString()).length}</Statistic.Value>
                    <Statistic.Label>Feedings Today</Statistic.Label>
            </Statistic>
            <Statistic>
                    <Statistic.Value className="floating">{this.props.diapers.filter(diaper => new Date(Date.parse(diaper.created_at)).toDateString() === new Date(Date.parse(this.props.diapers[this.props.diapers.length-1].created_at)).toDateString()).length}</Statistic.Value>
                    <Statistic.Label>Diaper Changes Today</Statistic.Label>
            </Statistic>
            <Statistic style={{marginTop: "1%"}}>
                    <Statistic.Value className="floating">{this.props.naps.filter(nap => new Date(Date.parse(nap.created_at)).toDateString() === new Date(Date.parse(this.props.naps[this.props.naps.length-1].created_at)).toDateString()).length}</Statistic.Value>
                    <Statistic.Label>Naps Today</Statistic.Label>
            </Statistic>
            <div className="grid-container">
                {/* {this.props.diapers.length && this.props.feedings.length > 0 ?
                this.renderChildren() : <p>loading...</p>
                } */}

                {this.props.diapers.length && this.props.feedings.length > 0 ?
                <div>
                    <div className="Last-Logs">
                    <div className="Log-Diaper-Change" >
                        <LastDiaper diapers={this.props.diapers} feedings={this.props.feedings} naps={this.props.naps} style={{marginLeft: "500px"}}/>
                    </div>
                    </div>
                </div>
                : null
                }
                
                
                <div className="Journal-Entries" >
                    <NewJournalEntry addEntry={this.addEntry} /> 
                    <AllEntries
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