import React from 'react'
import {HashRouter as Router, Switch, Route} from "react-router-dom"

import Home from './pages/home-page'
import CreateCourse from './components/courses/createcourse'
import ViewCourse from './pages/course-details-page'

export default function () {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/course/:id' component={ViewCourse}/>
                <Route path='/create-course' component={CreateCourse}/>
            </Switch>
        </Router>
    )
}