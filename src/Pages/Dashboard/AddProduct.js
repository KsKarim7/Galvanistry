import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, getValues, setValue, reset } = useForm();

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
                // console.log(data)
            })
    };
    return (
        <div className='form mt-44 bg-primary w-50 mx-auto rounded-2xl '>
            <h2 className='text-center text-white text-3xl py-6'>Confirm Your Order </h2>
            <form className='grid gap-4  ' onSubmit={handleSubmit(onSubmit)}>

                <input className='mx-auto w-75  p-2   px-28' readOnly {...register("name", { maxLength: 50 })} />

                <input readOnly className='mx-auto  uppercase w-50 p-2   px-28' {...register("myname", { required: true })} />

                <input className='mx-auto w-50  p-2  px-28' {...register("email", { required: true })} />

                <input placeholder='Address' className='mx-auto w-50  p-2  px-28' {...register("address", { required: true, maxLength: 50 })} />

                <input readOnly className='mx-auto w-50  p-2  px-28' {...register("price",)} />

                <input type="number" placeholder='Number of Quantity' className='mx-auto w-50  p-2  px-28' {...register("quantity", {
                    required: {
                        value: true,
                        quantity: 'quantity is required'
                    },
                    max: {

                        message: "This much quantity is not currently available in our inventory"
                    },
                    min: {

                        message: "You need to order at least 500 products"
                    }
                })} />
                <label className="label">
                    {errors.quantity?.type === 'required' && <span className='label-text-alt text-neutral   mx-auto text-xl'>{errors.quantity.message}</span>}
                    {errors.quantity?.type === 'max' && <span className='label-text-alt text-neutral  mx-auto text-xl '>{errors.quantity.message}</span>}
                    {errors.quantity?.type === 'min' && <span className='label-text-alt text-neutral  mx-auto text-xl'>{errors.quantity.message}</span>}
                </label>
                <input placeholder='Phone Number' className='mx-auto w-50 p-2   px-28' type="number" {...register("number", { required: true })} />



                <input className='btn' type="submit" value="Confirm Order" />
            </form>
        </div>
    );
};

export default AddProduct;