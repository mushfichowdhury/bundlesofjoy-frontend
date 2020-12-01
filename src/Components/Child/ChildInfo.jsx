import React from 'react'
import LastDiaper from '../Home/LastDiaper';
import LastFeeding from '../Home/LastFeeding';
import LastNap from '../Home/LastNap';
import '../Home/Homepage.css'

export default function ChildInfo() {
    return (
        <div className="Last-Logs">
            <div className="Log-Diaper-Change" >
                <LastDiaper />
            </div>

            <div className="Log-Feeding" >
                <LastFeeding />
            </div>

            <div className="Log-Nap" >
                <LastNap />
            </div>
        </div>
    )
}
