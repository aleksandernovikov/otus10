import React from "react";
import CourseDetails from './courseDetails'
import {changeData, changeLoading} from "../../store/courseDetails/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class CourseDetailsContainer extends React.Component {
    componentDidMount() {
        console.log(this.props)
        this.props.loadCourseDetailsData()
    }

    render = () => <CourseDetails {...this.props} />
}

const mapStateToProps = state => ({
    loading: state.loading,
    data: state.data
})

const mapDispatchToProps = {
    changeLoading,
    changeData,
    loadCourseDetailsData: () => {
        console.log('loadCourseDetailsData')
    }
}
let withRouterCourseDetailsContainer = withRouter(CourseDetailsContainer)

export default connect(mapStateToProps, mapDispatchToProps)(withRouterCourseDetailsContainer)