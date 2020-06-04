import {
    LOGIN_FORM_CHANGE_LOGIN,
    LOGIN_FORM_CHANGE_PASSWORD,
    LOGIN_FORM_LOGIN_CLICK
} from "./actions";

const initialState = {
    login: '',
    password: '',
    loggedIn: false
}


export const loginFormReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_FORM_CHANGE_LOGIN:
            return {
                ...state,
                login: action.payload
            }

        case LOGIN_FORM_CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            }

        default:
            return state;
    }
}
