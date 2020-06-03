export const LOGIN_FORM_CHANGE_LOGIN = 'LOGIN_FORM_CHANGE_LOGIN'
export const LOGIN_FORM_CHANGE_PASSWORD = 'LOGIN_FORM_CHANGE_PASSWORD'
export const LOGIN_FORM_LOGIN_CLICK = 'LOGIN_FORM_LOGIN_CLICK'


export const changeLogin = login => ({
    type: LOGIN_FORM_CHANGE_LOGIN,
    payload: login
})

export const changePassword = password => ({
    type: LOGIN_FORM_CHANGE_PASSWORD,
    payload: password
})

export  const loginClick = () => ({
    type: LOGIN_FORM_LOGIN_CLICK
})