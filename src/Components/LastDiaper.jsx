import React from 'react'

class LastDiaper extends React.Component {
    state = {
        test: true
    }

    render() {
    console.log("props", this.props.diapers[this.props.diapers.length-1])
    return (
        <div>
            <h2>Last Diaper Change</h2>
            
            {!this.props ? (
            <>
            <p>{ new Date(Date.parse(this.props.diapers[this.props.diapers.length-1].created_at)).toDateString() }</p> 
            {this.props.diapers[this.props.diapers.length-1].wet ? "Wet" : "Solid"}        
            <p>{this.props.diapers[this.props.diapers.length-1].color}</p>
            </> )
            : 
            (
            <>
            <p>Loading...</p>
            </>
            )
            }
            
        </div>
    )}
}

export default LastDiaper