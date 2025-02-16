import React, { useState } from "react";

const patentsData = [
  { id: "P-001", name: "AI Medical Diagnosis", hospital: "Apollo Hospital", status: "Approved", date: "2024-06-15" },
  { id: "P-002", name: "Smart Prosthetics", hospital: "Fortis Health", status: "Pending", date: "2024-07-01" },
  { id: "P-003", name: "Telemedicine System", hospital: "Medanta", status: "Rejected", date: "2024-05-22" },
  { id: "P-004", name: "Cancer Detection AI", hospital: "Max Healthcare", status: "Approved", date: "2024-04-10" },
];

const PatentList: React.FC = () => {
  const [search, setSearch] = useState("");

  // Filtered list based on search input
  const filteredPatents = patentsData.filter((patent) =>
    patent.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Patent List</h2>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search patents..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Patent Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-4 text-left">Patent ID</th>
                <th className="p-4 text-left">Patent Name</th>
                <th className="p-4 text-left">Hospital</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatents.map((patent) => (
                <tr key={patent.id} className="border-b hover:bg-gray-100 transition">
                  <td className="p-4">{patent.id}</td>
                  <td className="p-4 font-semibold">{patent.name}</td>
                  <td className="p-4">{patent.hospital}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-sm font-semibold rounded-full ${
                        patent.status === "Approved"
                          ? "bg-green-200 text-green-800"
                          : patent.status === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {patent.status}
                    </span>
                  </td>
                  <td className="p-4">{patent.date}</td>
                  <td className="p-4">
                    <button className="text-blue-700 hover:underline mr-4">View</button>
                    <button className="text-red-700 hover:underline">Download</button>
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

export default PatentList;
