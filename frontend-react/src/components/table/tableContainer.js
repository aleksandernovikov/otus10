import React from "react";
import TableContent from "./content";
import {connect} from "react-redux";
import {changeLoading} from "../../store/coursesTable/actions";


class TableContainer extends React.Component {
    render() {
        return <TableContent {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        loading: state.coursesTableContent.loading,
        data: state.coursesTableContent.data
    }
}

const mapDispatchToProps = {
    loadCoursesData: () => dispatch => {
        console.log('loadCoursesData !!!!!!')
        //            getCoursesList().then(response_data => {
        //             this.setState({
        //                 loading: false,
        //                 data: response_data
        //             })
        //         })
        dispatch(changeLoading(false))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer)