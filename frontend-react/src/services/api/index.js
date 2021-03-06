import '@babel/polyfill'
import axiosInstance from "./settings";
import {saveToStorage} from "../localStorageService";

export function extractTokenData(token) {
    let parts = token.split('.')

    // https://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings
    function b64DecodeUnicode(str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    return JSON.parse(b64DecodeUnicode(parts[1]))
}

/* Получим токен */
export async function getTokens(username, password) {
    // Получим токены доступа и сохраним их
    let response = await axiosInstance.post('token/get/', {username, password})
    const userData = extractTokenData(response.data.access)

    saveToStorage({
        ...response.data,
        expired: userData.exp,
        login: userData.username,
        firstName: userData.firstName,
        lastName: userData.lastName
    })
    return response.data
}


/* Получим список курсов */
export async function getCoursesList() {
    let response = await axiosInstance.get('courses/')
    return response.data
}

/* Детали курса */
export async function getCourseDetails(courseId) {
    let response = await axiosInstance.get(`courses/${courseId}/`)
    return response.data
}

/* создание курса */
export async function createCourse(title, startDate, endDate, finished = false) {
    let response = await axiosInstance.post('courses/', {
        title: title,
        start_date: startDate,
        end_date: endDate,
        finished: finished
    })
    return response.data
}

export async function courseEnroll(courseId) {
    let response = await axiosInstance.post(`courses/${courseId}/enroll/`)
    return response.status === 201
}