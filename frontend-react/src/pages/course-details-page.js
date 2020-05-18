import React from "react";
import {getCourseDetails} from "../api";
import {Link} from "react-router-dom";

export default class extends React.Component {
    state = {
        loading: true,
        courseData: null
    }

    componentDidMount() {
        const courseId = this.props.match.params.id
        getCourseDetails(courseId).then(response => {
            console.log(response)
            this.setState({
                loading: false,
                courseData: response
            })
            console.log(this.state)
        })
    }

    render() {
        if (this.state.loading === false) {
            const data = this.state.courseData

            let teachers = data.teachers.map(teacher => {
                return `${teacher.first_name} ${teacher.last_name}`
            }).join(', ')

            return (
                <div className="my-3 p-3 bg-white rounded shadow-sm">
                    <div className="card">
                        <div className="card-header">Курс: {data.title}</div>
                        <div className="card-body">
                            <h5 className="card-title">Преподаватели</h5>
                            <p className="card-text">{teachers ? teachers :
                                <span className='text-muted'>Не назначены</span>}
                            </p>

                            <h5 className="card-title">Дата начала: {data.start_date}</h5>
                            <h5 className="card-title">Дата окончания: {data.end_date}</h5>

                            {data.finished ? '' : <a href="#" className="btn btn-primary">Записаться на курс</a>}
                        </div>
                    </div>
                    <Link to='/'>Переход на главную</Link>
                </div>
            )
        }
        return <div>Загрузка...</div>

    }
}