import {changeData, changeLoading} from "../store/coursesTable/actions";
import {coursesTableReducer} from "../store/coursesTable/reducers";

const initialState = {
    loading: true,
    data: null
}

let data = [{
    id: 1,
    title: 'Математика',
    teachers: [{username: 'user', first_name: 'Николай', last_name: 'Лобачевский'}],
    start_date: '01.05.2020',
    end_date: '01.05.2020',
    finished: false
}, {
    id: 2,
    title: 'Литература',
    teachers: [{username: 'user', first_name: 'Николай', last_name: 'Лобачевский'}, {
        username: 'admin',
        first_name: 'Александр',
        last_name: 'Пушкин'
    }],
    start_date: '01.05.2020',
    end_date: '01.05.2020',
    finished: true
}]

describe('Test of coursesTable reducer', () => {

    test('test changeData action', () => {
        let action = changeData(data)
        let state = coursesTableReducer(initialState, action)
        expect(state.data.length).toEqual(data.length)
        expect(state.data).toEqual(data)
    })

    test('test changeLoading action', () => {
        let action = changeLoading(false)
        let state = coursesTableReducer(initialState, action)
        expect(state.loading).toEqual(false)
    })
})
