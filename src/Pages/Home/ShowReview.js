import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ShowReview = ({ rate }) => {
    const { name, product, review, rating } = rate
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={rate?.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">User name: <span className='uppercase'> {name}</span></h2>
                    <h2 className="text-2xl">Review :{review}</h2>
                    <p className='text-xl'>Review on : {product}</p>
                    <p>Rating: {rating} <FontAwesomeIcon className='text-xl' icon={faStar}></FontAwesomeIcon></p>
                </div>
            </div>
        </div>
    );
};

export default ShowReview;