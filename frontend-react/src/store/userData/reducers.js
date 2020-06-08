import {
    USER_DATA_CHANGE_DISPLAY_NAME,
    USER_DATA_CHANGE_LOGIN,
    USER_DATA_CHANGE_PASSWORD, USER_DATA_CHANGE_USER_STATUS,
    USER_DATA_USER_AUTHORIZED
} from "./actions";

const initialState = {
    login: '',
    password: '',
    isUserLoggedIn: false,
    displayName: ''
}

export const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA_CHANGE_LOGIN:
            return {
                ...state,
                login: action.payload
            }

        case USER_DATA_CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            }

        case USER_DATA_CHANGE_DISPLAY_NAME:
            return {
                ...state,
                displayName: action.payload
            }

        case USER_DATA_CHANGE_USER_STATUS:
            return {
                ...state,
                isUserLoggedIn: action.payload
            }

        default:
            return state;
    }
}
