import React from 'react'
import LastDiaper from './LastDiaper';
import LastFeeding from './LastFeeding';
import LastNap from './LastNap';
import './Homepage.css'

export default function ChildInfo(props) {
    return (
        <div className="Last-Logs">
            <div className="Log-Diaper-Change" >
                <p>test</p>
                {/* <LastDiaper child={props.child} /> */}
            </div>

            <div className="Log-Feeding" >
                {/* <LastFeeding child={props.child} /> */}
            </div>

            <div className="Log-Nap" >
                {/* <LastNap child={props.child} /> */}
            </div>
        </div>
    )
}
