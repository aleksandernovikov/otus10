import {changeAuthStatus, changeDisplayName, changeLogin, changePassword} from "../store/userData/actions";
import {coursesTableReducer} from "../store/coursesTable/reducers";
import {userDataReducer} from "../store/userData/reducers";

const initialState = {
    login: '',
    password: '',
    isUserLoggedIn: false,
    displayName: ''
}

const data = {
    login: 'user',
    password: '123',
    isUserLoggedIn: true,
    displayName: 'user'
}

describe('Test of userData reducer', () => {

    test('test changeLogin action', () => {
        const action = changeLogin(data.login)
        const state = userDataReducer(initialState, action)
        expect(state.login).toEqual(data.login)
    })

    test('test changePassword action', () => {
        const action = changePassword(data.password)
        const state = userDataReducer(initialState, action)
        expect(state.password).toEqual(data.password)
    })

    test('test changeDisplayName action', () => {
        const action = changeDisplayName(data.displayName)
        const state = userDataReducer(initialState, action)
        expect(state.displayName).toEqual(data.displayName)
    })

    test('test changeAuthStatus action', () => {
        const action = changeAuthStatus(data.isUserLoggedIn)
        const state = userDataReducer(initialState, action)
        expect(state.isUserLoggedIn).toEqual(data.isUserLoggedIn)
    })
})