import React from 'react'

const DiaperRow = (props) => {

    return (
        <tr>
            <td>
                <span>{ new Date(Date.parse(props.change.created_at)).toDateString() }</span>
            </td>
            <td>
                <span>{ new Date(Date.parse(props.change.created_at)).toLocaleTimeString() }</span>
            </td>
            <td>
                <span>{ props.change.wet ? "Wet" : "Solid" }</span>
            </td>
            <td>
                <span>{ props.change.color }</span>
            </td>
        </tr>
    )
}

export default DiaperRow