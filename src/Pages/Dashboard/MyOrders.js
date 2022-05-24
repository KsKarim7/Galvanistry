import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])
    return (
        <div>
            <h2 className='text-4xl text-secondary mt-8 font-semibold'>All Of my orders</h2>
            <div class="overflow-x-auto mt-10  ">
                <table class="table   w-full table-normal ">
                    <thead >
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Email</th>
                            <th>Cell no.</th>
                            <th>Payment State</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            orders.map((order, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.myname}</td>
                                    <td>{order.name}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.email}</td>
                                    <td>{order.number}</td>
                                    <td></td>
                                </tr>
                            )
                        }


                    </tbody>
                    {/* <tfoot>
                      
                    </tfoot> */}
                </table>
            </div>
        </div >
    );
};

export default MyOrders;