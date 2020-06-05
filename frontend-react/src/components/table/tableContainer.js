import React from "react";
import TableContent from "./content";
import {connect} from "react-redux";
import {changeData, changeLoading} from "../../store/coursesTable/actions";
import {getCoursesList} from "../../services/api";


class TableContainer extends React.Component {
    componentDidMount() {
        this.props.loadCoursesData()
    }

    render() {
        return <TableContent {...this.props} />
    }
}

const mapStateToProps = state => {
    let {loading, data} = state.coursesTableContent
    return {loading, data}
}

const mapDispatchToProps = {
    changeData,
    loadCoursesData: () => dispatch => {
        console.log('loadCoursesData !!!!!!')
        getCoursesList().then(response_data => {
            dispatch(changeData(response_data))
            dispatch(changeLoading(false))
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer)