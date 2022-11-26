import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIP_PK);

const Payment = () => {
    const booking = useLoaderData();
    const { productName, resalePrice } = booking;
    return (
        <div>
            <h2 className='text-2xl'>Payment for {productName}</h2>
            <p className='text-1xl'>Please pay ${resalePrice}  </p>

            <div className='w-96 mx-12 mt-4'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking}>

                    </CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;