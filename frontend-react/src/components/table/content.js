import React from 'react';
import {getCoursesList} from '../../services/api'
import Row from "./row";
import {Link} from "react-router-dom";

export default class extends React.Component {
    state = {
        loading: true
    }

    componentDidMount() {
        getCoursesList().then(response_data => {
            this.setState({
                loading: false,
                data: response_data
            })
        })
    }

    render() {
        if (this.state.loading === false) {
            const rows = this.state.data.map((item) =>

                <Row
                    title={<Link to={`/course/${item.id}`}>{item.title}</Link>}
                    teachers={item.teachers}
                    start_date={item.start_date}
                    end_date={item.end_date}
                    finished={item.finished}
                />
            )
            return <tbody>{rows}</tbody>
        }
        return <div>Загрузка...</div>
    }
}