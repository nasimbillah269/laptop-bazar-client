import React from 'react';

const Product = ({ product, setProduct }) => {
    const { image, location, originalPrice, productName, resalePrice, yearsOfUse } = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>Original Price: $ {originalPrice}</p>
                    <p>ResalePrice: ${resalePrice}</p>
                    <p>Yerars Of Use: {yearsOfUse}</p>
                    <p>{location}</p>
                    <div className="card-actions justify-center">
                        <label onClick={() => setProduct(product)} htmlFor="booking-modal" className="btn btn-primary ">Booking Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;