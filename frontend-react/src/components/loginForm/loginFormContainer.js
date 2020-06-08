import React from "react";
import {connect} from "react-redux"

import LoginForm from './loginForm'

import {getTokens} from "../../services/api";
import {changeAuthStatus, changeLogin, changePassword} from "../../store/userData/actions";


class LoginFormContainer extends React.Component {
    render = () => <LoginForm {...this.props}/>
}

const mapStateToProps = state => {
    const {login, password, isUserLoggedIn} = state.userData
    return {login, password, isUserLoggedIn}
}

const mapDispatchToProps = {
    changeLogin,
    changePassword,
    loginClick: (login, password) => (dispatch) => {
        getTokens(login, password).then(userData => {
            if ('access' in userData && 'refresh' in userData) {
                dispatch(changeAuthStatus(true))
            }
        }).catch(e => {
            console.log(e, 'user unauthorized')
            dispatch(changeAuthStatus(false))
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)