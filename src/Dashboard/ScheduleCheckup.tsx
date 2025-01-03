import React, { useState } from "react";

const ScheduleCheckup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    doctor: "",
    clinic: "",
    type: "General Check-up",
  });

  const doctors = [
    {
      name: "Dr. John Smith",
      specialty: "Cardiologist",
      clinics: ["City Heart Clinic", "Green Valley Hospital"],
    },
    {
      name: "Dr. Sarah Brown",
      specialty: "Dentist",
      clinics: ["Smile Dental Care", "Bright Smile Clinic"],
    },
    {
      name: "Dr. Emily Davis",
      specialty: "Pediatrician",
      clinics: ["Children's Wellness Center", "Happy Kids Hospital"],
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDoctorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDoctor = doctors.find((doc) => doc.name === e.target.value);
    setFormData((prev) => ({
      ...prev,
      doctor: selectedDoctor?.name || "",
      clinic: selectedDoctor?.clinics[0] || "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Appointment Scheduled Successfully!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center py-12 px-6"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?health,hospital')" }}
    >
      <div className="w-full max-w-2xl bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Schedule Your Check-Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Select Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>

          {/* Time */}
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Select Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>

          {/* Doctor */}
          <div>
            <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">
              Select Doctor
            </label>
            <select
              id="doctor"
              name="doctor"
              value={formData.doctor}
              onChange={handleDoctorChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            >
              <option value="" disabled>
                Choose a doctor
              </option>
              {doctors.map((doctor) => (
                <option key={doctor.name} value={doctor.name}>
                  {doctor.name} - {doctor.specialty}
                </option>
              ))}
            </select>
          </div>

          {/* Clinic */}
          {formData.doctor && (
            <div>
              <label htmlFor="clinic" className="block text-sm font-medium text-gray-700">
                Select Clinic
              </label>
              <select
                id="clinic"
                name="clinic"
                value={formData.clinic}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              >
                {doctors
                  .find((doc) => doc.name === formData.doctor)
                  ?.clinics.map((clinic) => (
                    <option key={clinic} value={clinic}>
                      {clinic}
                    </option>
                  ))}
              </select>
            </div>
          )}

          {/* Type of Check-Up */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Type of Check-Up
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            >
              <option value="General Check-up">General Check-up</option>
              <option value="Dental Check-up">Dental Check-up</option>
              <option value="Eye Examination">Eye Examination</option>
              <option value="Pediatric Consultation">Pediatric Consultation</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md shadow-md font-semibold transition duration-300"
            >
              Schedule Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleCheckup;
