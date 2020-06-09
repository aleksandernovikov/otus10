import {changeData, changeLoading} from "../store/courseDetails/actions"
import {courseDetailsReducer} from "../store/courseDetails/reducers"


let initialState = {
    loading: true,
    data: null
}

let data = {
    id: 1,
    title: 'Математика',
    teachers: [{username: 'user', first_name: 'Николай', last_name: 'Лобачевский'}],
    start_date: '01.05.2020',
    end_date: '01.05.2020',
    finished: false
}

describe('Test of courseDetails reducer', () => {

    test('test changeData action', () => {
        let action = changeData(data)
        let state = courseDetailsReducer(initialState, action)
        expect(state.data).toEqual(data)
    })

    test('test changeLoading action', () => {
        let action = changeLoading(false)
        let state = courseDetailsReducer(initialState, action)
        expect(state.loading).toEqual(false)
    })
})


