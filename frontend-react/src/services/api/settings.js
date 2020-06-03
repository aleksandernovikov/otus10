import Axios from "axios";
import {getAccessToken} from "../localStorageService";

const axiosInstance = Axios.create({
    baseURL: '/api',
    timeout: 1000,
    xsrfHeaderName: 'X-CSRFToken',
    xsrfCookieName: 'csrftoken'
});

axiosInstance.interceptors.request.use(function (request) {
    let token = getAccessToken()
    if (token !== null && request.method !== 'get' || request.url === 'loginForm/') {
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
})

export default axiosInstance;