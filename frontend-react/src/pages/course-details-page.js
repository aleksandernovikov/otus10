import React from "react";
import {courseEnroll, getCourseDetails} from "../api";
import {Link} from "react-router-dom";
import {getAccessToken} from "../services/localStorageService";
import UserInfo from "../components/userinfo";
import {Button} from "react-bootstrap";

export default class extends React.Component {
    state = {
        loading: true,
        courseData: null,
        isUserLoggedIn: Boolean(getAccessToken())
    }

    componentDidMount() {
        const courseId = this.props.match.params.id

        getCourseDetails(courseId).then(response => {
            // console.log(response)
            this.setState({
                loading: false,
                courseData: response
            })
            // console.log(this.state)
        })
    }

    enroll = () => {
        // console.log('enroll')
        if (!Boolean(getAccessToken())) {
            alert('Необходимо авторизоваться!')
        }

        courseEnroll(this.props.match.params.id).then(result => {
            let msg = result ? 'Поздравляем, вы записаны!' : 'Вы записались раннее!'
            alert(msg)
        })
    }

    render() {
        if (this.state.loading === false) {
            const data = this.state.courseData

            let teachers = data.teachers.map(teacher => {
                return `${teacher.first_name} ${teacher.last_name}`
            }).join(', ')

            return (
                <div>
                    <div className='row bg-white rounded my-3 p-3'>
                        <div className="col-3 py-2">
                            <UserInfo/>
                        </div>
                    </div>

                    <div className="row bg-white rounded p-3 my-3">
                        <div className="card">
                            <div className="card-header">Курс: {data.title}</div>
                            <div className="card-body">
                                <h5 className="card-title">Преподаватели</h5>
                                <p className="card-text">{teachers ? teachers :
                                    <span className='text-muted'>Не назначены</span>}
                                </p>
                                <h5 className="card-title">Дата начала: {data.start_date}</h5>
                                <h5 className="card-title">Дата окончания: {data.end_date}</h5>
                                {data.finished ? '' : <Button onClick={this.enroll}>Записаться на курс</Button>}
                            </div>
                        </div>
                    </div>
                    <Link to='/'>На главную</Link>
                </div>
            )
        }
        return <div>Загрузка...</div>
    }
}