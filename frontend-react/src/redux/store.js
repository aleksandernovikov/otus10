import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {reducers} from "./reducers/courses/reducers";
import {reducers} from "./reducers/user/reducers";

let rootReducer = combineReducers({
    user: reducers,
    courses: reducers
})

export default createStore(rootReducer, applyMiddleware(thunkMiddleware))