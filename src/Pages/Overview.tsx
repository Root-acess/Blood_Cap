import React from 'react';

const Overview: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-100 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-red-600">Total Donations</h3>
                <p className="mt-2 text-4xl font-bold">245</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-green-600">Donors Available</h3>
                <p className="mt-2 text-4xl font-bold">58</p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-yellow-600">Pending Requests</h3>
                <p className="mt-2 text-4xl font-bold">12</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-600">Urgent Requests</h3>
                <p className="mt-2 text-4xl font-bold">4</p>
            </div>
        </div>
    );
};

export default Overview;
