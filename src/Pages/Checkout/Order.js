import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';


const Order = ({ item }) => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth)
    console.log(user)
    const onSubmit = data => {
        console.log(data)
        const url = 'http://localhost:5000/order';
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    };


    return (
        <div className='form mt-44 bg-gray-500 w-50 mx-auto'>
            <h2 className='text-center text-white text-3xl py-6'>Confirm Your Order </h2>
            <form className='grid gap-4 ' onSubmit={handleSubmit(onSubmit)}>

                <input className='mx-auto w-75  p-2   px-28' value={item.name} readOnly {...register("name", { maxLength: 50 })} />
                <input value={user?.displayName} readOnly className='mx-auto w-50 p-2   px-28' {...register("myname", { required: true, maxLength: 50 })} />
                <input value={user.email} className='mx-auto w-50  p-2  px-28' {...register("email", { required: true, maxLength: 50 })} />
                <input placeholder='Address' className='mx-auto w-50  p-2  px-28' {...register("address", { required: true, maxLength: 50 })} />
                <input placeholder='Number of Quantity' className='mx-auto w-50  p-2  px-28' {...register("quantity")} />
                <input placeholder='Phone Number' className='mx-auto w-50 p-2   px-28' type="number" {...register("number")} />
                <input placeholder='cost' className='mx-auto w-50 p-2   px-28' type="number" {...register("cost")} />

                <input className='btn' type="submit" value="Confirm Order" />
            </form>
        </div>
    );
};

export default Order;