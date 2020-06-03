import React from 'react'
import {HashRouter as Router, Switch, Route} from "react-router-dom"
import {Provider} from "react-redux";
import {createStore} from "redux";

import rootReducer from './store/reducers'
import Home from './pages/homePage'
import CreateCourse from './components/courses/createCourse'
import ViewCourse from './pages/courseDetailsPage'


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default function () {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/course/:id' component={ViewCourse}/>
                    <Route path='/create-course' component={CreateCourse}/>
                </Switch>
            </Router>
        </Provider>
    )
}