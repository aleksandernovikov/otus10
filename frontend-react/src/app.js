import React from 'react'
import TableHeading from './table/heading'
import TableContent from './table/content'
import LoginForm from './login_form'

export default function (props) {
    return (
        <div>
            <LoginForm />
            <h1>Список курсов</h1><br/>
            <table className="table">
                <TableHeading />
                <TableContent/>
            </table>
        </div>
    );
}