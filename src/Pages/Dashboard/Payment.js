import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;
    const { data: product, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    console.log(product)

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <div class="card w-96 max-w-md bg-base-100 shadow-xl ">
                <div class="card-body">
                    <h2 class="card-title font-semibold ">Hello, <span className='uppercase text-primary'>{product.myname}</span></h2>
                    <h2 class="card-title">You are paying for : {product.name}</h2>
                    <h2 class="card-title">Your Total Cost: ${product.cost}</h2>
                    <p>Disclaimer: Money is not refundable once it is paid</p>

                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                </div>
            </div>
        </div>
    );
};

export default Payment;