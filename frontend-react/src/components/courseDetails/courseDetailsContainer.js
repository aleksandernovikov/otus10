import React from "react";
import CourseDetails from './courseDetails'
import {changeData, changeLoading} from "../../store/courseDetails/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router";

// import {withRouter} from "react-router-dom";

class CourseDetailsContainer extends React.Component {
    componentDidMount() {
        console.log('id:', this.props.match.params.id)
    }
    //     console.log('container props', this.props)
    // console.log('container state', this.state)

    // this.props.loadCourseDetailsData()
    // }

    render = () => {
        // console.log('render')
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
    changeData
    // loadCourseDetailsData: () => {
    //     console.log('loadCourseDetailsData')
    // }
}

let withRouterCourseDetailsContainer = withRouter(CourseDetailsContainer)

export default connect(mapStateToProps, mapDispatchToProps)(withRouterCourseDetailsContainer)