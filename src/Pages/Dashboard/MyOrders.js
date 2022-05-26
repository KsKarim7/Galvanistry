import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading'
import DeleteModal from './DeleteModal';
import ShowMyOrders from './ShowMyOrders';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user, loading] = useAuthState(auth);
    const [deleteOrder, setDeleteOrder] = useState(null)

    useEffect(() => {
        if (user) {
            fetch(` https://tranquil-retreat-22940.herokuapp.com/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])

    if (loading) {
        return <Loading></Loading>
    }


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
                            <th>Total Cost</th>
                            <th>Email</th>
                            <th>Cell no.</th>
                            <th>Payment State</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            orders.map((order, index) =>
                                <ShowMyOrders
                                    index={index}
                                    key={order._id}
                                    order={order}
                                    setDeleteOrder={setDeleteOrder}
                                ></ShowMyOrders>
                            )
                        }


                    </tbody>
                    {/* <tfoot>
                      
                    </tfoot> */}
                </table>
            </div>
            {deleteOrder && <DeleteModal deleteOrder={deleteOrder}
                setDeleteOrder={setDeleteOrder}
            ></DeleteModal>}
        </div >
    );
};

export default MyOrders;