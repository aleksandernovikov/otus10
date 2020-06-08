import {combineReducers} from 'redux'
import {coursesTableReducer} from "./coursesTable/reducers";
import {courseDetailsReducer} from "./courseDetails/reducers";
import {userDataReducer} from "./userData/reducers";

export default combineReducers({
    coursesTableContent: coursesTableReducer,
    courseDetails: courseDetailsReducer,
    userData: userDataReducer,
})