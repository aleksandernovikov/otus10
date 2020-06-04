import '@babel/polyfill'

import {extractTokenData} from "./api";
import Axios from "axios";

export function saveToStorage(object_data) {
    for (let key in object_data) {
        if (object_data.hasOwnProperty(key)) {
            localStorage.setItem(key, object_data[key])
        }
    }
}

function refreshToken() {
    const refreshToken = localStorage.getItem('refresh')
    let token = ''
    if (refreshToken) {
        Axios.post('/api/token/refresh/', {
            refresh: refreshToken
        }).then(response => {
            token = response.data.access
            localStorage.setItem('access', token)
        }).catch(e => {
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return null
        })
        return localStorage.getItem('access')
    }
    return null
}

function isTokenExpired(limit = 60) {
    const tokenTime = localStorage.getItem('expired')

    if (localStorage.getItem('access') && tokenTime) {
        const now_in_seconds = Math.floor(new Date().getTime() / 1000)
        const dif = tokenTime - now_in_seconds
        return !tokenTime || dif < limit
    }
    return null
}

export function getAccessToken() {
    if (localStorage.getItem('access')) {
        if (isTokenExpired()) {
            let token = refreshToken()

            if (token) {
                let data = extractTokenData(token)
                saveToStorage({
                    access: token,
                    expired: data.exp,
                    login: data.username,
                    firstName: data.firstName,
                    lastName: data.lastName
                })
            }
        }
        return localStorage.getItem('access')
    }
    return null
}

export function logout() {
    const fields = ['access', 'refresh', 'expired', 'username', 'firstName', 'lastName']
    for (let key of fields) {
        localStorage.removeItem(key)
    }
}