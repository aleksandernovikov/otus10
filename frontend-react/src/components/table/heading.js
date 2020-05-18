import React from 'react';

export default (props) => {
    let thList = props.heading.map((th, i) => {
        return <th scope="col" key={i}>{th}</th>
    })
    return (<thead>
        <tr>
            {thList}
        </tr>
        </thead>
    );
}