import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Welcome extends Component {
    state = {
        username: "",
        password: ""
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }
    
    
    render() {
        return (
            <div>
                <h1>Welcome to Bundles of Joy</h1>
                <Link to="/home"><button>Go to Home</button></Link>
                <Link to="/diapers"><button>Go to Diapers</button></Link>
                <Link to="/feedings"><button>Go to Feedings</button></Link>
                <Link to="/naps"><button>Go to Naps</button></Link>

                <br/><br/>
                {/* <form onSubmit={this.localSubmitHandler}>
                        <div>
                            <input type="username" name="username" placeholder="Username" required value={this.state.username} onChange={this.changeHandler} />
                            <input type="password" name="password" placeholder="Password" required value={this.state.password} onChange={this.changeHandler} />
                            <button type="submit">Log In</button>
                            <Link to="/signup">
                                <button variant="contained" className="welcomebutton" >New User?</button>
                            </Link>
                        </div>
                </form> */}
            </div>
        )
    }
}
