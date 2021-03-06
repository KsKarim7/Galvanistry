import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mt-2 text-center flex justify-around">
                {/* <h2 className='text-4xl text-secondary'>Dashboard</h2> */}
                <div>
                    <Outlet />
                    {/* <!-- Page content here --> */}
                </div>
                <label for="dashboard-sidebar" className="btn btn-neutral drawer-button lg:hidden mr-5">Open Dashboard</label>

            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu  p-4 overflow-y-auto w-64 bg-base-100 border-2 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li className='bg-neutral rounded-lg mb-5 mt-6 text-white text-xl' ><Link to='/dashboard'>User Profile</Link></li>
                    {!admin && <li className='bg-neutral rounded-lg mb-5 text-white text-xl'><Link to='/dashboard/addReview'>Add Reviews</Link></li>}
                    {!admin && <li className='bg-neutral rounded-lg mb-5 text-white text-xl'><Link to='/dashboard/myOrders'>My Orders</Link></li>}
                    {admin && <li className='bg-neutral rounded-lg mb-5 text-white text-xl'><Link to='/dashboard/users'>All Users</Link></li>}
                    {admin && <li className='bg-neutral rounded-lg mb-5 text-white text-xl'><Link to='/dashboard/manage'>Manage Products</Link></li>}
                    {admin && <li className='bg-neutral rounded-lg mb-5 text-white text-xl'><Link to='/dashboard/addproduct'>Add Product</Link></li>}
                    {admin && <li className='bg-neutral rounded-lg mb-5 text-white text-xl'><Link to='/dashboard/manageOrders'>Manage Orders</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;