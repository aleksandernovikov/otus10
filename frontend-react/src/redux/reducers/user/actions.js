export const ACTION_USER_LOGIN = 'ACTION_USER_LOGIN'

export const userLogin = (login, password) => ({
    type: ACTION_USER_LOGIN,
    payload: {
        login, password
    }
})