import React from 'react';
import {
    FaChartLine,
    FaUsers,
    FaShoppingCart,
    FaTachometerAlt,
} from 'react-icons/fa';

const Chat: React.FC = () => {
    return (
        <div className="p-8 bg-gray-100 min-h-screen"> {/* Darker background */}
            <div className="bg-white rounded-lg shadow-xl p-8">
                {/* Metrics Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 mt-5">
                    {/* Total Traffic Card */}
                    <div className="bg-blue-600 p-6 rounded-lg shadow-md transition duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="flex items-center mb-4">
                            <FaChartLine className="text-white text-3xl mr-3" />
                            <h2 className="text-xl font-semibold text-white">Total Traffic</h2>
                        </div>
                        <p className="text-3xl font-bold text-white mb-2">350,897</p>
                        <div className="flex items-center text-white opacity-90">
                            <span className="mr-2">↑ 3.48%</span>
                            <span className="text-sm">Since last month</span>
                        </div>
                    </div>

                    {/* New Users Card */}
                    <div className="bg-purple-700 p-6 rounded-lg shadow-md transition duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="flex items-center mb-4">
                            <FaUsers className="text-white text-3xl mr-3" />
                            <h2 className="text-xl font-semibold text-white">New Users</h2>
                        </div>
                        <p className="text-3xl font-bold text-white mb-2">2,356</p>
                        <div className="flex items-center text-white opacity-90">
                            <span className="mr-2">↑ 3.48%</span>
                            <span className="text-sm">Since last month</span>
                        </div>
                    </div>

                    {/* Sales Card */}
                    <div className="bg-green-600 p-6 rounded-lg shadow-md transition duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="flex items-center mb-4">
                            <FaShoppingCart className="text-white text-3xl mr-3" />
                            <h2 className="text-xl font-semibold text-white">Sales</h2>
                        </div>
                        <p className="text-3xl font-bold text-white mb-2">924</p>
                        <div className="flex items-center text-white opacity-90">
                            <span className="mr-2">↑ 3.48%</span>
                            <span className="text-sm">Since last month</span>
                        </div>
                    </div>

                    {/* Performance Card */}
                    <div className="bg-orange-600 p-6 rounded-lg shadow-md transition duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="flex items-center mb-4">
                            <FaTachometerAlt className="text-white text-3xl mr-3" />
                            <h2 className="text-xl font-semibold text-white">Performance</h2>
                        </div>
                        <p className="text-3xl font-bold text-white mb-2">49.65%</p>
                        <div className="flex items-center text-white opacity-90">
                            <span className="mr-2">↑ 3.48%</span>
                            <span className="text-sm">Since last month</span>
                        </div>
                    </div>
                </div>

                {/* Overview Section */}
                <div className="bg-gray-200 rounded-lg shadow-md mb-8 p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Overview</h2>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">Sales Value</h3>
                        <div className="flex space-x-4">
                            <button className="text-gray-700 hover:text-gray-900 font-medium">Month</button>
                            <button className="text-gray-700 hover:text-gray-900 font-medium">Week</button>
                        </div>
                    </div>
                    {/* Placeholder for Chart */}
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="h-48 flex items-center justify-center text-gray-500">
                            Chart Placeholder (e.g., Bar Chart or Line Chart)
                        </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-700">
                        <span>Aug</span>
                        <span className="ml-4 font-semibold">$30k</span>
                    </div>
                </div>

                {/* Performance Section */}
                <div className="bg-gray-200 rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Performance</h2>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">Total Orders</h3>
                        <div className="flex space-x-4">
                            <button className="text-gray-700 hover:text-gray-900 font-medium">Month</button>
                            <button className="text-gray-700 hover:text-gray-900 font-medium">Week</button>
                        </div>
                    </div>
                    {/* Placeholder for Chart */}
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="h-48 flex items-center justify-center text-gray-500">
                            Chart Placeholder (e.g., Bar Chart or Line Chart)
                        </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-700">
                        <span className="font-semibold">Total Orders: 30</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
