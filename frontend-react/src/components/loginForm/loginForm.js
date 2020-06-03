import React from 'react'
import {Form, Button} from 'react-bootstrap';

export default class extends React.Component {
    render() {
        return (
            <Form>
                <Form.Control
                    type="text"
                    placeholder='Login'
                    size='sm'
                    onBlur={e => this.props.changeLogin(e.target.value)}
                />
                <Form.Control
                    type="password"
                    placeholder='Password'
                    className='mt-1'
                    size='sm'
                    onBlur={e => this.props.changePassword(e.target.value)}
                />
                <Button
                    className='mt-1'
                    size='sm'
                    onClick={() => this.props.loginClick()}
                >Войти</Button>
            </Form>
        )
    }
}