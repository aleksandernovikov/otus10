import {
    LOGIN_FORM_CHANGE_LOGIN,
    LOGIN_FORM_CHANGE_PASSWORD,
    LOGIN_FORM_LOGIN_CLICK
} from "./actions";

const initialState = {
    username: '',
    password: '',
    loggedIn: false
}


export const loginFormReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_FORM_CHANGE_LOGIN:
            return {
                ...state,
                username: action.payload
            }

        case LOGIN_FORM_CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            }

        case LOGIN_FORM_LOGIN_CLICK:
            console.log('login click')
            return {
                ...state,
            }

        default:
            return state;
    }
}
