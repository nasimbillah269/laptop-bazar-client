import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAddmin';
import useBuyer from '../hooks/useBuyer';

import useSeller from '../hooks/useSeller';
import Navber from '../Pages/Sheard/Navber/Navber';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);



    return (
        <div>
            <Navber></Navber>
            <div className="drawer drawer-mobile my-12">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  bg-neutral text-neutral-content">

                        {
                            user && isBuyer &&
                            <li><Link to="/dashboard/myorders">My Orders</Link></li>
                        }

                        {
                            user && isSeller && <>
                                <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                                <li><Link to="/dashboard/myproduct">My Product</Link></li>
                            </>

                        }
                        {
                            user && isAdmin && <>
                                <li><Link to="/dashboard/allusers">All Users</Link></li>
                                <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                            </>

                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;