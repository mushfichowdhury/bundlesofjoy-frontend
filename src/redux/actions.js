import { useHistory } from "react-router-dom";


export function userLoginAction(user, dispatch) {
    return function(){
        const config = {
        method: "POST",
        headers: {
            accepts: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify( {user: user} )
        }
        fetch('http://localhost:3000/api/v1/login', config)
        .then(response => response.json())
        .then(response =>{ 
        dispatch({ type: "LOGIN_USER", payload: response})
        localStorage.setItem("token", response.jwt)
        localStorage.setItem("user", "user")
        })
    }
}

export function sessionUserAction(user, dispatch) {
    return function(){
            dispatch({ 
                type: "LOGIN_DOCTOR", 
                payload: user})
    }

}