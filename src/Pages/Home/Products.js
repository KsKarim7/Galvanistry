import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DisplayProducts from './DisplayProducts';

const Products = () => {
    // const [product, setProduct] = useState()

    const { data: products, isLoading, } = useQuery('products', () => fetch('http://localhost:5000/products')
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <p className='text-4xl  my-14 text-secondary text-center'> Product Display Section:</p>

            {
                products?.slice(0, 3).map(product => <DisplayProducts
                    key={product._id}
                    product={product}
                ></DisplayProducts>)
            }
        </div>
    );
};

export default Products;