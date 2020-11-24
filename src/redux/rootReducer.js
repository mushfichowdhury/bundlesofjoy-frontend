import { combineReducers } from 'redux'
import { userLoginReducer } from './reducers/userLoginReducer'

const rootReducer = combineReducers({
    user: userLoginReducer,
})

export default rootReducer