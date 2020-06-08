import {combineReducers} from 'redux'
import {loginFormReducer} from "./loginForm/reducers";
import {coursesTableReducer} from "./coursesTable/reducers";
import {courseDetailsReducer} from "./courseDetails/reducers";
import {userInfoReducer} from "./userInfo/reducers";

export default combineReducers({
    loginForm: loginFormReducer,
    coursesTableContent: coursesTableReducer,
    courseDetails: courseDetailsReducer,
    userInfo: userInfoReducer
})