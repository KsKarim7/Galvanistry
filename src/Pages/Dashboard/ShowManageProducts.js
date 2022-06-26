import React from 'react';
import { toast } from 'react-toastify';

const ShowManageProducts = ({ product, setDeleteManageProduct }) => {
    const { _id, img, available, price, name } = product


    return (
        <div className=''>
            <div className="card  w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body text-left my-auto">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-xl'>Product left: <span className='font-bold'>{available}</span></p>
                    <p className='text-xl'>Current price : $ <span className='font-bold'>{price}</span></p>
                    <div className="card-actions mt-8     justify-end">
                        <label onClick={() => setDeleteManageProduct(product)} for="delete-product-modal" className="btn btn-secondary  align-bottom">Delete Product</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowManageProducts;