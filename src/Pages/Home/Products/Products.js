import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const products = useLoaderData();

    console.log(products);
    return (
        <div className='grid gap-12 lg:w-1/2  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto'>

            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default Products;