import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Adjust the path as necessary
import { collection, getDocs } from 'firebase/firestore';

interface Donor {
    id: string;
    bloodType: string;
    location: string;
    age: number;
    name: string; // Assuming you will also have a name field in the database
}

const DonorList: React.FC = () => {
    const [donors, setDonors] = useState<Donor[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDonors = async () => {
            try {
                const donorsCollection = collection(db, 'donations');
                const donorSnapshot = await getDocs(donorsCollection);
                const donorList = donorSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Donor[];

                setDonors(donorList);
            } catch (err) {
                console.error("Error fetching donors:", err);
                setError("Error fetching donors.");
            } finally {
                setLoading(false);
            }
        };

        fetchDonors();
    }, []);

    if (loading) {
        return <p>Loading donors...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="p-4 bg-white">
            <h1 className="text-2xl font-bold mb-4">Donor List</h1>
            {donors.length > 0 ? (
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">Name</th>
                            <th className="border border-gray-300 p-2">Blood Group</th>
                            <th className="border border-gray-300 p-2">Location</th>
                            <th className="border border-gray-300 p-2">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donors.map(donor => (
                            <tr key={donor.id}>
                                <td className="border border-gray-300 p-2">{donor.name}</td>
                                <td className="border border-gray-300 p-2">{donor.bloodType}</td>
                                <td className="border border-gray-300 p-2">{donor.location}</td>
                                <td className="border border-gray-300 p-2">{donor.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No donors available.</p>
            )}
        </div>
    );
};

export default DonorList;
