import '@babel/polyfill'
import Axios from "axios";

const axiosInstance = Axios.create({
    baseURL: '/api',
    timeout: 1000
});

export function getCoursesList() {
    return axiosInstance.get('courses').then(response => {
        console.log(response)
        if (response.status == 200) {
            return response.data
        } else {
            throw new Error('Server returns ' + response.status)
        }

    })
}
