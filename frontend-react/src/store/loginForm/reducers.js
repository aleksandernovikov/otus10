import {
    LOGIN_FORM_CHANGE_LOGIN,
    LOGIN_FORM_CHANGE_PASSWORD,
    LOGIN_FORM_USER_AUTHORIZED,
} from "./actions";

const initialState = {
    login: '',
    password: '',
    loggedIn: false,
    authStatusChanged: null
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

        case LOGIN_FORM_USER_AUTHORIZED:
            return {
                ...state,
                loggedIn: action.payload
            }

        default:
            return state;
    }
}
