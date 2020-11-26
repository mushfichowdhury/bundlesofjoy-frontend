import React from 'react'

export default function LastFeeding(props) {
    return (
        <div>
            <h2>Last Feeding</h2>
            <p>{ new Date(Date.parse(props.feedings[props.feedings.length-1].created_at)).toDateString() }</p> 
            <p>{props.feedings[props.feedings.length-1].duration}</p>





            {/* <p>Tue Nov 24 2020</p>
            <p>9:46:33 AM</p>
            <p>via Breast</p>
            <p>1 hour</p> */}
            {/* {!this.props ? (
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
            } */}
            
        </div>
    )
}
