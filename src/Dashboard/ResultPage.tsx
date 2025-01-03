import React, { useState } from "react";

// Mock Data (Replace with API calls or backend integration)
const mockBookings = [
  {
    id: "12345",
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    reason: "General Check-up",
    date: "2025-01-05",
    time: "10:00 AM",
    doctor: "Dr. Ramesh Das",
    clinic: "Baripada General Clinic",
    status: "Confirmed",
  },
  {
    id: "67890",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "9123456789",
    reason: "Dermatology Consultation",
    date: "2025-01-07",
    time: "6:30 PM",
    doctor: "Dr. Biswajit Panda",
    clinic: "Skin Care Center",
    status: "Pending",
  },
];

const ResultPage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    const booking = mockBookings.find(
      (b) => b.id === query || b.email === query || b.phone === query
    );
    if (booking) {
      setResult(booking);
      setError("");
    } else {
      setResult(null);
      setError("No booking found with the given ID, email, or phone.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Check Your Booking Status
        </h2>
        <div className="mb-6">
          <label
            htmlFor="query"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Enter Booking ID, Email, or Phone Number
          </label>
          <input
            type="text"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="E.g., 12345 or john@example.com"
            className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleSearch}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Search
        </button>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

        {result && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Booking Details
            </h3>
            <p>
              <strong>Booking ID:</strong> {result.id}
            </p>
            <p>
              <strong>Name:</strong> {result.name}
            </p>
            <p>
              <strong>Email:</strong> {result.email}
            </p>
            <p>
              <strong>Phone:</strong> {result.phone}
            </p>
            <p>
              <strong>Reason:</strong> {result.reason}
            </p>
            <p>
              <strong>Date:</strong> {result.date}
            </p>
            <p>
              <strong>Time:</strong> {result.time}
            </p>
            <p>
              <strong>Doctor:</strong> {result.doctor}
            </p>
            <p>
              <strong>Clinic:</strong> {result.clinic}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`${
                  result.status === "Confirmed"
                    ? "text-green-500"
                    : "text-yellow-500"
                } font-semibold`}
              >
                {result.status}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultPage;
