export const USER_INFO_CHANGE_USER_STATUS = 'USER_INFO_CHANGE_USER_STATUS'
export const USER_INFO_CHANGE_DISPLAY_NAME = 'USER_INFO_CHANGE_DISPLAY_NAME'

export const changeAuthStatus = isUserLoggedIn => ({
    type: USER_INFO_CHANGE_USER_STATUS,
    payload: isUserLoggedIn
})

export const changeDisplayName = displayName => ({
    type: USER_INFO_CHANGE_DISPLAY_NAME,
    payload: displayName
})