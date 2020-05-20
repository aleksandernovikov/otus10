import React from 'react'
import {getTokens} from "../../api";

export default class extends React.Component {
    state = {
        login: '',
        password: '',
        logged_in: false
    }

    onSubmitHandle = (e) => {
        e.preventDefault()
        getTokens(this.state.login, this.state.password).then(response => {
            this.setState({
                logged_in: true
            })
            this.props.onChange(true)
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandle}>
                <input type="text"
                       placeholder='Login'
                       className='form-control form-control-sm'
                       onBlur={(e) => this.setState({login: e.target.value})}
                />
                <input
                    type="password"
                    placeholder='Password'
                    className='form-control form-control-sm mt-1'
                    onBlur={(e) => this.setState({password: e.target.value})}
                />
                <button className='btn btn-primary btn-sm mt-1'>Войти</button>
            </form>
        )
    }
}