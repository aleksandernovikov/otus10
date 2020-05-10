import React from 'react'

export default class Row extends React.Component {

    getTeachersString(teachers) {
        let teachers_array = []
        teachers.forEach(teacher => {
            teachers_array.push(teacher.first_name + ' ' + teacher.last_name)
        })
        return teachers_array.join(', ')
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