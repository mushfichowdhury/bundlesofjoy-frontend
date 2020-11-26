import React from 'react'
import blackpoop from './images/blackpoop.png'
import darkgreenpoop from './images/darkgreenpoop.png'
import darkyellowpoop from './images/darkyellowpoop.png'
import greentanpoop from './images/blackpoop.png'
import orangepoop from './images/orangepoop.png'
import redpoop from './images/redpoop.png'
import whitepoop from './images/whitepoop.png'
import yellowpoop from './images/yellowpoop.png'

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
                { props.change.color === "olive" ? <div><img src={greentanpoop} alt="" /></div> :
                props.change.color === "dark green" ? <div><img src={darkgreenpoop} alt=""/></div>: 
                props.change.color === "red" ? <div><img src={redpoop} alt=""/></div>: 
                props.change.color === "yellow" ? <div><img src={yellowpoop} alt=""/></div>: 


                props.change.color === "white" ? <div class="container"> <img className="image" src={whitepoop} alt=""/> </div>: 


                props.change.color === "black" ? <div><img src={blackpoop} alt=""/></div>: 
                props.change.color === "orange" ? <div><img src={orangepoop} alt=""/></div>: 
                props.change.color === "dark yellow" ? <div><img src={darkyellowpoop} alt=""/></div>: 
                <b>{props.change.color}</b>
                }
            </td>
        </tr>
    )
}
// props.change.color === "dark yellow" ? <div><b><span style={{color: "darkyellow"}}>dark yellow</span></b> <img src={darkyellowpoop} alt=""/></div>: 


export default DiaperRow