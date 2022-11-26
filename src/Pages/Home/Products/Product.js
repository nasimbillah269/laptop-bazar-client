import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, setProduct }) => {
    const { image, location, originalPrice, productName, resalePrice, yearsOfUse } = product;
    return (
        <div className='mt-12'>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>Original Price: $ {originalPrice}</p>
                    <p>ResalePrice: ${resalePrice}</p>
                    <p>Yerars Of Use: {yearsOfUse}</p>
                    <p>Location: {location}</p>
                    <div className="card-actions justify-between">
                        <Link to='/' className="btn bg-neutral text-neutral-content ">Back</Link>
                        <label onClick={() => setProduct(product)} htmlFor="booking-modal" className="btn bg-neutral text-neutral-content ">Booking Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;