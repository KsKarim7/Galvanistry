import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const Order = ({ item }) => {
    const { register, formState: { errors }, handleSubmit } = useForm({
        criteriaMode: "all"
    });;
    // let errorElement;
    // const [quantity, setQuantity] = useState()
    const [user] = useAuthState(auth)
    // console.log(user)
    const onSubmit = data => {
        // console.log(data)
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
    // const handleQuantity = e => {
    //     console.log(e)
    //     setQuantity(e.target.value)
    //     const quantity = parseFloat(e.current.value)
    //     if (quantity < 500) {
    //         toast('Error')
    //     }
    // }
    // if (errors) {
    //     errorElement = <p className='text-danger'>Error: {errors.message}</p>
    // }



    return (
        <div className='form mt-44 bg-primary w-50 mx-auto'>
            <h2 className='text-center text-white text-3xl py-6'>Confirm Your Order </h2>
            <form className='grid gap-4 ' onSubmit={handleSubmit(onSubmit)}>

                <input className='mx-auto w-75  p-2   px-28' value={item.name} readOnly {...register("name", { maxLength: 50 })} />

                <input value={user?.displayName} readOnly className='mx-auto  uppercase w-50 p-2   px-28' {...register("myname", { required: true })} />

                <input value={user?.email} className='mx-auto w-50  p-2  px-28' {...register("email", { required: true })} />

                <input placeholder='Address' className='mx-auto w-50  p-2  px-28' {...register("address", { required: true, maxLength: 50 })} />

                <input type="number" defaultValue={item.minimum} placeholder='Number of Quantity' className='mx-auto w-50  p-2  px-28' {...register("quantity", {
                    required: {
                        value: true,
                        quantity: 'quantity is required'
                    },
                    max: {
                        value: item.available,
                        message: "This much quantity is not currently available in our inventory"
                    },
                    min: {
                        value: item.minimum,
                        message: "You need to order at least 500 products"
                    }
                })} />
                <label className="label">
                    {errors.quantity?.type === 'required' && <span className='label-text-alt text-neutral   mx-auto text-xl'>{errors.quantity.message}</span>}
                    {errors.quantity?.type === 'max' && <span className='label-text-alt text-neutral  mx-auto text-xl '>{errors.quantity.message}</span>}
                    {errors.quantity?.type === 'min' && <span className='label-text-alt text-neutral  mx-auto text-xl'>{errors.quantity.message}</span>}
                </label>
                <input placeholder='Phone Number' className='mx-auto w-50 p-2   px-28' type="number" {...register("number", { required: true })} />

                {/* <input placeholder='cost' className='mx-auto w-50 p-2   px-28' type="number" {...register("cost", { required: true })} /> */}
                {/* {errors.cost && <p>This field is required</p>} */}

                <input className='btn' type="submit" value="Confirm Order" />
            </form>
        </div>
    );
};

export default Order;