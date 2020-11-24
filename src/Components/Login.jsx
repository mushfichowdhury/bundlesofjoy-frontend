import React, { useState, useEffect } from 'react';
import './Login.css'
import { actionTypes } from "./reducer"
import { useStateValue } from './StateProvider'
import { Link, Redirect } from "react-router-dom";


export default function Login() {
    const [state, dispatch] = useStateValue();
    const [users, setUsers] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");


    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then(resp => resp.json())
        .then(users => setUsers(users))
    }, []);

    const login = (e) => {
        console.log("login function", username, password)
        const foundUser = users.find(obj => username === obj.username)
        if(foundUser){
            dispatch({
                type: actionTypes.SET_USER,
                user: foundUser
            })
            setUser(foundUser)
            console.log("Logged in as:", dispatch.user);
            <Redirect to="/home" />
        } else {
            alert("User does not exist, please sign up!")
        }
        
    }
    return (
        <div className="login">
            <div className="login-logo">
                <img src="https://www.clipartkey.com/mpngs/m/6-68972_baby-clipart-newborn-boy-transparent-baby-png.png" alt="" />
            </div>
            <form >
                <label htmlFor="username">Username: </label>
                <input
                type="text"
                value={username}
                placeholder="enter a username"
                onChange={({ target }) => setUsername(target.value)}
                />
            <div>
                <label htmlFor="password">Password: </label>
                <input
                type="password"
                value={password}
                placeholder="enter a password"
                onChange={({ target }) => setPassword(target.value)}
                />
            </div>
            </form>

            <button onClick={login}>SIGN IN</button>        
            {/* <Link to="/signup"><button>Sign Up</button></Link>
            <Link to="/childlogin"><button>Child Log In</button></Link> */}
        </div>
    )
}
