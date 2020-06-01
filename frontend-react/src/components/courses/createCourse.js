import React from "react";
import {Form, Button} from 'react-bootstrap';
import {createCourse} from "../../services/api";

export default class extends React.Component {
    state = {
        title: '',
        startDate: '',
        endDate: '',
        finished: false
    }

    formSubmit = (event) => {
        event.preventDefault()
        createCourse(this.state.title, this.state.startDate, this.state.endDate, this.state.finished)
    }

    render() {
        return (
            <div>
                <h2>Создать курс</h2>
                <Form onSubmit={this.formSubmit}>
                    <Form.Group>
                        <Form.Label>Название</Form.Label>
                        <Form.Control type='text' onBlur={(e) => this.setState({title: e.target.value})}/>
                    </Form.Group>


                    <Form.Group>
                        <Form.Label>Дата начала</Form.Label>
                        <Form.Control type='text' onBlur={(e) => this.setState({startDate: e.target.value})}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Дата окончания</Form.Label>
                        <Form.Control type='text' onBlur={(e) => this.setState({endDate: e.target.value})}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Check
                            type="checkbox"
                            defaultChecked={this.state.finished}
                            label="Курс окончен"
                            onChange={(e) => this.setState({finished: !this.state.finished})}/>
                    </Form.Group>
                    <Button type='submit'>Создать</Button>
                </Form>
            </div>
        )
    }
}