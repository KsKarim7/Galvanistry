import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imgStorageKey = '770f885ba2a479824873b0ae54d64504'

    const onSubmit = data => {
        console.log('data', data)
        const image = data.image;
        const formData = new FormData();
        formData.append('image', image)
        const link = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(link, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        email: data.email,
                        available: data.available,
                        minimum: data.minimum,
                        price: data.price,
                        warranty: data.warranty,
                        address: data.address,
                        img: img

                    }

                    const url = ' https://tranquil-retreat-22940.herokuapp.com/product';
                    fetch(url, {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added Successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the product')
                            }
                        })
                }
            })


    };
    return (
        <div className='form mt-44 bg-primary w-50 mx-auto rounded-2xl '>
            <h2 className='text-center text-white text-3xl py-6'>Add Product</h2>
            <form className='grid gap-4  ' onSubmit={handleSubmit(onSubmit)}>

                <input placeholder='Product Name' className='mx-auto w-75  p-2  px-28'  {...register("name", { maxLength: 50 })} />

                <input placeholder='company email' className='mx-auto w-50  p-2  px-28' {...register("email", { required: true })} />


                <input placeholder='Minimum quantity to order' className='mx-auto   w-50 p-2   px-28' {...register("minimum", { required: true })} />


                <input placeholder='Address' className='mx-auto w-50  p-2  px-28' {...register("address", { required: true, maxLength: 50 })} />

                <input type="number" placeholder='Price of Product' className='mx-auto w-50  p-2  px-28' {...register("price", {
                    required: true
                })} />
                <input type="number" placeholder='Available Product' className='mx-auto w-50  p-2  px-28' {...register("available", {
                    required: true
                })} />

                <input type="number" placeholder='Warranty of Product' className='mx-auto w-50  p-2  px-28' {...register("warranty", {
                    required: true
                })} />

                <input placeholder='Company address' className='mx-auto w-50 p-2   px-28' type="text" {...register("address", { required: true })} />


                <input type="file"
                    placeholder='image of the product'
                    className="input mx-auto input-bordered w-full max-w-xs"
                    {...register("img", {

                        required: {
                            value: true,
                            message: 'Image is required'
                        },
                    })}
                />
                <label className="label">
                    {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                </label>



                <input className='btn' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;