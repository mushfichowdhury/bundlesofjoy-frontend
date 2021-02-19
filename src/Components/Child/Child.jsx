import React from 'react'
import { connect } from 'react-redux'
import { getChildren, getEntries } from '../../redux/actions'


class Child extends React.Component {
    componentDidMount = () => {
        this.props.getChildren()
        this.props.getEntries()
    }

    renderImages = () => {
        console.log(this.props.entries)
        return this.props.entries.map(entry => <img src={entry.image} alt=""/>)
    }
    render() {
    return (
        <div>
            <h1>{this.props.user.user.children[0].name}</h1>
            <h3>{new Date(Date.parse(this.props.user.user.children[0].birthday)).toDateString().split(' ').slice(1).join(' ')}</h3>
            <h3>{this.props.user.user.children[0].age+2}</h3>
            {this.renderImages()}
        </div>
    )}
}

function mdp(dispatch) {
    return {
        getChildren: () => dispatch(getChildren()),
        getEntries: () => dispatch(getEntries())
    }
}

function msp(state) {
    return state
}

export default connect(msp,mdp)(Child)