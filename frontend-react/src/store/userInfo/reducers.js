import {
    USER_INFO_CHANGE_DISPLAY_NAME,
    USER_INFO_CHANGE_USER_STATUS
} from './actions'

const initialState = {
    isUserLoggedIn: false,
    displayName: ''
}

export const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_INFO_CHANGE_USER_STATUS:
            return {
                ...state,
                isUserLoggedIn: action.payload
            }

        case USER_INFO_CHANGE_DISPLAY_NAME:
            return {
                ...state,
                displayName: action.payload
            }

        default:
            return state;
    }
}



