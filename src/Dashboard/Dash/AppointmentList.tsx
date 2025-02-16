import React, { useState } from "react";

const initialAppointments = [
  { id: "APT-001", patient: "John Doe", doctor: "Dr. Smith", hospital: "Apollo", date: "2024-07-10", time: "10:00 AM", status: "Pending" },
  { id: "APT-002", patient: "Sarah Johnson", doctor: "Dr. Brown", hospital: "Fortis", date: "2024-07-12", time: "2:30 PM", status: "Pending" },
  { id: "APT-003", patient: "Michael Lee", doctor: "Dr. Patel", hospital: "Medanta", date: "2024-07-15", time: "4:00 PM", status: "Pending" },
];

const AppointmentList: React.FC = () => {
  const [appointments, setAppointments] = useState(initialAppointments);

  // Handle action on appointments
  const updateStatus = (id: string, newStatus: string) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((apt) => (apt.id === id ? { ...apt, status: newStatus } : apt))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Appointment List</h2>

        {/* Appointment Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-4 text-left">Appointment ID</th>
                <th className="p-4 text-left">Patient Name</th>
                <th className="p-4 text-left">Doctor</th>
                <th className="p-4 text-left">Hospital</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Time</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((apt) => (
                <tr key={apt.id} className="border-b hover:bg-gray-100 transition">
                  <td className="p-4">{apt.id}</td>
                  <td className="p-4 font-semibold">{apt.patient}</td>
                  <td className="p-4">{apt.doctor}</td>
                  <td className="p-4">{apt.hospital}</td>
                  <td className="p-4">{apt.date}</td>
                  <td className="p-4">{apt.time}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-sm font-semibold rounded-full ${
                        apt.status === "Confirmed"
                          ? "bg-green-200 text-green-800"
                          : apt.status === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {apt.status}
                    </span>
                  </td>
                  <td className="p-4 flex gap-2">
                    <button
                      onClick={() => updateStatus(apt.id, "Confirmed")}
                      className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(apt.id, "Cancelled")}
                      className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => alert(`Rescheduling appointment ${apt.id}...`)}
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

export default AppointmentList;
