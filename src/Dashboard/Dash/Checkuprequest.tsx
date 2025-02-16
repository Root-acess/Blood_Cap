import React, { useState } from "react";

const initialRequests = [
  { id: "REQ-001", patient: "John Doe", hospital: "Apollo Hospital", date: "2024-07-10", status: "Pending" },
  { id: "REQ-002", patient: "Sarah Smith", hospital: "Fortis Health", date: "2024-07-12", status: "Pending" },
  { id: "REQ-003", patient: "Michael Lee", hospital: "Medanta", date: "2024-07-15", status: "Pending" },
];

const CheckupRequests: React.FC = () => {
  const [requests, setRequests] = useState(initialRequests);

  // Handle action on requests
  const updateStatus = (id: string, newStatus: string) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) => (req.id === id ? { ...req, status: newStatus } : req))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Checkup Requests</h2>

        {/* Checkup Requests Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-4 text-left">Request ID</th>
                <th className="p-4 text-left">Patient Name</th>
                <th className="p-4 text-left">Hospital</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req.id} className="border-b hover:bg-gray-100 transition">
                  <td className="p-4">{req.id}</td>
                  <td className="p-4 font-semibold">{req.patient}</td>
                  <td className="p-4">{req.hospital}</td>
                  <td className="p-4">{req.date}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-sm font-semibold rounded-full ${
                        req.status === "Approved"
                          ? "bg-green-200 text-green-800"
                          : req.status === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {req.status}
                    </span>
                  </td>
                  <td className="p-4 flex gap-2">
                    <button
                      onClick={() => updateStatus(req.id, "Approved")}
                      className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => updateStatus(req.id, "Rejected")}
                      className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => alert(`Rescheduling request ${req.id}...`)}
                      className="bg-yellow-600 text-white px-3 py-1 rounded-lg hover:bg-yellow-700 transition"
                    >
                      Reschedule
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CheckupRequests;
