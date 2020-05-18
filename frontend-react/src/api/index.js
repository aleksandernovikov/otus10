import '@babel/polyfill'
import axiosInstance from "./settings";


/* Получим токен */
export async function getTokens(username, password) {
    // Получим токены доступа и сохраним их
    let response = await axiosInstance.post('token/get/', {username, password})

    localStorage.setItem('access', response.data.access)
    localStorage.setItem('refresh', response.data.refresh)

    return response.data
}

/* Получим информацию о пользователе */
export async function getUserInfo() {
    let response = await axiosInstance.get('user/')
    return response.data
}

/* Получим список курсов */
export async function getCoursesList() {
    let response = await axiosInstance.get('courses/')
    return response.data
}

/* Детали курса */
export async function getCourseDetails(id) {
    let response = await axiosInstance.get(`courses/${id}/`)
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