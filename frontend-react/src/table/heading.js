import React from 'react';

export default class extends React.Component{
    render(){
        return (
            <thead>
                <tr>
                    <th scope="col">Название</th>
                    <th scope="col">Учителя</th>
                    <th scope="col">Дата начала</th>
                    <th scope="col">Дата окончания</th>
                    <th scope="col">Курс окончен</th>
                </tr>
            </thead>
        );
    }
}