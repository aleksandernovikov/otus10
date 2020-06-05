import React from "react";
import {connect} from "react-redux"

import LoginForm from './loginForm'
import {
    changeLogin,
    changePassword, userAuthorized,
} from "../../store/loginForm/actions";
import {getTokens} from "../../services/api";


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
    loginClick: (login, password) => (dispatch) => {
        getTokens(login, password).then(userData => {
            if ('access' in userData && 'refresh' in userData)
                dispatch(userAuthorized())
        }).catch(e => {
            console.log(e, 'user unauthorized')
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)