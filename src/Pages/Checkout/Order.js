import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Order = ({ item }) => {
    // const quantityRef = useRef('')
    const [totalCost, setTotalCost] = useState(0)
    // console.log(totalCost)
    const { register, formState: { errors }, handleSubmit, getValues, setValue, reset } = useForm();
    const handleQuantityCost = e => {
        const quantity = getValues("quantity")
        const grandTotal = quantity * item.price;
        console.log(grandTotal)
        setTotalCost(grandTotal)
        // reset({
        //     data: "cost",
        // })


    }



    const [user] = useAuthState(auth)
    const onSubmit = data => {
        console.log(data)
        const url = ' https://tranquil-retreat-22940.herokuapp.com/order';
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged === true) {
                    toast.info(`Order of ${item.name} has been placed successfully`)

                }
            })
    };




    return (
        <div className='form mt-44 bg-primary w-50 mx-auto rounded-2xl '>
            <h2 className='text-center text-white text-3xl py-6'>Confirm Your Order </h2>
            <form className='grid gap-4  ' onSubmit={handleSubmit(onSubmit)}>

                <input className='mx-auto w-75  p-2   px-28' value={item.name} readOnly {...register("name", { maxLength: 50 })} />

                <input value={user?.displayName} readOnly className='mx-auto  uppercase w-50 p-2   px-28' {...register("myname", { required: true })} />

                <input value={user?.email} className='mx-auto w-50  p-2  px-28' {...register("email", { required: true })} />

                <input placeholder='Address' type="text" className='mx-auto w-50  p-2  px-28' {...register("address", { required: true, maxLength: 50 })} />

                <input readOnly defaultValue={item.price} className='mx-auto w-50  p-2  px-28' {...register("price",)} />

                <input onClick={handleQuantityCost} type="number" defaultValue={item.minimum} placeholder='Number of Quantity' className='mx-auto w-50  p-2  px-28' {...register("quantity", {
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
                <h2 className='text-center text-white text-2xl'>Click below here to get the total cost of your products</h2>
                <input placeholder='Total Cost' value={totalCost} className='mx-auto w-50 p-2   px-28' type="number" {...register("cost")} />

                {/* {errors.cost && <p>This field is required</p>} */}

                <input className='btn' type="submit" value="Confirm Order" />
            </form>
        </div>
    );
};

export default Order;