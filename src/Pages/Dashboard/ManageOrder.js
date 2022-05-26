import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ShowManageOrder from './ShowManageOrder';

const ManageOrder = () => {
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/orders', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-4xl text-secondary my-10 font-semibold'>Orders Management</h2>
            <div class="overflow-x-auto mt-10  ">
                <table class="table   w-full table-normal ">
                    <thead >
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Payment State</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            orders.map((order, index) =>
                                <ShowManageOrder
                                    index={index}
                                    key={order._id}
                                    order={order}
                                ></ShowManageOrder>
                            )
                        }


                    </tbody>
                    {/* <tfoot>
                      
                    </tfoot> */}
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;