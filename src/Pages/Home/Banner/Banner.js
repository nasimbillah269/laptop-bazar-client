import React from 'react';
import banner from '../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen mt-16" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold">Welcome My Laptop Bazar</h1>
                    <p className="mb-5 text-xl mt-4 ">Buying a brand new laptop is a pricey affair. If your pocket runs out of money and you want to squeeze value from every rupee invested every dollar, consider buying a refurbished laptop.
                        .</p>
                    <button className="btn btn-bg-neutral text-neutral-content">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;