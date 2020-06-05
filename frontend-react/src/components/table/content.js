import React from 'react';
import Row from "./row";
import {Link} from "react-router-dom";

export default class extends React.Component {
    componentDidMount() {
        // console.log('componentDidMount')
        // console.log(this.props.loading)
        this.props.loadCoursesData()
    }

    render() {
        if (this.props.loading === false) {
            const rows = this.props.data.map((item) =>
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