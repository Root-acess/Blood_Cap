import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase'; // Import Firestore
import { collection, addDoc } from 'firebase/firestore';

const Registration: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [bloodType, setBloodType] = useState<string>('');
    const [location, setLocation] = useState<string>(''); // New state for location
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    // Function to get user's location
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
                },
                (error) => {
                    console.error("Error obtaining location: ", error);
                    setError('Unable to retrieve your location.');
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Add user data to Firestore
            await addDoc(collection(db, 'BloodRequest'), {
                name,
                email,
                phone,
                bloodType,
                location, // Include location in Firestore document
            });

            // Redirect or show success message
            console.log('Registration successful');
            navigate('dashboard/thank-you'); // Navigate to a thank you page or dashboard
        } catch (error) {
            setError('An error occurred while registering. Please try again.');
            console.error('Registration error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-900 dark:border-neutral-700 w-full max-w-md mx-4 bg-transparent">
                <div className="p-6">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Request For Blood</h1>
                        {error && <p className="text-xs text-red-600 mt-2">{error}</p>}
                    </div>

                    <form onSubmit={handleSubmit} className="mt-5">
                        <div className="grid gap-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm mb-2 dark:text-white">Full Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600" 
                                    required 
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600" 
                                    required 
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm mb-2 dark:text-white">Phone Number</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    value={phone} 
                                    onChange={(e) => setPhone(e.target.value)} 
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600" 
                                    required 
                                />
                            </div>

                            <div>
                                <label htmlFor="bloodType" className="block text-sm mb-2 dark:text-white">Blood Type</label>
                                <select 
                                    id="bloodType" 
                                    value={bloodType} 
                                    onChange={(e) => setBloodType(e.target.value)} 
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600" 
                                    required
                                >
                                    <option value="">Select Blood Type</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="location" className="block text-sm mb-2 dark:text-white">Location</label>
                                <input 
                                    type="text" 
                                    id="location" 
                                    value={location} 
                                    onChange={(e) => setLocation(e.target.value)} 
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600" 
                                    placeholder="Auto-detected location" 
                                    readOnly // Make this read-only since it will be auto-filled
                                />
                                <button 
                                    type="button" 
                                    onClick={getLocation} 
                                    className="mt-2 w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    Get Location
                                </button>
                            </div>

                            <div>
                                <button 
                                    type="submit" 
                                    className={`w-full py-3 px-4 flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 ${loading ? 'bg-gray-400' : 'bg-blue-600 text-white'} shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700`} 
                                    disabled={loading}
                                >
                                    {loading ? 'Registering...' : 'Register'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
