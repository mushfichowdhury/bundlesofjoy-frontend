

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
        fetch('https://bundlesofjoy.netlify.app/login', config)
        .then(response => response.json())
        .then(response =>{ 
        dispatch({ type: "LOGIN_USER", payload: response})
        localStorage.setItem("token", response.jwt)
        localStorage.setItem("user", "user")
        })
    }
}

export function userSignupAction(user, dispatch) {
    return function(){
        const config = {
        method: "POST",
        headers: {
            accepts: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify( {user: user} )
        }
        fetch('https://bundles-of-joy.herokuapp.com/login', config)
        .then(response => response.json())
        .then(response =>{ 
        dispatch({ type: "SIGNUP_USER", payload: response})
        localStorage.setItem("token", response.jwt)
        localStorage.setItem("user", "user")
        })
    }
}

export function sessionUserAction(user, dispatch) {
    return function(){
            dispatch({ 
                type: "LOGIN_USER", 
                payload: user})
    }
}

export function getDiapers(){
    return function(dispatch) {
        fetch("https://bundles-of-joy.herokuapp.com/diapers")
		.then(resp => resp.json())
		.then(diapers => dispatch({
            type: "GET_DIAPERS",
            payload: diapers
        }))
}}

export function getFeedings() {
    return function (dispatch) {
    fetch('https://bundles-of-joy.herokuapp.com/feedings')
        .then(resp => resp.json())
        .then(feedings => dispatch({ type: "GET_FEEDINGS", payload: feedings }))
        .catch(console.log)

    };
};

export function getNaps() {
    return function (dispatch) {
    fetch('https://bundles-of-joy.herokuapp.com/naps')
        .then(resp => resp.json())
        .then(naps => dispatch({ type: "GET_NAPS", payload: naps }))
        .catch(console.log)

    };
};

export function getEntries() {
    return function (dispatch) {
    fetch('https://bundles-of-joy.herokuapp.com/journal_entries')
        .then(resp => resp.json())
        .then(entries => dispatch({ type: "GET_ENTRIES", payload: entries }))
        .catch(console.log)

    };
};

export function getChildren() {
    return function (dispatch) {
    fetch('https://bundles-of-joy.herokuapp.com/children')
        .then(resp => resp.json())
        .then(children => dispatch({ type: "GET_CHILDREN", payload: children }))
        .catch(console.log)

    };
};

export function newDiaper(newDiaper) {
    return function (dispatch) {
    fetch('https://bundles-of-joy.herokuapp.com/diapers', {
        method: "POST",
        headers: {
        "content-type": "application/json",
        accepts: "application/json"
        },
        body: JSON.stringify(newDiaper)
    })
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "ADD_DIAPER", payload }))
        .catch(console.log)

    };
};

export function editDiaperChange(editedDiaperChange) {
    return function (dispatch) {
    fetch(`https://bundles-of-joy.herokuapp.com/diapers/${editedDiaperChange.id}`, {
        method: "PATCH",
        headers: {
        "content-type": "application/json",
        accepts: "application/json"
        },
        body: JSON.stringify(editedDiaperChange)
    })
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "EDIT_DIAPER", payload }))
        .catch(console.log)

    };
};

export function deleteDiaperChange(diaperObj) {
    return function (dispatch) {
    fetch(`https://bundles-of-joy.herokuapp.com/diapers/${diaperObj}`, {
        method: "DELETE",
    })
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "DELETE_DIAPER", payload }))
        .catch(console.log)

    };
};

export function newFeeding(newFeeding) {
    return function (dispatch) {
    fetch('https://bundles-of-joy.herokuapp.com/feedings', {
        method: "POST",
        headers: {
        "content-type": "application/json",
        accepts: "application/json"
        },
        body: JSON.stringify(newFeeding)
    })
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "ADD_FEEDING", payload }))
        .catch(console.log)

    };
};

export function editFeeding(editedFeeding) {
    return function (dispatch) {
    fetch(`https://bundles-of-joy.herokuapp.com/feedings/${editedFeeding.id}`, {
        method: "PATCH",
        headers: {
        "content-type": "application/json",
        accepts: "application/json"
        },
        body: JSON.stringify(editedFeeding)
    })
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "EDIT_FEEDING", payload }))
        .catch(console.log)

    };
};

export function newNap(newNapObj) {
    return function (dispatch) {
    fetch('https://bundles-of-joy.herokuapp.com/naps', {
        method: "POST",
        headers: {
        "content-type": "application/json",
        accepts: "application/json"
        },
        body: JSON.stringify(newNapObj)
    })
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "ADD_NAP", payload }))
        .catch(console.log)
    };
};

export function editNap(editedNap) {
    return function (dispatch) {
    fetch(`https://bundles-of-joy.herokuapp.com/naps/${editedNap.id}`, {
        method: "PATCH",
        headers: {
        "content-type": "application/json",
        accepts: "application/json"
        },
        body: JSON.stringify(editedNap)
    })
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "EDIT_NAP", payload }))
        .catch(console.log)

    };
};

export function newEntry(newEntryObj) {
    return function (dispatch) {
    fetch('https://bundles-of-joy.herokuapp.com/journal_entries', {
        method: "POST",
        headers: {
        "content-type": "application/json",
        accepts: "application/json"
        },
        body: JSON.stringify(newEntryObj)
    })
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "ADD_ENTRY", payload }))
        .catch(console.log)

    };
};

export function editEntry(editedEntry) {
    return function (dispatch) {
    fetch(`https://bundles-of-joy.herokuapp.com/journal_entries/${editedEntry.id}`, {
        method: "PATCH",
        headers: {
        "content-type": "application/json",
        accepts: "application/json"
        },
        body: JSON.stringify(editedEntry)
    })
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "EDIT_ENTRY", payload }))
        .catch(console.log)

    };
};

export function newChild(newChild) {
    return function (dispatch) {
    fetch(`https://bundles-of-joy.herokuapp.com/children`, {
        method: "POST",
        headers: {
        "content-type": "application/json",
        accepts: "application/json"
        },
        body: JSON.stringify(newChild)
    })
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "ADD_CHILD", payload }))
        .catch(console.log)

    };
};

export function deleteFeeding(feedingObj) {
    return function (dispatch) {
    fetch(`https://bundles-of-joy.herokuapp.com/feedings/${feedingObj}`, {
        method: "DELETE",
    })
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "DELETE_FEEDING", payload }))
        .catch(console.log)

    };
};

export function deleteNap(napObj) {
    return function (dispatch) {
    fetch(`https://bundles-of-joy.herokuapp.com/naps/${napObj}`, {
        method: "DELETE",
    })
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "DELETE_NAP", payload }))
        .catch(console.log)

    };
};

export function deleteEntry(entryObj) {
    return function (dispatch) {
    fetch(`https://bundles-of-joy.herokuapp.com/journal_entries/${entryObj}`, {
        method: "DELETE",
    })
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "DELETE_ENTRY", payload }))
        .catch(console.log)

    };
};

export function deleteChild(childObj) {
    return function (dispatch) {
    fetch(`https://bundles-of-joy.herokuapp.com/children/${childObj}`, {
        method: "DELETE",
    })
        .then(resp => resp.json())
        .then(payload => dispatch({ type: "DELETE_CHILD", payload }))
        .catch(console.log)

    };
};