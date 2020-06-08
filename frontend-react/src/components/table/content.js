import React from 'react';
import Row from "./row";
import {Link} from "react-router-dom";

export default class extends React.Component {

    getLoadingTemplate = () => <div>Загрузка...</div>

    getMainTemplate = () => {
        const rows = this.props.data.map((item) =>
            <Row
                key={item.id}
                title={<Link to={`/course/${item.id}`}>{item.title}</Link>}
                teachers={item.teachers}
                start_date={item.start_date}
                end_date={item.end_date}
                finished={item.finished}
            />
        )
        return <tbody>{rows}</tbody>
    }

    render = () => this.props.loading === false ? this.getMainTemplate() : this.getLoadingTemplate()
}