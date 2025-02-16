import { useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch, FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useState } from 'react';
import ProfilePicture from '../assets/team-2-800x800.jpg'; // Ensure this path is correct

interface AdminNavbarProps {
    showSidebar: string;
    setShowSidebar: (value: string) => void; // Explicitly define the type for setShowSidebar
}

export default function AdminNavbar({ showSidebar, setShowSidebar }: AdminNavbarProps) {
    const location = useLocation().pathname;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-blue-700 md:ml-64 py-6 px-3 shadow-md">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                {/* Mobile Sidebar Toggle */}
                <div className="md:hidden">
                    <button
                        className="p-2 text-white focus:outline-none"
                        onClick={() => setShowSidebar('left-0')}
                    >
                        <FaBars className="text-2xl" />
                    </button>
                    <div
                        className={`absolute top-2 md:hidden ${
                            showSidebar === 'left-0' ? 'left-64' : '-left-64'
                        } z-50 transition-all duration-300`}
                    >
                        <button
                            className="p-2 text-white focus:outline-none"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <FaTimes className="text-2xl" />
                        </button>
                    </div>
                </div>

                {/* Page Title and Search Bar */}
                <div className="flex justify-between items-center w-full">
                    <h4 className="uppercase text-white text-sm tracking-wider mt-1">
                        {location === '/'
                            ? 'DASHBOARD'
                            : location.toUpperCase().replace('/', '')}
                    </h4>

                    <div className="flex items-center space-x-6">
                        {/* Search Bar */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-10 pr-4 py-2 rounded-lg bg-blue-600 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <FaSearch className="absolute left-3 top-3 text-white" />
                        </div>

                        {/* User Dropdown */}
                        <div className="relative">
                            <button
                                className="w-10 h-10 rounded-full overflow-hidden focus:outline-none"
                                onClick={toggleDropdown}
                            >
                                <img
                                    src={ProfilePicture}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                                    <div className="py-2">
                                        <button
                                            className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100"
                                            onClick={() => {
                                                // Handle profile action
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            <FaUserCircle className="mr-2" />
                                            Profile
                                        </button>
                                        <button
                                            className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100"
                                            onClick={() => {
                                                // Handle settings action
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            <FaCog className="mr-2" />
                                            Settings
                                        </button>
                                        <button
                                            className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100"
                                            onClick={() => {
                                                // Handle logout action
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            <FaSignOutAlt className="mr-2" />
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}