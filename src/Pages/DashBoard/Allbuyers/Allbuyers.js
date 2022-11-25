import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Allbuyers = () => {
    const { data: users = [], } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/user');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3>All Buyers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>option</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{1 + i}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.option}</td>
                                <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allbuyers;