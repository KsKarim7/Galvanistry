import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar fixed z-50 bg-primary">
            <div class="navbar-start">
                <div class="dropdown ">
                    <label tabIndex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item </a></li>
                        <li tabindex="0">
                            <a class="justify-between">
                                Parent
                            </a>
                        </li>
                        <li><a>Item </a></li>
                    </ul>
                </div>
                <div class="navbar-start hidden text-xl lg:flex">
                    <ul class="menu text-white menu-horizontal p-0">
                        <li><Link to=''>Item </Link></li>
                        <li tabIndex="0">
                            <Link to='/dashboard'>
                                Dashboard
                            </Link>
                        </li>
                        <li><Link to=''>Item </Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <Link to='/' class="btn navbar-center btn-ghost normal-case text-2xl">Galvanistry</Link>
            </div>
            <div class="navbar-end  mr-5">
                <Link className='btn btn-neutral' to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;