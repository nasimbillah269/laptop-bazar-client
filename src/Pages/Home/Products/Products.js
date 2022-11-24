import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';
import Product from './Product';

const Products = () => {
    const products = useLoaderData();
    const [product, setProduct] = useState(null);

    return (
        <div className='grid gap-12 lg:w-1/2  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto'>

            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                    setProduct={setProduct}
                ></Product>)
            }

            {
                product && <BookingModal setProduct={setProduct} product={product}></BookingModal>
            }
        </div>
    );
};

export default Products;