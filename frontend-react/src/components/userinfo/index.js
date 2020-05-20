import React from "react";
import {Button} from "react-bootstrap";

export default class extends React.Component {
    state = {
        loading: true,
        username: '',
        firstName: '',
        lastName: ''
    }

    logout = () => {
        const fields = ['access', 'refresh', 'expired', 'username', 'firstName', 'lastName']
        for (let key of fields) {
            console.log(key)
            localStorage.removeItem(key)
        }
        this.setState({
            username: '',
            firstName: '',
            lastName: ''
        })
    }

    componentDidMount() {
        this.setState({
            loading: false,
            username: localStorage.getItem('username'),
            firstName: localStorage.getItem('firstName'),
            lastName: localStorage.getItem('lastName')
        })
    }

    render() {
        if (!this.state.loading) {
            return <div className='h6'>Привет, {this.state.username}! <Button onClick={this.logout}>Выход</Button></div>
        }
        return <div>Загрузка...</div>
    }
}