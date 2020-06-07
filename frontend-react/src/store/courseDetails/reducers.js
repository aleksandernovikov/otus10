import {
    COURSE_DETAILS_CHANGE_DATA,
    COURSE_DETAILS_CHANGE_LOADING
} from './actions'

const initialState = {
    loading: true,
    data: null
}

export const courseDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case COURSE_DETAILS_CHANGE_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        case COURSE_DETAILS_CHANGE_DATA:
            return {
                ...state,
                data: action.payload
            }

        default:
            return state;
    }
}