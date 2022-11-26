import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
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
    return (
        <div>
            <h2>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.productName}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={booking.image} alt='' />
                                        </div>
                                    </div>
                                    { }
                                </td>
                                <td>{booking.resalePrice}</td>
                                {/* <td>
                                    <button className='btn btn-primary btn-sm'>pay</button>
                                </td> */}

                                <td>
                                    {
                                        booking.resalePrice && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}>
                                            <button className='btn btn-primary btn-sm'>pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.resalePrice && booking.paid && <span className='text-primary '>paid</span>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;