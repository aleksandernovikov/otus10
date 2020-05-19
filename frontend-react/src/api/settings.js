import Axios from "axios";
import {getAccessToken} from "../services/localStorageService";

const axiosInstance = Axios.create({
    baseURL: '/api',
    timeout: 1000,
    xsrfHeaderName: 'X-CSRFToken',
    xsrfCookieName: 'csrftoken'
});

axiosInstance.interceptors.request.use(function (request) {
    console.log('request', request)
    let token = getAccessToken()
    if (token !== null && request.method !== 'get' || request.url === 'user/') {
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
})

// axiosInstance.interceptors.response.use(response => {
//     return response;
// }, function (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//         axiosInstance.post('token/refresh/', {
//             refresh: localStorage.getItem('refresh')
//         }).then(response => {
//             localStorage.setItem('access', response.data.access)
//             originalRequest._retry = true
//             return axiosInstance(originalRequest)
//         })
//     }
// });

export default axiosInstance;