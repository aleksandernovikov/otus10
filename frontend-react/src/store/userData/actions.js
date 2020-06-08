export const USER_DATA_CHANGE_LOGIN = 'USER_DATA_CHANGE_LOGIN'
export const USER_DATA_CHANGE_PASSWORD = 'USER_DATA_CHANGE_PASSWORD'
export const USER_DATA_CHANGE_DISPLAY_NAME = 'USER_DATA_CHANGE_DISPLAY_NAME'
export const USER_DATA_CHANGE_USER_STATUS = 'USER_DATA_CHANGE_USER_STATUS'


export const changeLogin = login => ({
    type: USER_DATA_CHANGE_LOGIN,
    payload: login
})

export const changePassword = password => ({
    type: USER_DATA_CHANGE_PASSWORD,
    payload: password
})

export const changeDisplayName = displayName => ({
    type: USER_DATA_CHANGE_DISPLAY_NAME,
    payload: displayName
})
export const changeAuthStatus = isUserLoggedIn => ({
    type: USER_DATA_CHANGE_USER_STATUS,
    payload: isUserLoggedIn
})