import React from "react";

const reports = [
  { id: "MR-001", patient: "John Doe", age: 34, gender: "Male", doctor: "Dr. Smith", diagnosis: "Hypertension", prescription: "Blood Pressure Medication", testResults: "Normal", status: "Completed" },
  { id: "MR-002", patient: "Sarah Johnson", age: 29, gender: "Female", doctor: "Dr. Brown", diagnosis: "Anemia", prescription: "Iron Supplements", testResults: "Low Hemoglobin", status: "Pending" },
  { id: "MR-003", patient: "Michael Lee", age: 41, gender: "Male", doctor: "Dr. Patel", diagnosis: "Diabetes", prescription: "Insulin Therapy", testResults: "High Sugar Level", status: "Follow-up Required" },
];

const MedicalReportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Medical Reports</h2>

        {/* Medical Report Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-4 text-left">Report ID</th>
                <th className="p-4 text-left">Patient Name</th>
                <th className="p-4 text-left">Age</th>
                <th className="p-4 text-left">Gender</th>
                <th className="p-4 text-left">Doctor</th>
                <th className="p-4 text-left">Diagnosis</th>
                <th className="p-4 text-left">Prescription</th>
                <th className="p-4 text-left">Test Results</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b hover:bg-gray-100 transition">
                  <td className="p-4">{report.id}</td>
                  <td className="p-4 font-semibold">{report.patient}</td>
                  <td className="p-4">{report.age}</td>
                  <td className="p-4">{report.gender}</td>
                  <td className="p-4">{report.doctor}</td>
                  <td className="p-4">{report.diagnosis}</td>
                  <td className="p-4">{report.prescription}</td>
                  <td className="p-4">{report.testResults}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-sm font-semibold rounded-full ${
                        report.status === "Completed"
                          ? "bg-green-200 text-green-800"
                          : report.status === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {report.status}
                    </span>
                  </td>
                  <td className="p-4 flex gap-2">
                    <button
                      onClick={() => alert(`Downloading report for ${report.patient}...`)}
                      className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition"
                    >
                      Download
                    </button>
                    <button
                      onClick={() => alert(`Printing report for ${report.patient}...`)}
                      className="bg-gray-600 text-white px-3 py-1 rounded-lg hover:bg-gray-700 transition"
                    >
                      Print
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

export default MedicalReportPage;
