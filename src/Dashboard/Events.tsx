import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons

// Define the type for events
interface Event {
    id: string;
    eventName: string;
    location: string;
    date: string;
    time: string;
}

const BloodDonationEvents: React.FC = () => {
    // Dummy data for blood donation events
    const events: Event[] = [
        { id: '1', eventName: 'Community Blood Drive', location: 'Bhubaneswar', date: '2024-10-01', time: '10:00 AM - 4:00 PM' },
        { id: '2', eventName: 'Blood Donation Camp', location: 'Cuttack', date: '2024-10-05', time: '9:00 AM - 3:00 PM' },
        { id: '3', eventName: 'College Blood Donation Drive', location: 'Rourkela', date: '2024-10-10', time: '11:00 AM - 5:00 PM' },
        { id: '4', eventName: 'Festival Blood Donation', location: 'Puri', date: '2024-10-15', time: '10:00 AM - 2:00 PM' },
        { id: '5', eventName: 'Health Awareness Blood Camp', location: 'Sambalpur', date: '2024-10-20', time: '9:00 AM - 4:00 PM' },
    ];

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-white bg-red-600 p-4 rounded-lg shadow-md">
                Upcoming Blood Donation Events
            </h2>

            {/* Display events in a table */}
            <div className="overflow-x-auto">
                <table className="table-auto w-full text-left border-collapse border border-gray-200">
                    <thead className="bg-red-500 text-white">
                        <tr>
                            <th className="border px-4 py-2">Event Name & Location</th>
                            <th className="border px-4 py-2">Date</th>
                            <th className="border px-4 py-2">Time</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event) => (
                            <tr key={event.id} className="bg-white hover:bg-red-100 transition-colors duration-300">
                                <td className="border px-4 py-2 flex items-center">
                                    <FaCalendarAlt className="mr-2 text-red-600" />
                                    {event.eventName}
                                </td>
                                <td className="border px-4 py-2 flex items-center">
                                    <FaMapMarkerAlt className="mr-2 text-red-600" />
                                    {event.location}
                                </td>
                                <td className="border px-4 py-2">{event.date}</td>
                                <td className="border px-4 py-2">{event.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BloodDonationEvents;
