import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    // Sign out function to handle user sign out
    const handleSignOut = () => {
        console.log("Attempting to sign out...");

        // Clear local storage or context
        const token = localStorage.getItem('authToken');
        const user = localStorage.getItem('authUser');

        if (token || user) {
            localStorage.removeItem('authToken');
            localStorage.removeItem('authUser');
            console.log("User signed out successfully.");
        } else {
            console.log("No user was signed in.");
        }

        navigate("/signin"); // Navigate to the sign-in page
    };

    // Function to handle navigation to different dashboard sections
    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Static Sidebar */}
            <div className="w-64 bg-red-600 text-white flex flex-col">
                <div className="text-center py-6 font-bold text-2xl" aria-label="Application Title">
                    Blood Cap
                </div>
                <nav className="mt-4 flex-grow" aria-label="Dashboard Navigation">
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

            {/* Main content area - changes dynamically */}
            <div className="flex-1 p-6 bg-white overflow-auto">
                <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard!</h1>
                {/* This Outlet will render the content of nested routes (DonorList, NewRegister, etc.) */}
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
