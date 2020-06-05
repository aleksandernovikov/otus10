import {combineReducers, createStore, applyMiddleware} from 'redux'
import {loginFormReducer} from "./loginForm/reducers";
import {coursesTableReducer} from "./coursesTable/reducers";

export default combineReducers({
    loginForm: loginFormReducer,
    coursesTableContent: coursesTableReducer
})