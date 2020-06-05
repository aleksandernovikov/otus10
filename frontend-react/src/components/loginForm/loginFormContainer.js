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
    let {login, password, loggedIn} = state.loginForm
    return {login, password, loggedIn}
}

const mapDispatchToProps = {
    changeLogin,
    changePassword,
    loginClick: (login, password) => (dispatch) => {
        getTokens(login, password).then(userData => {
            if ('access' in userData && 'refresh' in userData) {
                console.log('authorized')
                dispatch(userAuthorized(true))
            } else {
                console.log('!!!!', userData)
            }

        }).catch(e => {
            console.log(e, 'user unauthorized')
            dispatch(userAuthorized(false))
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)