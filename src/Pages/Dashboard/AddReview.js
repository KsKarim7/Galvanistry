import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';


const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/user`;
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

                <div class="rating rating-xl gap-2" {...register("rating")}>
                    <input type="radio" name="rating-6" value='1' class="mask mask-star-2 bg-pink-500" checked />
                    <input type="radio" name="rating-6" value='2' class="mask mask-star-2 bg-pink-500" />
                    <input type="radio" name="rating-6" value='3' class="mask mask-star-2 bg-pink-500" />
                    <input type="radio" name="rating-6" value='4' class="mask mask-star-2 bg-pink-500" />
                    <input type="radio" name="rating-6" value='5' class="mask mask-star-2 bg-pink-500" />
                </div>

                <input className='btn btn-primary text-2xl w-48 h-14 mt-6' type="submit" />
            </form>
        </div>
    );
};

export default AddReview;