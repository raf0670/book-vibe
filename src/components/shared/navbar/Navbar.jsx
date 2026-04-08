import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = (
        <>
            <li><NavLink to={"/"} className={({ isActive }) => `font-semibold ${isActive ? "text-green-500 border border-green-500" : ""}`}>Home</NavLink></li>
            <li><NavLink to={"/books"} className={({ isActive }) => `font-semibold ${isActive ? "text-green-500 border border-green-500" : ""}`}>Listed Books</NavLink></li>
            <li><NavLink to={"/page-to-read"} className={({ isActive }) => `font-semibold ${isActive ? "text-green-500 border border-green-500" : ""}`}>Page to Read</NavLink></li>
        </>
    );

    return (
        <div className="bg-base-200 shadow-sm w-full rounded-md">
            <div className='max-lg:collapse sm:w-11/12 mx-auto'>
                <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
                <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
                <div className="collapse-title navbar">
                    <div className="navbar-start">
                        <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <h2 className="font-bold text-xl">Book Vibe</h2>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="space-x-2 menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-2 flex-wrap">
                        <button class="btn btn-success min-w-24 text-white">Sign In</button>
                        <button className="btn btn-accent min-w-24 text-white">Sign Up</button>
                    </div>
                </div>

                <div className="collapse-content lg:hidden z-1">
                    <ul className="menu space-y-2">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;