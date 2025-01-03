import React from "react";

const PrenatalCarePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-rose-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-rose-700">
            Prenatal Care
          </h1>
          <p className="text-gray-600 mt-4">
            Supporting women through every step of their beautiful journey to motherhood.
          </p>
        </header>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-rose-700">
                Your Health, Your Baby, Our Priority
              </h2>
              <p className="text-gray-600 mt-4">
                Pregnancy is an exciting time, but it can also be overwhelming. 
                We’re here to provide expert guidance, resources, and care tailored 
                specifically for you and your baby's health.
              </p>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Comprehensive prenatal check-ups.</li>
                <li>Expert nutritional and fitness advice.</li>
                <li>24/7 access to trusted support and guidance.</li>
              </ul>
              <button className="bg-rose-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-rose-600">
                Book a Consultation
              </button>
            </div>
            <img
              src="https://www.ajhospital.in/storage/files/news/Blog/18.png"
              alt="Prenatal Care"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </section>

        {/* Unique Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-rose-700 text-center mb-8">
            Unique Features for Expecting Moms
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-rose-700 mb-4">
                Personalized Health Plans
              </h3>
              <p className="text-gray-600">
                Receive tailored health plans to meet your specific needs and ensure 
                the best outcomes for you and your baby.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-rose-700 mb-4">
                Pregnancy Fitness Programs
              </h3>
              <p className="text-gray-600">
                Stay active and healthy with safe, guided fitness programs designed for each trimester.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-rose-700 mb-4">
                Online Support Groups
              </h3>
              <p className="text-gray-600">
                Connect with other expecting moms in a supportive and nurturing online community.
              </p>
            </div>
          </div>
        </section>

        {/* Pregnancy Care Tips Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-rose-700 text-center mb-8">
            Essential Prenatal Care Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-rose-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-rose-600 mb-4">
                Balanced Nutrition
              </h3>
              <p className="text-gray-600">
                Learn about the right diet to support your baby’s growth and your well-being.
              </p>
            </div>
            <div className="bg-rose-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-rose-600 mb-4">
                Regular Check-Ups
              </h3>
              <p className="text-gray-600">
                Schedule routine check-ups to monitor the health of both you and your baby.
              </p>
            </div>
            <div className="bg-rose-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-rose-600 mb-4">
                Mental Wellness
              </h3>
              <p className="text-gray-600">
                Manage stress and ensure peace of mind through guided mindfulness and relaxation techniques.
              </p>
            </div>
            <div className="bg-rose-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-rose-600 mb-4">
                Safe Medications
              </h3>
              <p className="text-gray-600">
                Get expert advice on which medications are safe to use during pregnancy.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-rose-700 text-center mb-8">
            Hear From Our Happy Moms
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "The care and support I received were exceptional. They made my pregnancy journey smooth and joyful!"
              </p>
              <footer className="mt-4 text-rose-700 font-semibold">— Emily R.</footer>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "I loved the fitness programs and the online community. It made me feel connected and cared for."
              </p>
              <footer className="mt-4 text-rose-700 font-semibold">— Sophia K.</footer>
            </blockquote>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-rose-700 mb-4">
            Begin Your Prenatal Care Journey Today!
          </h2>
          <p className="text-gray-600 mb-8">
            Experience compassionate care and expert support for you and your baby.
          </p>
          <button className="bg-rose-500 text-white py-3 px-6 rounded-md hover:bg-rose-600">
            Book a Free Consultation
          </button>
        </section>
      </div>
    </div>
  );
};

export default PrenatalCarePage;
