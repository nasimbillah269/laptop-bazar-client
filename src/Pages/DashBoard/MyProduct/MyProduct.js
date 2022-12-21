import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProduct = () => {
    const { user } = useContext(AuthContext);

    const url = `https://laptop-bazar-server-theta.vercel.app/addProducts?email=${user?.email}`;

    const { data: addProducts = [], refetch } = useQuery({
        queryKey: ['addProducts', user?.email,],
        queryFn: async () => {
            const res = await fetch(url, {
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteProduct = id => {
        fetch(`https://laptop-bazar-server-theta.vercel.app/addProducts/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(' deleted successfull')
                }


            })
    }
    return (
        <div>
            <h2 className='text-1xl font-bold text-center mb-4'>My Product</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th></th>
                            <th>advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addProducts.map((addProduct, i) => <tr key={addProduct._id}>
                                <th>{i + 1}</th>
                                <td>{addProduct.productName}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={addProduct.image} alt='' />
                                        </div>
                                    </div>
                                    { }
                                </td>
                                <td>{addProduct.price}</td>
                                <td>
                                    <button onClick={() => handleDeleteProduct(addProduct._id)} className='btn btn-primary btn-sm'>Delete</button>
                                </td>
                                <td>
                                    <button className='btn btn-info btn-sm'>advertise</button>
                                </td>

                                {/* <td>
                                {
                                    booking.price && !booking.paid && <Link
                                        to={`/dashboard/payment/${booking._id}`}>
                                        <button className='btn btn-primary btn-sm'>pay</button>
                                    </Link>
                                }
                                {
                                    booking.price && booking.paid && <span className='text-primary '>paid</span>
                                }
                            </td> */}
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;