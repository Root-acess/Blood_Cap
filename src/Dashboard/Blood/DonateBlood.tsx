import React, { useState } from 'react';
import { db } from '../../firebase'; // Adjust the path as necessary
import { collection, addDoc } from 'firebase/firestore';

const DonateBlood: React.FC = () => {
    const [bloodType, setBloodType] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [availability, setAvailability] = useState<boolean>(false);
    const [name, setName] = useState<string>(''); // Changed from email to name
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [age, setAge] = useState<number | string>('');
    const [message, setMessage] = useState<string>('');

    const handleDonate = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        try {
            // Reference to the "donations" collection in Firestore
            const donationsCollection = collection(db, 'donations');
            // Add a new document with the donation details
            await addDoc(donationsCollection, {
                bloodType,
                location,
                availability,
                name, // Changed from email to name
                phoneNumber,
                age,
            });

            setMessage('Donation registered successfully!');
            // Reset the form
            setBloodType('');
            setLocation('');
            setAvailability(false);
            setName(''); // Reset name field
            setPhoneNumber('');
            setAge('');
        } catch (error) {
            console.error('Error registering donation:', error);
            setMessage('Error registering donation. Please try again.');
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Register as a Donor</h2>
            <form onSubmit={handleDonate}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input 
                        type="text" 
                        value={name} // Using name instead of email
                        onChange={(e) => setName(e.target.value)} 
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none" 
                        placeholder="Enter your name" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Blood Type</label>
                    <select 
                        value={bloodType} 
                        onChange={(e) => setBloodType(e.target.value)} 
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none">
                        <option value="">Select Blood Type</option>
                        <option value="A+">A+</option>
                        <option value="B+">B+</option>
                        <option value="AB+">AB+</option>
                        <option value="O+">O+</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input 
                        type="text" 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)} 
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none" 
                        placeholder="Enter your city or address" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input 
                        type="tel" 
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none" 
                        placeholder="Enter your phone number" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Age</label>
                    <input 
                        type="number" 
                        value={age} 
                        onChange={(e) => setAge(e.target.value)} 
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none" 
                        placeholder="Enter your age" 
                        min="0" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="inline-flex items-center">
                        <input 
                            type="checkbox" 
                            checked={availability} 
                            onChange={() => setAvailability(!availability)} 
                            className="form-checkbox h-5 w-5 text-red-600" 
                        />
                        <span className="ml-2 text-sm text-gray-700">Available for donation</span>
                    </label>
                </div>
                <button 
                    type="submit" 
                    className="py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700">
                    Register
                </button>
            </form>
            {message && <p className="mt-4 text-gray-600">{message}</p>}
        </div>
    );
};

export default DonateBlood;
