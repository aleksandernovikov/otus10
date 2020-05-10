import React from 'react'
import TableHeading from './table/heading'
import TableContent from './table/content'

export default function (props) {
    return (
        <div>
            <h1>Список курсов</h1><br/>
            <table className="table">
                <TableHeading />
                <TableContent/>
            </table>
        </div>

    );
}