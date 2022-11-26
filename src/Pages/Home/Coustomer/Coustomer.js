import React from 'react';
import man1 from '../../../assets/image/man1.jpg'
import man2 from '../../../assets/image/man2.jpg'
import man3 from '../../../assets/image/man3.jpg'
import man4 from '../../../assets/image/man4.jpg'
const Coustomer = () => {
    return (
        <div className='lg:w-9/12 mx-auto my-12'>
            <h2 className='text-center text-3xl font-bold mb-12'>Customer</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                <div className='text-center shadow-2xl rounded-lg'>
                    <img className='w-28 h-28 mx-auto rounded-full' src={man1} alt="" />
                    <p className='text-1xl mr-2 font-bold text-rose-700'>Jon son</p>
                    <p className='text-4xl text-yellow-500'>******</p>
                </div>
                <div className='text-center shadow-2xl rounded-lg'>
                    <img className='w-28 h-28 mx-auto rounded-full' src={man2} alt="" />
                    <p className='text-1xl mr-2 font-bold text-rose-700'>Hasim Iqbal</p>
                    <p className='text-4xl text-yellow-500'>******</p>
                </div>
                <div className='text-center shadow-2xl rounded-lg'>
                    <img className='w-28 h-28 mx-auto rounded-full' src={man3} alt="" />
                    <p className='text-1xl mr-2 font-bold text-rose-700'>Jibo Hasan</p>
                    <p className='text-4xl text-yellow-500'>******</p>
                </div>
                <div className='text-center shadow-2xl rounded-lg'>
                    <img className='w-28 h-28 mx-auto rounded-full' src={man4} alt="" />
                    <p className='text-1xl mr-2 font-bold text-rose-700'>Tom Jen</p>
                    <p className='text-4xl text-yellow-500'>******</p>
                </div>
            </div>
        </div>
    );
};

export default Coustomer;