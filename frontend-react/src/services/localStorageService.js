import '@babel/polyfill'

import {extractTokenData} from "../api";
import Axios from "axios";

export function saveToStorage(object_data) {
    for (let key in object_data) {
        if (object_data.hasOwnProperty(key)) {
            console.log(key, object_data[key])
            localStorage.setItem(key, object_data[key])
        }
    }
}

function refreshToken() {
    const refreshToken = localStorage.getItem('refresh')
    let token = ''

    Axios.post('/api/token/refresh/', {
        refresh: refreshToken
    }).then(response => {
        token = response.data.access
        localStorage.setItem('access', token)
        console.log('refreshToken()', token)
    })
    return localStorage.getItem('access')
}

function isTokenExpired(limit = 60) {
    const now_in_seconds = Math.floor(new Date().getTime() / 1000)
    const token_time = localStorage.getItem('expired')
    const dif = token_time - now_in_seconds

    let result = (!token_time || dif < limit)
    console.log('isTokenExpired', result, dif)

    return result
}

export function getAccessToken() {
    if (isTokenExpired()) {
        console.log('token expired')
        let token = refreshToken()
        let data = extractTokenData(token)
        saveToStorage({access: token, expired: data.exp})
    }
    return localStorage.getItem('access')
}