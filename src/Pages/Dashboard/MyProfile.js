import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth)

    const onSubmit = data => {
        console.log(data)
        const url = ' https://tranquil-retreat-22940.herokuapp.com/profile';
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
        <div >
            <div className='form  mt-44 bg-primary w-50 mx-auto rounded-2xl '>
                <h2 className='text-center text-white text-3xl py-6'>My Profile</h2>
                <form className='grid gap-4  ' onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} className='mx-auto uppercase w-75  p-2   px-28' readOnly {...register("name", { maxLength: 50 })} />

                    <input defaultValue={user.email} readOnly className='mx-auto w-50 p-2   px-28' {...register("email", { required: true })} />

                    <input placeholder='District' className='mx-auto w-50  p-2  px-28' {...register("city", { required: true })} />

                    <input placeholder='Area' className='mx-auto w-50  p-2  px-28' {...register("area", { required: true, maxLength: 50 })} />

                    <input placeholder='Your Linkedin Profile' className='mx-auto w-50  p-2  px-28' {...register("linkedin",)} />

                    <input type="number" placeholder='Cell no.' className='mx-auto w-50  p-2  px-28' {...register("number", {
                        required: {
                            value: true,
                            number: 'phone number is required'
                        }
                    })} />

                    <input className='btn' type="submit" value="Update User Info" />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;