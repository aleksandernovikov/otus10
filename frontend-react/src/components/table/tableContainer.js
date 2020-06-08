import React from "react";
import {connect} from "react-redux";
import TableContent from "./content";
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
        getCoursesList().then(response_data => {
            dispatch(changeData(response_data))
            dispatch(changeLoading(false))
        }).catch(e => {
            console.log(e)
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer)