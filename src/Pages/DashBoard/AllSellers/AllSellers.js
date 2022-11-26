import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/seller');
            const data = await res.json();
            return data;
        }
    })


    const handleDeleteSeller = id => {
        fetch(`http://localhost:5000/users/${id}`, {
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

    const handleVarifyed = id => {
        fetch(`http://localhost:5000/users/seller/${id}`, {
            method: 'PUT',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Verifyed successfully')
                    refetch()
                }

            })

    }
    return (
        <div>
            <h3 className='text-xl font-bold text-center'>All Sellers </h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>option</th>
                            <th></th>
                            <th>verified</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{1 + i}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.option}</td>
                                <td><button onClick={() => handleDeleteSeller(user._id)} className='btn btn-xs btn-error text-white'>Delete</button></td>
                                <td>
                                    {
                                        user?.verify === 'verified' ?
                                            <div className="form-control">
                                                <label className=" label">
                                                    <input type="checkbox" checked className="checkbox checkbox-success" />
                                                </label>
                                            </div>
                                            :
                                            <button onClick={() => handleVarifyed(user._id)} className='btn btn-xs btn-primary'>Verify</button>
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

export default AllSellers;