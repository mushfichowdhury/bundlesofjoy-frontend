import React from 'react'
import { Link } from "react-router-dom";
import HomepageFeedings from './Homepage Charts/HomepageFeedings';



export default function Homepage() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/welcome"><button>Go to Signup</button></Link>
            <HomepageFeedings/>
        </div>
    )
}
