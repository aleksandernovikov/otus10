import {COURSES_TABLE_CHANGE_LOADING} from './actions'

const initialState = {
    loading: true,
    data: null
}

export const coursesTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case COURSES_TABLE_CHANGE_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        // case COURSES_TABLE_DATA_LOADED:
        //     return {
        //         ...state,
        //         data: action.payload
        //     }


        default:
            return state;
    }
}