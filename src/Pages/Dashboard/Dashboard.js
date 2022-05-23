import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                <h2 className='text-4xl text-secondary'>Dashboard</h2>
                <Outlet />
                {/* <!-- Page content here --> */}
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>User Profile</Link></li>
                    <li><Link to='/dashboard/addReview'>Add Reviews</Link></li>
                    <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;