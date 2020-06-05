export const COURSES_TABLE_CHANGE_LOADING = 'COURSES_TABLE_CHANGE_LOADING'
export const COURSES_TABLE_CHANGE_DATA = 'COURSES_TABLE_CHANGE_DATA'

export const changeLoading = loading => ({
    type: COURSES_TABLE_CHANGE_LOADING,
    payload: loading
})

export const changeData = data => ({
    type: COURSES_TABLE_CHANGE_DATA,
    payload: data
})