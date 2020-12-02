import './App.css';
import { Switch } from 'react-router-dom'
import React from 'react';
import { Route } from "react-router-dom";
import Homepage from './Components//Home/Homepage'
import Diapers from './Components//Diapers/Diapers';
import Naps from './Components/Naps/Naps'
import Navbar from './Navbar'
import Feedings from './Components/Feedings/Feedings';
import Login from './Components/LogIn/Login'
import Child from './Components/Child/Child';
import Signup from './Components/LogIn/Signup';
import ChildHome from './Components/Child/ChildHome';
import ChildLogIn from './Components/LogIn/ChildLogIn';
import { sessionUserAction } from './redux/actions'
import { connect } from 'react-redux'
import { getDiapers, getFeedings, getNaps, getEntries } from './redux/actions'



class App extends React.Component {

componentDidMount = () => {
	const token = localStorage.getItem("token")
	const userType = localStorage.getItem("user")
	const configObj = {
	method: "GET",
	headers: { Authorization: `Bearer ${token}`}
	}
	if (token && userType === "user") {
	fetch("http://localhost:3000/api/v1/users", configObj)
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

export default connect(null, mdp)(App)





























// const App = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState();

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("user");
//     if (loggedInUser) {
//       const foundUser = JSON.parse(loggedInUser);
//       setUser(foundUser);
//     }
//   }, []);

//   // logout the user
//   const handleLogout = () => {
//     setUser({});
//     setUsername("");
//     setPassword("");
//     localStorage.clear();
//   };

//   // login the user
//   const handleSubmit = async e => {
//     e.preventDefault();
//     const user = { username, password };
//     // send the username and password to the server
//     const response = await axios.post(
//       "http://localhost:3000/users",
//       user
//     );
//     // set the state of the user
//     setUser(response.data);
//     // store the user in localStorage
//     localStorage.setItem("user", JSON.stringify(response.data));
//     this.history.push('/home')
//     // <Redirect to='/home' /> 
//   };

//   // if there's a user show the message below
//   if (user) {
//     console.log("Logged in as:", localStorage.getItem("user"))
//     return (
//       <div>
//         <Navbar/>
//         <Link to="/login"><button onClick={handleLogout}>logout</button></Link>
//         {/* <Route path="/welcome" component={Welcome} /> */}
//         <Route path="/home" component={Homepage} />
//         <Route path="/diapers" component={Diapers} />
//         <Route path="/feedings" component={Feedings} />
//         <Route path="/naps" component={Naps} />
//       </div>
//     );
//   }

//   // if there's no user, show the login form
//   return (
//     <div>
//       <div className="App">
//         <h1>Bundles of Joy</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="username">Username: </label>
//           <input
//             type="text"
//             value={username}
//             placeholder="enter a username"
//             onChange={({ target }) => setUsername(target.value)}
//           />
//           <div>
//             <label htmlFor="password">Password: </label>
//             <input
//               type="password"
//               value={password}
//               placeholder="enter a password"
//               onChange={({ target }) => setPassword(target.value)}
//             />
//           </div>
//           <button type="submit">Log In</button>
//           <Link to="/signup"><button>Sign Up</button></Link>
//           <Link to="/childlogin"><button>Child Log In</button></Link>        
//           </form>
//       </div>
//     </div>
//   );
// };

// export default App;






