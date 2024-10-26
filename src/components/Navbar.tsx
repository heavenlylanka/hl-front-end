"use client"; // Add this line at the top
import React, { useState, useEffect } from 'react';
import { IoCallOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa"; // Import user icon
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For user dropdown menu
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check if the user is logged in by looking for the 'token' in localStorage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
        }
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown visibility
    };

    const handleLogoutClick = () => {
        setShowLogoutModal(true); // Show the logout confirmation modal
        setIsDropdownOpen(false); // Close the dropdown when logout is clicked
    };

    const confirmLogout = () => {
        localStorage.removeItem('token'); // Remove the token from localStorage
        setIsLoggedIn(false); // Update the state to reflect the user is logged out
        setShowLogoutModal(false); // Close the modal
        window.location.href = '/'; // Redirect to homepage or login page
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full fixed top-0 left-0 z-50">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="http://localhost:3000/" legacyBehavior>
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="http://localhost:3000/Logo.svg" className="h-8" alt="Heavenly Logo" />
                    </a>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="flex items-center text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                        Call Us
                        <IoCallOutline className="ml-2" />
                    </button>

                    {isLoggedIn && (
                        <div className="relative ml-4">
                            {/* User Icon for dropdown */}
                            <button
                                onClick={toggleDropdown}
                                type="button"
                                className="flex items-center text-gray-900 dark:text-white focus:outline-none px-2"
                            >
                                <FaUserCircle className="w-8 h-8" />
                            </button>

                            {/* Dropdown menu */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                    <Link href="/profile" legacyBehavior>
                                        <a
                                            onClick={() => setIsDropdownOpen(false)} // Close dropdown when navigating
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                        >
                                            Profile
                                        </a>
                                    </Link>
                                    <button
                                        onClick={handleLogoutClick}
                                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    <button
                        onClick={toggleMenu}
                        data-collapse-toggle="navbar-cta"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-cta"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/" legacyBehavior>
                                <a
                                    className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </Link>
                        </li>
                        {/* Other menu items */}
                        <li>
                            <Link href="/tours" legacyBehavior>
                                <a className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Our Tours
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" legacyBehavior>
                                <a className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Destinations
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" legacyBehavior>
                                <a className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Things To Know
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" legacyBehavior>
                                <a className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    About Us
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" legacyBehavior>
                                <a className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Contact Us
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Logout confirmation modal */}
            {showLogoutModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold mb-4">Are you sure you want to logout?</h2>
                        <div className="flex space-x-4">
                            <button
                                onClick={confirmLogout}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
                            >
                                Yes, Logout
                            </button>
                            <button
                                onClick={() => setShowLogoutModal(false)}
                                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 focus:outline-none"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
