import React from "react";
import {courseEnroll, getCourseDetails} from "../services/api";
import {Link} from "react-router-dom";
import {getAccessToken} from "../services/localStorageService";
import UserInfo from "../components/userInfo";
import {Button} from "react-bootstrap";

export default class extends React.Component {
    state = {
        loading: true,
        courseData: null,
        isUserLoggedIn: !!getAccessToken()
    }

    componentDidMount() {
        const courseId = this.props.match.params.id

        getCourseDetails(courseId).then(response => {

            this.setState({
                loading: false,
                courseData: response
            })
        })
    }

    enroll = () => {
        if (!getAccessToken()) {
            alert('Необходимо авторизоваться!')
        }

        courseEnroll(this.props.match.params.id).then(result => {
            let msg = result ? 'Поздравляем, вы записаны!' : 'Вы записались раннее!'
            alert(msg)
        })
    }

    getLoadingTemplate = () => {
        return <div>Загрузка...</div>
    }

    getMainTemplate = () => {
        const {courseData} = this.state

        let teachers = courseData.teachers.map(teacher => {
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
                        <div className="card-header">Курс: {courseData.title}</div>
                        <div className="card-body">
                            <h5 className="card-title">Преподаватели</h5>
                            <p className="card-text">{teachers ? teachers :
                                <span className='text-muted'>Не назначены</span>}
                            </p>
                            <h5 className="card-title">Дата начала: {courseData.start_date}</h5>
                            <h5 className="card-title">Дата окончания: {courseData.end_date}</h5>
                            {courseData.finished ? '' : <Button onClick={this.enroll}>Записаться на курс</Button>}
                        </div>
                    </div>
                </div>
                <Link to='/'>На главную</Link>
            </div>
        )
    }

    render() {
        return !this.state.loading ? this.getMainTemplate() : this.getLoadingTemplate()
    }
}