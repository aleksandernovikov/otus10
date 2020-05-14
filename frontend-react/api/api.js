import '@babel/polyfill'
import Axios from "axios";

const axiosInstance = Axios.create({
    baseURL: '/api',
    timeout: 1000
});

export async function getCoursesList() {
    let response = await axiosInstance.get('courses')
    if (response.status !== 200) {
        throw new Error('Server returns ' + response.status)
    }
    return response.data
}
