import { combineReducers } from 'redux'
import { userLoginReducer } from './reducers/userLoginReducer'
import { diapersReducer } from './reducers/diapersReducer'

const defaultState = {
    diapers: []
}

const rootReducer = combineReducers({
    user: userLoginReducer,
    diapers: diapersReducer
})

export default rootReducer