import React, { useState } from 'react';
import { useNavigate, Outlet, NavLink, useLocation } from 'react-router-dom';
import {
    FaRegUser,
    FaRegCalendarAlt,
    FaClipboardList,
    FaBars,
    FaTimes,
    FaSearch,
    FaUserCircle,
    FaCog,
    FaSignOutAlt,
    FaBell,
    FaComments,
    FaUserMd,
    FaStethoscope,
    FaFileMedical,
} from 'react-icons/fa';
import ProfilePicture from '../assets/team-2-800x800.jpg';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation().pathname;
    const [showSidebar, setShowSidebar] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const handleSignOut = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
        navigate('/signin');
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-blue-700 text-white transform ${showSidebar ? 'translate-x-0' : '-translate-x-64'} transition-transform duration-300 md:translate-x-0 flex flex-col z-50`}>
                {/* Close Button for Mobile */}
                <button
                    className="md:hidden absolute top-4 right-4 text-white text-2xl focus:outline-none"
                    onClick={() => setShowSidebar(false)}
                >
                    <FaTimes />
                </button>
                <div className="text-center py-6 font-bold text-2xl">Care Connect</div>
                <nav className="flex-grow overflow-y-auto">
                    <div className="mb-4">
                        <div className="mt-2 space-y-1">
                            <NavLink to="/dashboard/home" className="block px-6 py-3 hover:bg-blue-600 flex items-center">
                                <FaRegUser className="mr-2" />
                                Dashboard
                            </NavLink>
                            <NavLink to="/dashboard/patient-list" className="block px-6 py-3 hover:bg-blue-600 flex items-center">
                                <FaClipboardList className="mr-2" />
                                Patient List
                            </NavLink>
                            <NavLink to="/dashboard/checkup-request" className="block px-6 py-3 hover:bg-blue-600 flex items-center">
                                <FaRegCalendarAlt className="mr-2" />
                                Checkup Request
                            </NavLink>
                            <NavLink to="/dashboard/appointment-list" className="block px-6 py-3 hover:bg-blue-600 flex items-center">
                                <FaClipboardList className="mr-2" />
                                Appointment List
                            </NavLink>
                            <NavLink to="/dashboard/medical-records" className="block px-6 py-3 hover:bg-blue-600 flex items-center">
                                <FaFileMedical className="mr-2" />
                                Medical Records
                            </NavLink>
                            <NavLink to="/dashboard/doctors" className="block px-6 py-3 hover:bg-blue-600 flex items-center">
                                <FaUserMd className="mr-2" />
                                Doctors
                            </NavLink>
                            <NavLink to="/dashboard/services" className="block px-6 py-3 hover:bg-blue-600 flex items-center">
                                <FaStethoscope className="mr-2" />
                                Services
                            </NavLink>
                        </div>
                    </div>
                </nav>
                <div className="mt-auto p-4">
                    <button onClick={handleSignOut} className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                        Sign Out
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 ml-0 md:ml-64 transition-all duration-300 flex flex-col h-screen">
                {/* Admin Navbar */}
                <nav className="bg-blue-700 py-4 px-6 shadow-md flex justify-between items-center">
                    <button className="md:hidden p-2 text-white" onClick={() => setShowSidebar(!showSidebar)}>
                        <FaBars className="text-2xl" />
                    </button>
                    <div className="flex items-center space-x-4">
                        <div className="bg-white p-2 rounded-md flex items-center space-x-2">
                            <i className="fas fa-home text-blue-600"></i>
                            <span className="text-blue-600">{`/ ${location.split('/').filter(Boolean).join(' / ')}`}</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 md:space-x-6">
                        {/* Search Bar for Desktop & Button for Mobile */}
                        <div className="relative">
                            <button className="md:hidden text-white text-xl p-2" onClick={() => setShowSearch(!showSearch)}>
                                <FaSearch />
                            </button>
                            {showSearch && (
                                <div className="absolute top-10 right-0 bg-white p-2 rounded-lg shadow-lg">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-4 pr-2 py-1 rounded-lg border border-gray-300 focus:outline-none"
                                    />
                                </div>
                            )}
                            <div className="hidden md:block relative w-48 md:w-64">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-blue-600 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <FaSearch className="absolute left-3 top-3 text-white" />
                            </div>
                        </div>
                        {/* Notification & Chat */}
                        <button className="text-white text-xl p-2">
                            <FaBell />
                        </button>
                        <button className="text-white text-xl p-2">
                            <FaComments />
                        </button>
                        {/* User Dropdown */}
                        <div className="relative">
                            <button className="w-10 h-10 rounded-full focus:outline-none" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                <img src={ProfilePicture} alt="Profile" className="w-full h-full object-cover rounded-full" />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                                    <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100">
                                        <FaUserCircle className="mr-2" />
                                        Profile
                                    </button>
                                    <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100">
                                        <FaCog className="mr-2" />
                                        Settings
                                    </button>
                                    <button onClick={handleSignOut} className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100">
                                        <FaSignOutAlt className="mr-2" />
                                        Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>

                {/* Fixed Content Wrapper */}
                <div className="flex-1 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
export default Dashboard;