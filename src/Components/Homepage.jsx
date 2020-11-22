import React from 'react'
import { Link } from "react-router-dom";
import HomepageDiaperChanges from './Homepage Charts/HomepageDiaperChanges';
import HomepageNaps from './Homepage Charts/HomepageNaps';
import HomepageFeedings from './Homepage Charts/HomepageFeedings';
import NewDiaper from './NewDiaper';
import NewFeeding from './NewFeeding';
import NewNap from './NewNap';



export default function Homepage() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/home"><button>Go to Home</button></Link>
            <Link to="/diapers"><button>Go to Diapers</button></Link>
            <Link to="/feedings"><button>Go to Feedings</button></Link>
            <Link to="/naps"><button>Go to Naps</button></Link>
            <NewDiaper/>
            <NewFeeding/>
            <NewNap/>
            {/* <HomepageFeedings/> */}
            {/* <HomepageDiaperChanges/> */}
            {/* <HomepageNaps/> */}
        </div>
    )
}
