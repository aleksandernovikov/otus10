import {ACTION_USER_LOGIN} from "./actions";

const initialState = {
    loading: true,
    isUserLoggedIn: false,
    username: ''
}

//https://www.youtube.com/watch?v=MahSyZSFQv8&list=LLT-Xvh4ZfzBkI-DmuX5yPVA&index=15
export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_USER_LOGIN:
            return {
                ...state
            }

    }
    return state
}
