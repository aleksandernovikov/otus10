import React from "react";
import {connect} from "react-redux";
import UserInfo from './userInfo'
import {changeAuthStatus, changeDisplayName} from "../../store/userInfo/actions";
import {getAccessToken, logout} from "../../services/localStorageService";

export class UserInfoContainer extends React.Component {
    componentDidMount() {
        console.log('UserInfoContainer mount')
        let userAuthorized = !!getAccessToken()
        console.log('userAuthorized', userAuthorized)

        if (userAuthorized){
            this.props.changeDisplayName(localStorage.getItem('login'))
        }
        this.props.changeAuthStatus(userAuthorized)
    }

    render = () => <UserInfo {...this.props} />
}

const mapStateToProps = state => {
    let {isUserLoggedIn, displayName} = state.userInfo
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