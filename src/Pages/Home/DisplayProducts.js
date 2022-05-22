import React from 'react';
import { Container } from 'react-bootstrap';

const DisplayProducts = ({ product }) => {
    const { img, available, minimum, price, name, description } = product
    // console.log(product)
    return (
        <Container>
            <div class="card ml-48 my-10 card-side bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Name:  {name}</h2>
                    <p>{description}</p>
                    <p>Available item quantity:{available}</p>
                    <p>Minimum order quantity:{minimum}</p>
                    <p>Per unit price: ${price}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Order Now</button>
                    </div>
                </div>
                <figure><img src={img} alt="" /></figure>
            </div>
        </Container>
    );
};

export default DisplayProducts;