import React from "react";
import {Button} from "react-bootstrap";

import {getAccessToken, logout} from "../../services/localStorageService";
import LoginFormContainer from '../loginForm/loginFormContainer'

export default class extends React.Component {
    render = () => (
        !this.props.isUserLoggedIn ?
            <LoginFormContainer /> :
            <div className='h6'>{this.props.displayName} <Button onClick={this.props.logout}>Выход</Button></div>
    )
}