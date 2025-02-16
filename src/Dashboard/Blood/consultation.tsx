import React, { useState } from "react";

const Consultation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number.";
    }
    if (!formData.specialty) {
      newErrors.specialty = "Please select a specialty.";
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please select a preferred date.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setSuccessMessage(
        "Your consultation request has been successfully submitted. We will contact you shortly."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        specialty: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
      setErrors({});
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 to-green-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl p-8">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Book a Consultation
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Schedule a consultation with our experienced healthcare professionals.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full px-4 py-2 rounded-md border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:ring-green-500 focus:border-green-500`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full px-4 py-2 rounded-md border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring-green-500 focus:border-green-500`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={`w-full px-4 py-2 rounded-md border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } focus:ring-green-500 focus:border-green-500`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="specialty"
              className="block text-sm font-medium text-gray-700"
            >
              Specialty
            </label>
            <select
              id="specialty"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.specialty ? "border-red-500" : "border-gray-300"
              } focus:ring-green-500 focus:border-green-500`}
            >
              <option value="">Select a specialty</option>
              <option value="General Medicine">General Medicine</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Orthopedics">Orthopedics</option>
            </select>
            {errors.specialty && (
              <p className="text-red-500 text-sm mt-1">{errors.specialty}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="preferredDate"
              className="block text-sm font-medium text-gray-700"
            >
              Preferred Date
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.preferredDate ? "border-red-500" : "border-gray-300"
              } focus:ring-green-500 focus:border-green-500`}
            />
            {errors.preferredDate && (
              <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="preferredTime"
              className="block text-sm font-medium text-gray-700"
            >
              Preferred Time (Optional)
            </label>
            <input
              type="time"
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter any additional information (optional)"
              rows={4}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-green-500 focus:border-green-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Book Consultation
          </button>
        </form>

        {successMessage && (
          <p className="text-green-500 mt-6 text-center font-semibold">
            {successMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Consultation;
