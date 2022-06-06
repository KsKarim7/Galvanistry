import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = ({ product }) => {
    const { cost, myname, email, number, _id } = product;

    const stripe = useStripe();
    const elements = useElements()


    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');


    useEffect(() => {
        fetch('https://tranquil-retreat-22940.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ cost })

        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [cost])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true);

        // confirm payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: myname,
                        email: email,
                        // cell_no: number,
                        // account_number: _id
                    },
                },
            },
        );

        // show error
        if (intentError) {
            setCardError(intentError?.message)
            setProcessing(false);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id)
            setSuccess('Payment Successful')

            // store payment info in database
            const payment = {
                order: _id,
                transactionId: paymentIntent.id
            }
            fetch(` https://tranquil-retreat-22940.herokuapp.com/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setProcessing(false)

                })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm my-3' disabled={!stripe || !clientSecret || success}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-primary'>
                    <p>{success}</p>
                    <p>Your transaction Id: <span className=' font-bold text-red-500'>{transactionId}</span></p>
                </div>
            }
        </>
    );

}

export default CheckoutForm;