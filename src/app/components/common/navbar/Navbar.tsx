"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '@/app/assets/image/img.png';
import Link from "next/link";

const Navbar = () => {
    const [user, setUser] = useState<{ name: string } | null>(null);

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">AboutUs</Link></li>
                    </ul>
                </div>

                <Image style={{maxWidth: '15%', height: '20%'}} src={Logo} alt="logo"/>
                <ul className="menu menu-horizontal hidden lg:flex px-1">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/aboutus">AboutUs</Link></li>
                </ul>
            </div>

            <div className="navbar-end mr-12">
                {user ? (
                    <>
                        <span className="mr-4 border border-green-500 rounded-full p-2 font-bold h-12 w-12">{user.name.charAt(0).toUpperCase()}</span>
                        <button className="btn hover:accent-red-600" onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <Link className="" href="/auth/login">Login</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
