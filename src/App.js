import './App.css';
import { Switch } from 'react-router-dom'
import React from 'react';
import { Route } from "react-router-dom";
import Homepage from './Components//Home/Homepage'
import Diapers from './Components//Diapers/Diapers';
import Naps from './Components/Naps/Naps'
import Navbar from './Components/Navbar'
import Feedings from './Components/Feedings/Feedings';
import Login from './Components/LogIn/Login'
import Child from './Components/Child/Child';
import Signup from './Components/LogIn/Signup';
import ChildHome from './Components/Child/ChildHome';
import ChildLogIn from './Components/LogIn/ChildLogIn';
import { sessionUserAction } from './redux/actions'
import { connect } from 'react-redux'
import { getDiapers, getFeedings, getNaps, getEntries } from './redux/actions'
import Timer from './Components/Timer';



class App extends React.Component {

componentDidMount = () => {
	const token = localStorage.getItem("token")
	const userType = localStorage.getItem("user")
	const configObj = {
	method: "GET",
	headers: { Authorization: `Bearer ${token}`}
	}
	if (token && userType === "user") {
	fetch("https://bundles-of-joy.herokuapp.com/api/v1/users", configObj)
	.then(response => response.json())
	.then(response => this.props.sessionUser(response))
	} else {
	console.log("There is no User logged in.")
	}
	this.props.getDiapers()
	this.props.getFeedings()
	this.props.getNaps()
	this.props.getEntries()
}

render() {
	console.log(this.props.user)
return (
	<div className="App">
	{(this.props.user === null) ? null : <Navbar/> }
	<Switch>
		<div className="app-body">
			<Route path="/login" render={ routerProps => <Login routerProps={routerProps}  /> } />
			<Route path="/signup" render={ routerProps => <Signup routerProps={routerProps} /> } />
			<Route path="/childlogin" render={ routerProps => <ChildLogIn routerProps={routerProps} /> } />
			<Route path="/childhome" render={ routerProps => <ChildHome routerProps={routerProps} /> } />
			<Route path="/home" render={ routerProps => <Homepage routerProps={routerProps} /> } />
			<Route path="/diapers" render={ routerProps => <Diapers routerProps={routerProps} /> } />
			<Route path="/feedings" render={ routerProps => <Feedings routerProps={routerProps} /> } />
			<Route path="/naps" render={ routerProps => <Naps routerProps={routerProps} /> } />
			<Route path="/children" render={ routerProps => <Child routerProps={routerProps} /> } />
			<Route path="/timer" render={ routerProps => <Timer routerProps={routerProps} /> } />

		</div>
		</Switch>
	</div>
)};
}


function mdp(dispatch) {
	return { 
	sessionUser: (user) => dispatch(sessionUserAction(user, dispatch)),
	getDiapers: () => dispatch(getDiapers()),
	getFeedings: () => dispatch(getFeedings()),
	getNaps: () => dispatch(getNaps()),
	getEntries: () => dispatch(getEntries()) 
	}
}

function msp(state) {
    return state
}

export default connect(msp, mdp)(App)