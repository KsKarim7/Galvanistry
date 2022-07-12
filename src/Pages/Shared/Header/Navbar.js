import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Navbar.css'


const Navbar = () => {
    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }

    return (
        <div>
            <div className='nav bg-neutral text-white'>
                <div className='bar'>
                    <p className='word uppercase'>Black Friday final hours 20% OFF going on ONLINE & IN-STORE <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
                    <button className='bg-primary  nav-btn ml-12'>Avail Offer</button>
                </div>
                <div><p><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>  galv.int@support.com</p></div>
            </div>
            <div className='navbar  bg-primary ' style={{ height: '10px' }}>
                <div className="navbar-start">
                    <div className="dropdown ">
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-box w-52">
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
                    <div className="navbar-start hidden text-xl lg:flex">
                        <ul className="menu text-white menu-horizontal p-0">
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
                    <Link to='/' className=" navbar-center btn btn-neutral text-indigo-200 btn-ghost normal-case text-3xl font-semibold">Galvanistry</Link>
                </div>
                <div className="navbar-end   mr-5">

                    {
                        user ? <button onClick={logOut} className='btn  btn-neutral'>Log Out<FontAwesomeIcon className='text-2xl pb-2 pl-1' icon={faUser}></FontAwesomeIcon></button> : <Link className='btn btn-neutral' to='/login'>Login</Link>
                    }
                </div>
            </div >
        </div>
    );
};

export default Navbar;