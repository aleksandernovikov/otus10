import React from "react";
import {getUserInfo} from "../../api";

export default class extends React.Component {
    state = {
        loading: true,
        username: '',
        firstName: '',
        lastname: ''
    }

    componentDidMount() {
        getUserInfo().then(data => {
            console.log(data)
            this.setState({
                loading: false,
                username: data.username
            })
        })
    }

    render() {
        if (!this.state.loading) {
            return <div className='h6'>Привет, {this.state.username}!</div>
        }
        return <div>Загрузка...</div>
    }
}