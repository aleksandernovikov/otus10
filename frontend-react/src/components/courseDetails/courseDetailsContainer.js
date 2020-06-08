import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import CourseDetails from './courseDetails'
import {changeData, changeLoading} from "../../store/courseDetails/actions";
import {courseEnroll, getCourseDetails} from "../../services/api";


class CourseDetailsContainer extends React.Component {
    componentDidMount() {
        this.props.loadCourseDetailsData(this.props.match.params.id)
    }

    render = () => {
        return <CourseDetails {...this.props} />
    }
}

const mapStateToProps = state => {
    console.log('state', state)
    return {
        loading: state.courseDetails.loading,
        data: state.courseDetails.data
    }
}

const mapDispatchToProps = {
    changeLoading,
    changeData,
    loadCourseDetailsData: (courseId) => dispatch => {
        dispatch(changeLoading(true))
        getCourseDetails(courseId).then(response => {
            dispatch(changeData(response))
            dispatch(changeLoading(false))
        }).catch(e => {
            console.log(e)
        })
    },
    enroll: (courseId) => dispatch => {
        courseEnroll(courseId).then(result => {
            let msg = result ? 'Поздравляем, вы записаны!' : 'Вы записались раннее!'
            alert(msg)
        }).catch(e => {
            console.log(e)
            alert('Необходимо авторизоваться!')
        })
    }
}

let withRouterCourseDetailsContainer = withRouter(CourseDetailsContainer)

export default connect(mapStateToProps, mapDispatchToProps)(withRouterCourseDetailsContainer)