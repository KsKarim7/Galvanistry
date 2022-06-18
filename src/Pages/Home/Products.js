import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DisplayProducts from './DisplayProducts';

const Products = () => {
    const { data: products, isLoading, } = useQuery('products', () => fetch(' https://tranquil-retreat-22940.herokuapp.com/products')
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <p className='text-5xl font-semibold  my-20 text-secondary text-center'> Product Display Section</p>

            <div >
                {
                    products?.slice(0, 3).map(product => <DisplayProducts
                        key={product._id}
                        product={product}
                    ></DisplayProducts>)
                }
            </div>
        </div>
    );
};

export default Products;