export const COURSE_DETAILS_CHANGE_LOADING = 'COURSE_DETAILS_CHANGE_LOADING'
export const COURSE_DETAILS_CHANGE_DATA = 'COURSE_DETAILS_CHANGE_DATA'

export const changeLoading = loading => ({
    type: COURSE_DETAILS_CHANGE_LOADING,
    payload: loading
})

export const changeData = data => ({
    type: COURSE_DETAILS_CHANGE_DATA,
    payload: data
})