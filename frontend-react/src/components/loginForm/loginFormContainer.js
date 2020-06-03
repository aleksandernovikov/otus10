import React from "react";
import {connect} from "react-redux"

import LoginForm from './loginForm'
import {
    changeLogin,
    changePassword,
    loginClick
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
    loginClick
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)