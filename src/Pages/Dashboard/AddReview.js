import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const [rating, setRating] = useState()
    const handleRating = e => {
        setRating(e.target.value)
    }
    const onSubmit = data => {
        console.log(data)
        const url = ` https://tranquil-retreat-22940.herokuapp.com/user`;
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
                toast.success('Review Published!')
            })
    };
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2 className='text-4xl text-neutral font-semibold m-8'>Add Reviews Here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='w-full text-2xl text-primary max-w-xs input  input-bordered input-primary' value={user?.displayName} {...register("name")} />

                <input className='input input-bordered mx-8 textarea-primary h-24 w-full max-w-xs text-xl ' placeholder="Your review" {...register("review", { required: true, maxLength: 250 })} />

                <select className='border-solid border-2 m-6 border-primary rounded-lg h-12 text-xl' {...register("product")}>
                    <option value="Tangent Galvanometer">Tangent Galvanometer</option>
                    <option value="Ballistic Galvanometer">Ballistic Galvanometer</option>
                    <option value="D'Arsonval/Weston Galvanometer">D'Arsonval/Weston Galvanometer</option>
                    <option value="Mirror Galvanometer">Mirror Galvanometer</option>
                </select>

                {/* <input type="number" placeholder="Rating" {...register("rating", { min: 1, max: 5 })} /> */}

                <div onSelect={handleRating} class="rating rating-xl gap-2" {...register("rating")}>
                    <input type="radio" name="rating-6" value={rating} class="mask mask-star-2 bg-pink-500" />
                    <input type="radio" name="rating-6" value={rating} class="mask mask-star-2 bg-pink-500" checked />
                    <input type="radio" name="rating-6" value={rating} class="mask mask-star-2 bg-pink-500" />
                    <input type="radio" name="rating-6" value={rating} class="mask mask-star-2 bg-pink-500" />
                    <input type="radio" name="rating-6" value={rating} class="mask mask-star-2 bg-pink-500" />
                </div>



                <input className='btn btn-primary text-2xl w-48 h-14 mt-6' type="submit" />
            </form >
        </div >
    );
};

export default AddReview;