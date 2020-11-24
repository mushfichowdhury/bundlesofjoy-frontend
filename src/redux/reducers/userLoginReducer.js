const defaultState = {
    user: null
}

function userLoginReducer(state=defaultState.user, action) {
    switch (action.type) {
        case "LOGIN_USER":
            if (action.payload.user) {
                return action.payload
            }
            return state
        case "LOGOUT":
            localStorage.clear()
            return null
        default:
            return state;
    }
}

export { userLoginReducer }