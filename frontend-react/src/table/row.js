import React from 'react'

export default class Row extends React.Component {

    getTeachersString(teachers) {
        return teachers.map(teacher => {
            return `${teacher.first_name} ${teacher.last_name}`
        }).join(', ')
    }

    render() {
        return (
            <tr>
                <td>{this.props.title}</td>
                <td>{this.getTeachersString(this.props.teachers)}</td>
                <td>{this.props.start_date}</td>
                <td>{this.props.end_date}</td>
                <td>{this.props.finished ? 'Да' : 'Нет'}</td>
            </tr>
        )
    }
}