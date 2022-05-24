import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content mt-2 text-center flex justify-around">
                {/* <h2 className='text-4xl text-secondary'>Dashboard</h2> */}
                <div>
                    <Outlet />
                    {/* <!-- Page content here --> */}
                </div>
                <label for="dashboard-sidebar" class="btn btn-neutral drawer-button lg:hidden mr-5">Open Dashboard</label>

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu  p-4 overflow-y-auto w-64 bg-base-100 border-2 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li className='bg-neutral rounded-lg mb-5 mt-6 text-white text-xl' ><Link to='/dashboard'>User Profile</Link></li>
                    <li className='bg-neutral rounded-lg mb-5 text-white text-xl'><Link to='/dashboard/addReview'>Add Reviews</Link></li>
                    <li className='bg-neutral rounded-lg mb-5 text-white text-xl'><Link to='/dashboard/myOrders'>My Orders</Link></li>
                    <li className='bg-neutral rounded-lg mb-5 text-white text-xl'><Link to='/dashboard/users'>All Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;