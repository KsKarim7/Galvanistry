import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }

    return (
        <div class="navbar  bg-primary">
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
                        <li><Link to='/portfolio'>Portfolio</Link></li>
                        {
                            user && <li tabIndex="0">
                                <Link to='/dashboard'>
                                    Dashboard
                                </Link>
                            </li>
                        }
                        <li><Link to='/blogs'>Blogs </Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <Link to='/' class="btn  navbar-center btn-ghost normal-case text-4xl font-bold">Galvanistry</Link>
            </div>
            <div class="navbar-end  mr-5">
                {
                    user ? <button onClick={logOut} className='btn btn-neutral'>Log Out</button> : <Link className='btn btn-neutral' to='/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;