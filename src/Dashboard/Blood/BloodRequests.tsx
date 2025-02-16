import React from 'react';

// Define the type for blood requests
interface BloodRequest {
    id: string; // Firestore uses string IDs or for dummy, we'll use string-based IDs
    bloodType: string;
    location: string;
    urgency: string;
}

const BloodRequests: React.FC = () => {
    // Dummy data for blood requests with cities from Odisha
    const requests: BloodRequest[] = [
        { id: '1', bloodType: 'O+', location: 'Baripada, Odisha', urgency: 'High' },
        { id: '2', bloodType: 'A-', location: 'Baleswar, Odisha', urgency: 'Medium' },
        { id: '3', bloodType: 'B+', location: 'Bhubaneswar, Odisha', urgency: 'Low' },
        { id: '4', bloodType: 'AB-', location: 'Cuttack, Odisha', urgency: 'High' },
        { id: '5', bloodType: 'O-', location: 'Rourkela, Odisha', urgency: 'Medium' },
        { id: '6', bloodType: 'A+', location: 'Puri, Odisha', urgency: 'Low' },
        { id: '7', bloodType: 'B-', location: 'Sambalpur, Odisha', urgency: 'High' },
        { id: '8', bloodType: 'AB+', location: 'Jharsuguda, Odisha', urgency: 'Low' },
        { id: '9', bloodType: 'O-', location: 'Angul, Odisha', urgency: 'High' },
    ];

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Requests For Blood</h2>

            {/* Display blood requests in a table */}
            <div className="overflow-x-auto">
                <table className="table-auto w-full text-left border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2">Blood Type</th>
                            <th className="border px-4 py-2">Location</th>
                            <th className="border px-4 py-2">Urgency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request) => (
                            <tr key={request.id} className="bg-white">
                                <td className="border px-4 py-2">{request.bloodType}</td>
                                <td className="border px-4 py-2">{request.location}</td>
                                <td
                                    className={`border px-4 py-2 font-semibold ${
                                        request.urgency === 'High'
                                            ? 'text-red-600'
                                            : request.urgency === 'Medium'
                                            ? 'text-yellow-600'
                                            : 'text-green-600'
                                    }`}
                                >
                                    {request.urgency}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BloodRequests;
