import UserInfo from '../components/userInfo'
import TableHeading from "../components/table/heading";
import TableContent from "../components/table/content";
import TableContainer from '../components/table/tableContainer'
import React from "react";


export default class extends React.Component {
    render() {
        return (
            <div>
                <div className='row bg-white rounded my-3 p-3'>
                    <div className="col-3 py-2">
                        <UserInfo/>
                    </div>
                </div>
                <div className='row bg-white rounded my-3 p-3'>
                    <div className="col-12">
                        <h1>Список курсов</h1>
                        <table className="table">
                            <TableHeading
                                heading={['Название', 'Преподаватели', 'Дата начала', 'Дата окончания', 'Курс окончен']}/>
                            <TableContainer />
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
