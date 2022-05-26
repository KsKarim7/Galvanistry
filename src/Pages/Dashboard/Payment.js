import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L0pX9IZAkhVFhSpjbVD0Cv0h8hs3vU5dHG2emLpDpL9qavTSad0izLDWx7uowdNg2gnWZz7q7HXvphPChiBPNe9005LMP8ReZ');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;
    const { data: product, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    // console.log(product)

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <div class="card w-96 max-w-md bg-base-100 shadow-xl my-10">
                <div class="card-body">
                    <h2 class="card-title font-semibold ">Hello, <span className='uppercase text-primary'>{product.myname}</span></h2>
                    <h2 class="card-title">You are paying for : {product.name}</h2>
                    <h2 class="card-title">Number of quantity : {product.quantity}</h2>
                    <h2 class="card-title">Your Total Cost: ${product.cost}</h2>
                    <p>Disclaimer: Money is not refundable once it is paid</p>

                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 ">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm product={product} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;