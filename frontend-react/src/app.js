import React from 'react'
import {HashRouter as Router, Switch, Route} from "react-router-dom"
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";

import rootReducer from './store/reducers'
import Home from './pages/homePage'
import ViewCourse from './pages/courseDetailsPage'
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default function () {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/course/:id' component={ViewCourse}/>
                </Switch>
            </Router>
        </Provider>
    )
}