import React from 'react'

const NapRow = (props) => {

    return (
        <tr>
            <td>
                <span>{ new Date(Date.parse(props.nap.created_at)).toDateString() }</span>
            </td>
            <td>
                <span>{ new Date(Date.parse(props.nap.created_at)).toLocaleTimeString() }</span>
            </td>
            <td>
                <span>{ props.nap.duration }</span>
            </td>
        </tr>
    )
}

export default NapRow