import React from 'react';

const ShowManageProducts = ({ product, refetch }) => {
    const { img, available, minimum, price, name, description } = product
    // console.log(product)
    return (
        <div className=''>
            <div class="card  w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body text-left my-auto">
                    <h2 class="card-title">{name}</h2>
                    <p className='text-xl'>Product left: <span className='font-bold'>{available}</span></p>
                    <p className='text-xl'>Current price : $ <span className='font-bold'>{price}</span></p>
                    <div class="card-actions mt-8     justify-end">
                        <button class="btn btn-secondary  align-bottom ">Delete Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowManageProducts;