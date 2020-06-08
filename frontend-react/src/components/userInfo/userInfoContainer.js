import React from "react";
import {connect} from "react-redux";
import UserInfo from './userInfo'

import {getAccessToken, logout} from "../../services/localStorageService";
import {changeAuthStatus, changeDisplayName} from "../../store/userData/actions";

export class UserInfoContainer extends React.Component {
    componentDidMount() {
        let userAuthorized = !!getAccessToken()
        if (userAuthorized){
            this.props.changeDisplayName(localStorage.getItem('login'))
        }
        this.props.changeAuthStatus(userAuthorized)
    }

    render = () => <UserInfo {...this.props} />
}

const mapStateToProps = state => {
    let {isUserLoggedIn, displayName} = state.userData
    return {
        isUserLoggedIn,
        displayName
    }
}

const mapDispatchToProps = {
    changeAuthStatus,
    changeDisplayName,
    logout: () => dispatch => {
        logout()
        dispatch(changeAuthStatus(false))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoContainer)