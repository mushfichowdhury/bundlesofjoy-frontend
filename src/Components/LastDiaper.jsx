import React from 'react'

export default function LastDiaper(props) {
    return (
        <div>
            <h2>Last Diaper Change</h2>
            {/* <p>{ new Date(Date.parse(props.diaper[props.diaper.length-1].created_at)).toDateString() }</p>         */}
            {/* {props.diaper[props.diaper.length-1].wet ? "Wet" : "Solid"}         */}
            {/* <p>{props.diaper[props.diaper.length-1].color}</p> */}
        </div>
    )
}
