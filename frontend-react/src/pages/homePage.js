import TableHeading from "../components/table/heading";
import TableContainer from '../components/table/tableContainer'
import React from "react";
import UserInfoContainer from "../components/userInfo/userInfoContainer";


export default class extends React.Component {
    render() {
        return (
            <div>
                <div className='row bg-white rounded my-3 p-3'>
                    <div className="col-3 py-2">
                        <UserInfoContainer />
                    </div>
                </div>
                <div className='row bg-white rounded my-3 p-3'>
                    <div className="col-12">
                        <h2 className='p-2'>Список курсов</h2>
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
