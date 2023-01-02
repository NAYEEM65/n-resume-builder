/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';
const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-center md:justify-between">
                    <div className="flex items-center sm:hidden">
                        <Hamburger toggled={isOpen} color="#4FD1C5" toggle={setOpen} />
                    </div>
                    <div className="flex flex-1 items-center sm:justify-around">
                        <div className="flex flex-shrink-0 items-center">
                            <NavLink to="/" className="font-semibold text-white md:text-xl text-lg">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
                                    N-Res
                                </span>
                                ume Builder
                            </NavLink>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    aria-current="page"
                                >
                                    Dashboard
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Team
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Projects
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Calendar
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="flex justify-center">
                            <div className="dropdown relative">
                                <a
                                    className="dropdown-toggle h-12 w-12 rounded-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out  flex items-center whitespace-nowrap "
                                    href="#"
                                    type="button"
                                    id="dropdownMenuButton2"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    User
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="caret-down"
                                        className="w-2 ml-2"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                        ></path>
                                    </svg>
                                </a>
                                <ul
                                    className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1
         m-0 bg-clip-padding  border-none"
                                    aria-labelledby="dropdownMenuButton2"
                                >
                                    <li>
                                        <Link
                                            to="/"
                                            className=" dropdown-item  text-sm py-2  px-4 font-normal block whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                        >
                                            Your Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className=" dropdown-item  text-sm py-2  px-4 font-normal block whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                        >
                                            settings
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className=" dropdown-item  text-sm py-2  px-4 font-normal block whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                        >
                                            SignOut
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        <a
                            href="#"
                            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                            aria-current="page"
                        >
                            Dashboard
                        </a>

                        <a
                            href="#"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Team
                        </a>

                        <a
                            href="#"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Projects
                        </a>

                        <a
                            href="#"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Calendar
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;