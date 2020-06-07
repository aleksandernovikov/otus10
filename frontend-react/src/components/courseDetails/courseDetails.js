import React from "react";
import {Button} from "react-bootstrap";

export default class extends React.Component {

    getLoadingTemplate = () => {
        return <div>Загрузка...</div>
    }

    getMainTemplate = () => {
        // const {title, teachers, start_date, end_date, finished} = this.props.data
        // let teachers_string = teachers.map(teacher => `${teacher.first_name} ${teacher.last_name}`).join(', ')
        return <div>courseDetails</div>
        // return (
        //     <div className="row bg-white rounded p-3 my-3">
        //         <div className="card">
        //             <div className="card-header">Курс: {title}</div>
        //             <div className="card-body">
        //                 <h5 className="card-title">Преподаватели</h5>
        //                 <p className="card-text">
        //                     {
        //                         teachers_string ?
        //                             teachers_string :
        //                             <span className='text-muted'>Не назначены</span>
        //                     }
        //                 </p>
        //                 <h5 className="card-title">Дата начала: {start_date}</h5>
        //                 <h5 className="card-title">Дата окончания: {end_date}</h5>
        //                 {
        //                     finished ?
        //                         '' :
        //                         <Button onClick={this.props.enroll}>Записаться на курс</Button>
        //                 }
        //             </div>
        //         </div>
        //     </div>
        // )
    }

    render = () => !this.props.loading ? this.getMainTemplate() : this.getLoadingTemplate()
}