const defaultState = {
    diapers: []
}

function diapersReducer(state=defaultState.diapers, action) {
    switch (action.type) {
        case "GET_DIAPERS":
            return action.payload
        default:
            return state;
    }
}

export { diapersReducer }