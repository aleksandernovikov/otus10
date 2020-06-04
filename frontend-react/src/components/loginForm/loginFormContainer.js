import React from "react";
import {connect} from "react-redux"
import ReduxThunk from 'redux-thunk'

import LoginForm from './loginForm'
import {
    changeLogin,
    changePassword,
} from "../../store/loginForm/actions";


class LoginFormContainer extends React.Component {
    render() {
        return <LoginForm {...this.props}/>
    }
}

const mapStateToProps = state => {
    return {
        login: state.loginForm.login,
        password: state.loginForm.password,
        loggedIn: state.loginForm.loggedIn
    }
}

const mapDispatchToProps = {
    changeLogin,
    changePassword,
    loginClick: (login, password) => {
        console.log(login, password)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)