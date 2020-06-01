import React from 'react'
import {HashRouter as Router, Switch, Route} from "react-router-dom"

import Home from './pages/homePage'
import CreateCourse from './components/courses/createCourse'
import ViewCourse from './pages/courseDetailsPage'

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