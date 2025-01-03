import React from "react";

const GynecologyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 via-pink-100 to-white">
      <header className="text-center py-10 bg-purple-500 text-white">
        <h1 className="text-4xl font-semibold">Women's Health & Gynecology</h1>
        <p className="mt-2 text-lg">Empowering Women with Knowledge and Care</p>
      </header>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold">Routine Checkups</h3>
              <p className="mt-2 text-md">Regular exams to monitor your overall reproductive health and wellbeing.</p>
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold">Pregnancy Care</h3>
              <p className="mt-2 text-md">Comprehensive prenatal and postnatal care to support you during your pregnancy journey.</p>
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold">Menopause Management</h3>
              <p className="mt-2 text-md">Personalized care for navigating menopause with ease and confidence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-6">Why Choose Us?</h2>
          <p className="text-lg text-gray-700 mb-4">
            At our gynecology clinic, we believe in providing personalized, compassionate care that makes women feel comfortable and confident. Our services are designed with your needs in mind, providing expert medical advice in a nurturing environment.
          </p>
          <p className="text-lg text-gray-700">
            We focus on prevention, treatment, and education for women of all ages, ensuring that your health is always in expert hands.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-200 to-pink-100">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-4">We’re here for you. Book an appointment today and take the next step toward better health and wellness.</p>
          <a
            href="/contact"
            className="inline-block bg-purple-600 text-white py-2 px-6 rounded-full text-xl transition duration-300 hover:bg-purple-700"
          >
            Book an Appointment
          </a>
        </div>
      </section>

      <footer className="bg-purple-500 py-6 text-white text-center">
        <p className="text-lg">© 2025 Women's Health Clinic. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default GynecologyPage;
