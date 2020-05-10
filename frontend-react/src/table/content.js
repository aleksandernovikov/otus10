import React from 'react';
import {getCoursesList} from '../../api/api'
import Row from "./row";


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
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
            let data = [...this.state.data]

            let rows = data.map((item, i) => {
                return <Row
                    title={item.title}
                    teachers={item.teachers}
                    start_date={item.start_date}
                    end_date={item.end_date}
                    finished={item.finished}
                />
            })

            return <tbody>{rows}</tbody>
        }
        return <div>loading...</div>
    }
}