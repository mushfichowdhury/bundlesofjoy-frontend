import './App.css';
import React, { useState, useEffect, Component } from 'react';
import { Route, Link } from "react-router-dom";
import ls from "local-storage"
import Welcome from './Components/Welcome';
import Homepage from './Components/Homepage'
import ChildLogIn from './Components/ChildLogIn'
import Diapers from './Components/Diapers';
import Naps from './Components/Naps'
import Navbar from './Navbar'
import Signup from './Components/Signup';
import axios from "axios";
import Feedings from './Components/Feedings';

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  // logout the user
  const handleLogout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();
  };

  // login the user
  const handleSubmit = async e => {
    e.preventDefault();
    const user = { username, password };
    // send the username and password to the server
    const response = await axios.post(
      "http://localhost:3000/users",
      user
    );
    // set the state of the user
    setUser(response.data);
    // store the user in localStorage
    localStorage.setItem("user", JSON.stringify(response.data));
  };

  // if there's a user show the message below
  if (user) {
    console.log("Logged in as:", ls.get("currentUser"))
    return (
      <div className="App">
        <Link to="/welcome"><button onClick={handleLogout}>logout</button></Link>
        
        <Route path="/welcome" component={Welcome} />
        <Route path="/home" component={Homepage} />
        <Route path="/diapers" component={Diapers} />
        <Route path="/feedings" component={Feedings} />
        <Route path="/naps" component={Naps} />
      </div>
    );
  }

  // if there's no user, show the login form
  return (
    <div className="App">
      <h1>Bundles of Joy</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          value={username}
          placeholder="enter a username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <div>
          <label htmlFor="password">password: </label>
          <input
            type="password"
            value={password}
            placeholder="enter a password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default App;






