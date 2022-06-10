import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import resume from '../assets/Md-Basirul-Billah_Frontend-Developer_Resume_2.pdf'

const Navbar = () => {
    const navlinks = (
        <>
            <li><Link to='/home#about'>About</Link></li>
            <li><Link to='/home#projects'>Projects</Link></li>
            <li><Link to='/home#contact'>Contact</Link></li>
        </>
    )
    return (
        <div className="navbar bg-base-100 drop-shadow-lg text-neutral lg:fixed z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <Link to='/home' className="btn btn-ghost normal-case text-xl lg:text-3xl text-accent">Basirul Billah</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-bold">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a href={resume} target='_blank' rel="noreferrer" className="btn btn-sm btn-accent text-white lg:btn lg:btn-accent lg:text-white ">Resume</a>
            </div>
        </div>
    );
};

export default Navbar;