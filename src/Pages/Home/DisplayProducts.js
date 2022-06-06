import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const DisplayProducts = ({ product }) => {
    // console.log(product)
    const { _id, img, available, minimum, price, name, description } = product
    // console.log(product)

    const navigate = useNavigate();
    const navigateToCheckout = id => {
        navigate(`/product/${id}`)
    }

    return (
        <Container>
            <div class=" card my-10 lg:card-side bg-base-200 shadow-xl ">
                <div class="card-body w-10/12">
                    <h2 class="card-title"><span className=' text-2xl '>Name:</span>  {name}</h2>
                    <p>{description}</p>
                    <p><span className='font-semibold text-xl '>Available item quantity: </span>{available}</p>
                    <p><span className='font-semibold text-xl '>Minimum order quantity: </span>{minimum}</p>
                    <p><span className='font-semibold text-xl '>Per unit price:</span> ${price}</p>
                    <div class="card-actions justify-start">
                        <button onClick={() => navigateToCheckout(_id)} class="btn btn-primary">Order Now</button>
                    </div>
                </div>
                <figure className=''><img src={img} alt="" /></figure>
            </div>
        </Container>
    );
};

export default DisplayProducts;