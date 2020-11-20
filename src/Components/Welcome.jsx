import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Bundles of Joy</h1>
                <Link to="/home"><button>Go to Home</button></Link>
            </div>
        )
    }
}
