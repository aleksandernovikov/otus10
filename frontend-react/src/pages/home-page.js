import LoginForm from "../components/login_form";
import UserInfo from '../components/userinfo'
import TableHeading from "../components/table/heading";
import TableContent from "../components/table/content";
import React from "react";
import {getAccessToken} from "../services/localStorageService";

export default class extends React.Component {
    render() {
        function user() {
            // console.log('token')
            const token = getAccessToken()

            if (token) return <UserInfo/>
            return <LoginForm/>
        }

        return (
            <div className='row bg-white rounded my-3 p3'>
                <div className="col-3 py-2">
                    {user()}
                </div>
                <div className="col-12">
                    <h1>Список курсов</h1>
                    <table className="table">
                        <TableHeading
                            heading={['Название', 'Преподаватели', 'Дата начала', 'Дата окончания', 'Курс окончен']}/>
                        <TableContent/>
                    </table>
                </div>
            </div>
        )
    }
}
