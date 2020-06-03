import {combineReducers, createStore, applyMiddleware} from 'redux'
import {loginFormReducer} from "./loginForm/reducers";

export default combineReducers({
    loginForm: loginFormReducer,
})