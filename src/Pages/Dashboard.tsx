import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [isBloodSectionOpen, setIsBloodSectionOpen] = useState(false);
    const [isCheckupSectionOpen, setIsCheckupSectionOpen] = useState(false);
    const [isHealthSupportSectionOpen, setIsHealthSupportSectionOpen] = useState(false);

    const [isMentalHealthOpen, setIsMentalHealthOpen] = useState(false);
    const [isWomenHealthOpen, setIsWomenHealthOpen] = useState(false);
    const [isNutritionOpen, setIsNutritionOpen] = useState(false);

    const handleSignOut = () => {
        const token = localStorage.getItem('authToken');
        const user = localStorage.getItem('authUser');

        if (token || user) {
            localStorage.removeItem('authToken');
            localStorage.removeItem('authUser');
        }
        navigate("/signin");
    };

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-red-600 text-white flex flex-col">
                <div className="text-center py-6 font-bold text-2xl" aria-label="Application Title">
                Care Connect 
                </div>
                <nav className="mt-4 flex-grow" aria-label="Dashboard Navigation">
                    {/* Blood Section */}
                    <div className="mb-4">
                        <div
                            className="flex items-center justify-between px-6 py-2 font-semibold text-lg border-b border-red-500 cursor-pointer"
                            onClick={() => setIsBloodSectionOpen(!isBloodSectionOpen)}
                        >
                            <span>Blood Section</span>
                            <i
                                className={`fa ${isBloodSectionOpen ? 'fa-chevron-down' : 'fa-chevron-right'
                                    } transition-transform duration-300`}
                                aria-hidden="true"
                            ></i>
                        </div>
                        {isBloodSectionOpen && (
                            <div className="mt-2">
                                <button
                                    onClick={() => handleNavigation("/dashboard/registration")}
                                    className="block w-full text-left py-3 px-6 hover:bg-red-500 transition-colors duration-300"
                                    aria-label="New Register"
                                >
                                    New Register
                                </button>
                                <button
                                    onClick={() => handleNavigation("/dashboard/donate")}
                                    className="block w-full text-left py-3 px-6 hover:bg-red-500 transition-colors duration-300"
                                    aria-label="Donate Blood"
                                >
                                    Donate Blood
                                </button>
                                <button
                                    onClick={() => handleNavigation("/dashboard/requests")}
                                    className="block w-full text-left py-3 px-6 hover:bg-red-500 transition-colors duration-300"
                                    aria-label="Blood Requests"
                                >
                                    Blood Requests
                                </button>
                                <button
                                    onClick={() => handleNavigation("/dashboard/donors")}
                                    className="block w-full text-left py-3 px-6 hover:bg-red-500 transition-colors duration-300"
                                    aria-label="Donor List"
                                >
                                    Donor List
                                </button>
                                <button
                                    onClick={() => handleNavigation("/dashboard/events")}
                                    className="block w-full text-left py-3 px-6 hover:bg-red-500 transition-colors duration-300"
                                    aria-label="Events"
                                >
                                    Events
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Home Checkup Section */}
                    <div className="mb-4">
                        <div
                            className="flex items-center justify-between px-6 py-2 font-semibold text-lg border-b border-red-500 cursor-pointer"
                            onClick={() => setIsCheckupSectionOpen(!isCheckupSectionOpen)}
                        >
                            <span>Home Checkup</span>
                            <i
                                className={`fa ${isCheckupSectionOpen ? 'fa-chevron-down' : 'fa-chevron-right'
                                    } transition-transform duration-300`}
                                aria-hidden="true"
                            ></i>
                        </div>
                        {isCheckupSectionOpen && (
                            <div className="mt-2">
                                <button
                                    onClick={() => handleNavigation("/dashboard/schedule-checkup")}
                                    className="block w-full text-left py-3 px-6 hover:bg-red-500 transition-colors duration-300"
                                    aria-label="Schedule Checkup"
                                >
                                    Schedule Checkup
                                </button>
                                <button
                                    onClick={() => handleNavigation("/dashboard/view-results")}
                                    className="block w-full text-left py-3 px-6 hover:bg-red-500 transition-colors duration-300"
                                    aria-label="View Results"
                                >
                                    View Results
                                </button>
                                <button
                                    onClick={() => handleNavigation("/dashboard/request-services")}
                                    className="block w-full text-left py-3 px-6 hover:bg-red-500 transition-colors duration-300"
                                    aria-label="Request Services"
                                >
                                    Request Services
                                </button>
                                <button
                                    onClick={() => handleNavigation("/dashboard/consultation")}
                                    className="block w-full text-left py-3 px-6 hover:bg-red-500 transition-colors duration-300"
                                    aria-label="Consultation"
                                >
                                    Consultation
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Mental Health Support */}
                    <div className="mb-4">
                        <div
                            className="flex items-center justify-between px-6 py-2 font-semibold text-lg border-b border-red-500 cursor-pointer"
                            onClick={() => setIsMentalHealthOpen(!isMentalHealthOpen)}
                        >
                            <span>Mental Health Support</span>
                            <i
                                className={`fa ${isMentalHealthOpen ? 'fa-chevron-down' : 'fa-chevron-right'
                                    }`}
                                aria-hidden="true"
                            ></i>
                        </div>
                        {isMentalHealthOpen && (
                            <div className="ml-6 mt-2">
                                <button
                                    onClick={() => handleNavigation("/dashboard/therapy-sessions")}
                                    className="block w-full text-left py-3 px-6 hover:bg-red-500 transition-colors duration-300"
                                    aria-label="Therapy Sessions"
                                >
                                    Therapy Sessions
                                </button>
                                <button
                                    onClick={() => handleNavigation("/dashboard/counseling")}
                                    className="block w-full text-left py-3 px-6 hover:bg-red-500 transition-colors duration-300"
                                    aria-label="Counseling"
                                >
                                    Counseling
                                </button>
                                <button
                                    onClick={() => handleNavigation("/dashboard/stress-management")}
                                    className="block w-full text-left py-3 px-6 hover:bg-red-500 transition-colors duration-300"
                                    aria-label="Stress Management"
                                >
                                    Stress Management
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Women Health */}
                    <div className="mb-4">
                        <div
                            className="flex items-center justify-between px-6 py-2 font-semibold text-lg border-b border-red-500 cursor-pointer"
                            onClick={() => setIsWomenHealthOpen(!isWomenHealthOpen)}
                        >
                            <span>Women Health</span>
                            <i
                                className={`fa ${isWomenHealthOpen ? 'fa-chevron-down' : 'fa-chevron-right'
                                    }`}
                                aria-hidden="true"
                            ></i>
                        </div>
                        {isWomenHealthOpen && (
                            <div className="ml-6 mt-2">
                                <button
                                    onClick={() => handleNavigation("/dashboard/prenatal-care")}
                                    className="block w-full text-left py-3 px-6 hover:bg-red-500 transition-colors duration-300"
                                    aria-label="Prenatal Care"
                                >
                                    Prenatal Care
                                </button>
                                <button
                                    onClick={() => handleNavigation("/dashboard/menopause-support")}
                                    className="block w-full text-left py-3 px-6 hover:bg-red-500 transition-colors duration-300"
                                    aria-label="Menopause Support"
                                >
                                    Menopause Support
                                </button>
                                <button
                                    onClick={() => handleNavigation("/dashboard/gynecology")}
                                    className="block w-full text-left py-3 px-6 hover:bg-red-500 transition-colors duration-300"
                                    aria-label="Gynecology"
                                >
                                    Gynecology
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Nutrition */}
                    <div className="mb-4">
                        <div
                            className="flex items-center justify-between px-6 py-2 font-semibold text-lg border-b border-red-500 cursor-pointer"
                            onClick={() => setIsNutritionOpen(!isNutritionOpen)}
                        >
                            <span>Nutrition</span>
                            <i
                                className={`fa ${isNutritionOpen ? 'fa-chevron-down' : 'fa-chevron-right'
                                    }`}
                                aria-hidden="true"
                            ></i>
                        </div>
                        {isNutritionOpen && (
                            <div className="ml-6 mt-2">
                                <button
                                    onClick={() => handleNavigation("/dashboard/diet-plans")}
                                    className="block w-full text-left py-3 px-6 hover:bg-red-500 transition-colors duration-300"
                                    aria-label="Diet Plans"
                                >
                                    Diet Plans
                                </button>
                                <button
                                    onClick={() => handleNavigation("/dashboard/nutrition-guidance")}
                                    className="block w-full text-left py-3 px-6 hover:bg-red-500 transition-colors duration-300"
                                    aria-label="Nutrition Guidance"
                                >
                                    Nutrition Guidance
                                </button>
                                <button
                                    onClick={() => handleNavigation("/dashboard/supplements")}
                                    className="block w-full text-left py-3 px-6 hover:bg-red-500 transition-colors duration-300"
                                    aria-label="Supplements"
                                >
                                    Supplements
                                </button>
                            </div>
                        )}
                    </div>

                </nav>
                <div className="mt-auto p-4">
                    <button
                        onClick={handleSignOut}
                        className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
                        aria-label="Sign Out"
                    >
                        Sign Out
                    </button>
                </div>
            </div>

            {/* Main content area */}
            <div className="flex-1 p-6 bg-white overflow-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
