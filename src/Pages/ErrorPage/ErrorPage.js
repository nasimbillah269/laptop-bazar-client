import React from 'react';
import error from '../../assets/image/error.jpg'

const ErrorPage = () => {
    return (
        <div className='text-center mt-12'>
            <img className='w-80 h-80 rounded mx-auto' src={error} alt="" />
            <p className='text-3xl font-bold'>Data Not Found !</p>
        </div>
    );
};

export default ErrorPage;