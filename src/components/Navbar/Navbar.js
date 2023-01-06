/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';
import { Notify } from 'notiflix';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split('/');
    const activeClass = (state) => (state.isActive ? `bg-gray-900 text-slate-200` : '');
    const handleLogout = () => {
        axios
            .get('/api/logout')
            .then(() => {
                Notify.success('Successfully logged out.');
                setUser('');
                navigate('/login');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    console.log(user);
    return (
        <nav className="bg-slate-800/70 backdrop-blur ">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-center md:justify-between">
                    <div className="flex flex-1 items-center sm:justify-around">
                        <div className="flex flex-shrink-0 items-center justify-between w-[80%] mx-auto">
                            <NavLink
                                to="/"
                                className="font-semibold text-white md:text-3xl text-xl"
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
                                    N-Res
                                </span>
                                ume Builder
                            </NavLink>
                            <div className="flex items-center sm:hidden">
                                <Hamburger toggled={isOpen} color="#4FD1C5" toggle={setOpen} />
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <NavLink
                                    to="/"
                                    className={` px-3 py-2 rounded-md text-sm font-medium`}
                                    aria-current="page"
                                >
                                    Home
                                </NavLink>

                                <Link
                                    to="/template"
                                    className={`${activeClass} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                                >
                                    Template
                                </Link>
                                <Link
                                    to="/dashboard"
                                    className={`${activeClass} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                                >
                                    Dashboard
                                </Link>
                                {user ? (
                                    <>
                                        {' '}
                                        <NavLink
                                            to="/profile"
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Profile
                                        </NavLink>
                                        <button
                                            onClick={handleLogout}
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <NavLink
                                            to="/login"
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Login
                                        </NavLink>

                                        <NavLink
                                            to="/Register"
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Register
                                        </NavLink>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3 flex flex-col items-center">
                        <NavLink
                            to="/"
                            className={` px-3 py-2 rounded-md text-sm font-medium text-gray-300`}
                            aria-current="page"
                        >
                            Home
                        </NavLink>

                        <Link
                            to="/template"
                            className={`${activeClass} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                        >
                            Template
                        </Link>
                        <Link
                            to="/dashboard"
                            className={`${activeClass} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                        >
                            Dashboard
                        </Link>
                        {user ? (
                            <>
                                {' '}
                                <NavLink
                                    to="/profile"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Profile
                                </NavLink>
                                <button
                                    onClick={handleLogout}
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    to="/login"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Login
                                </NavLink>

                                <NavLink
                                    to="/Register"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Register
                                </NavLink>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
