import React, { useState } from "react";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  photo: string;
  visitingCharge: number;
  isLive: boolean;
}

const DoctorPage: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([
    { id: 1, name: "Dr. John Smith", specialty: "Cardiologist", photo: "https://via.placeholder.com/100", visitingCharge: 500, isLive: false },
    { id: 2, name: "Dr. Sarah Johnson", specialty: "Dermatologist", photo: "https://via.placeholder.com/100", visitingCharge: 400, isLive: true },
  ]);

  const [newDoctor, setNewDoctor] = useState<Doctor>({
    id: Date.now(),
    name: "",
    specialty: "",
    photo: "",
    visitingCharge: 0,
    isLive: false,
  });

  const addDoctor = () => {
    if (!newDoctor.name || !newDoctor.specialty || !newDoctor.visitingCharge) {
      alert("Please fill in all details!");
      return;
    }
    setDoctors([...doctors, { ...newDoctor, id: Date.now() }]);
    setNewDoctor({ id: Date.now(), name: "", specialty: "", photo: "", visitingCharge: 0, isLive: false });
  };

  const toggleLiveStatus = (id: number) => {
    setDoctors(doctors.map(doc => doc.id === id ? { ...doc, isLive: !doc.isLive } : doc));
  };

  const updateDoctor = (id: number, key: keyof Doctor, value: any) => {
    setDoctors(doctors.map(doc => (doc.id === id ? { ...doc, [key]: value } : doc)));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Doctor Management</h2>

        {/* Add Doctor Form */}
        <div className="mb-6 p-4 bg-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Add New Doctor</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Doctor Name"
              className="p-2 border rounded"
              value={newDoctor.name}
              onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Specialty"
              className="p-2 border rounded"
              value={newDoctor.specialty}
              onChange={(e) => setNewDoctor({ ...newDoctor, specialty: e.target.value })}
            />
            <input
              type="number"
              placeholder="Visiting Charge"
              className="p-2 border rounded"
              value={newDoctor.visitingCharge}
              onChange={(e) => setNewDoctor({ ...newDoctor, visitingCharge: Number(e.target.value) })}
            />
          </div>
          <div className="mt-3 flex gap-4">
            <input
              type="text"
              placeholder="Photo URL"
              className="p-2 border rounded w-full"
              value={newDoctor.photo}
              onChange={(e) => setNewDoctor({ ...newDoctor, photo: e.target.value })}
            />
            <button
              onClick={addDoctor}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Add Doctor
            </button>
          </div>
        </div>

        {/* Doctor List Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-4">Photo</th>
                <th className="p-4">Name</th>
                <th className="p-4">Specialty</th>
                <th className="p-4">Visiting Charge</th>
                <th className="p-4">Live Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id} className="border-b hover:bg-gray-100 transition">
                  <td className="p-4">
                    <img src={doctor.photo || "https://via.placeholder.com/100"} alt={doctor.name} className="w-14 h-14 rounded-full" />
                  </td>
                  <td className="p-4 font-semibold">
                    <input
                      type="text"
                      value={doctor.name}
                      onChange={(e) => updateDoctor(doctor.id, "name", e.target.value)}
                      className="border rounded p-1 w-full"
                    />
                  </td>
                  <td className="p-4">
                    <input
                      type="text"
                      value={doctor.specialty}
                      onChange={(e) => updateDoctor(doctor.id, "specialty", e.target.value)}
                      className="border rounded p-1 w-full"
                    />
                  </td>
                  <td className="p-4">
                    <input
                      type="number"
                      value={doctor.visitingCharge}
                      onChange={(e) => updateDoctor(doctor.id, "visitingCharge", Number(e.target.value))}
                      className="border rounded p-1 w-full"
                    />
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => toggleLiveStatus(doctor.id)}
                      className={`px-3 py-1 rounded-lg text-sm ${
                        doctor.isLive ? "bg-green-500 text-white" : "bg-red-500 text-white"
                      }`}
                    >
                      {doctor.isLive ? "Live" : "Not Live"}
                    </button>
                  </td>
                  <td className="p-4 flex gap-2">
                    <button
                      onClick={() => setDoctors(doctors.filter((d) => d.id !== doctor.id))}
                      className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
                    >
                      Remove
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

export default DoctorPage;
