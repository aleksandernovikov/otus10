import React from "react";
import {Button} from "react-bootstrap";
import {getAccessToken, logout} from "../../services/localStorageService";
import LoginForm from "../login_form";

export default class extends React.Component {
    state = {
        loading: false,
        isUserLoggedIn: Boolean(getAccessToken()),
        username: localStorage.getItem('username'),
    }

    logout = () => {
        logout()
        this.setState({
            isUserLoggedIn: false,
            username: '',
        })
    }

    userChange = (loggedIn) => {
        // console.log('userChange', loggedIn)
        this.setState({
            isUserLoggedIn: loggedIn,
            username: localStorage.getItem('username'),
        })
    }

    render() {
        if (!this.state.loading) {
            if (!this.state.isUserLoggedIn) {
                return <LoginForm onChange={this.userChange}/>
            }
            return <div className='h6'>Привет, {this.state.username}! <Button onClick={this.logout}>Выход</Button></div>
        }
        return <div>Загрузка...</div>
    }
}