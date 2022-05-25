import React from 'react';
import { toast } from 'react-toastify';

const ShowManageProducts = ({ product, setDeleteManageProduct }) => {
    const { _id, img, available, price, name } = product


    return (
        <div className=''>
            <div class="card  w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body text-left my-auto">
                    <h2 class="card-title">{name}</h2>
                    <p className='text-xl'>Product left: <span className='font-bold'>{available}</span></p>
                    <p className='text-xl'>Current price : $ <span className='font-bold'>{price}</span></p>
                    <div class="card-actions mt-8     justify-end">
                        <label onClick={() => setDeleteManageProduct(product)} for="delete-product-modal" class="btn btn-secondary  align-bottom">Delete Product</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowManageProducts;