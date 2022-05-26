import React from 'react';

const ShowManageOrder = ({ order, index }) => {
    const { myname, name, quantity, email, number } = order

    return (

        <tr>
            <th>{index + 1}</th>
            <td>{myname}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{email}</td>
            <td>{number}</td>

        </tr>

    );
};

export default ShowManageOrder;