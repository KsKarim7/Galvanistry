import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'


const Navbar = () => {
    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }

    // mobile nav
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 60) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    // close menu on click 
    const closeMenu = () => setClick(false)
    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <nav className='navbar'>
                {/* <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a> */}
                <h1 className='text-2xl text-white'>Galvanistry</h1>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Demo</a>
                    </li>
                </ul>
            </nav>
            {/* <div className="navbar-start">
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
                <Link to='/' className=" navbar-center btn btn-neutral text-indigo-200 btn-ghost normal-case text-4xl font-semibold">Galvanistry</Link>
            </div>
            <div className="navbar-end  mr-5">
                <Link className='text-neutral mr-4 font-bold uppercase' to='/portfolio'><span className='text-indigo-200 ml-2' > {user?.displayName}</span></Link>

                {
                    user ? <button onClick={logOut} className='btn btn-neutral'>Log Out<FontAwesomeIcon className='text-2xl pb-2 pl-1' icon={faUser}></FontAwesomeIcon></button> : <Link className='btn btn-neutral' to='/login'>Login</Link>
                }
            </div> */}
        </div>
    );
};

export default Navbar;