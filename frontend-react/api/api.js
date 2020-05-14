import '@babel/polyfill'
import Axios from "axios";

const axiosInstance = Axios.create({
    baseURL: '/api',
    timeout: 1000
});

axiosInstance.interceptors.request.use(function (request) {
    let token = localStorage.getItem('access');

    if (token !== null) {
        request.headers.Authorization = token;
    }

    return request;
});

// axiosInstance.interceptors.response.use(function (response) {
//     return response;
// });

export async function getCoursesList() {
    // Получим список курсов
    let response = await axiosInstance.get('courses')
    if (response.status !== 200) {
        throw new Error('Server returns ' + response.status)
    }
    return response.data
}

export async function getTokens(username, password) {
    // Получим токены доступа
    let response = await axiosInstance.post('token/get/', {username, password})
    if (response.status !== 200) {
        throw new Error('Server returns ' + response.status)
    }

    localStorage.setItem('access', response.data.access)
    localStorage.setItem('refresh', response.data.refresh)

    return response.data
}

