import React from "react";

const StressManagementPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-50 to-indigo-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-indigo-800">
            Stress Management
          </h1>
          <p className="text-gray-600 mt-4">
            Discover proven techniques and expert support to manage stress effectively and lead a balanced life.
          </p>
        </header>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-indigo-700">
                Take Control of Stress
              </h2>
              <p className="text-gray-600 mt-4">
                Stress is a part of life, but it doesn't have to control you. Learn practical strategies to handle stress and build resilience.
              </p>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Learn relaxation techniques.</li>
                <li>Build mental and emotional resilience.</li>
                <li>Identify and tackle stress triggers.</li>
              </ul>
            </div>
            <img
              src="https://via.placeholder.com/600x400"
              alt="Stress Management"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </section>

        {/* Unique Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-indigo-800 text-center mb-8">
            Unique Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                Guided Meditation Sessions
              </h3>
              <p className="text-gray-600 mb-4">
                Access our library of guided meditations designed to reduce stress and promote relaxation.
              </p>
              <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
                Start Meditating
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                Stress Journal Tracker
              </h3>
              <p className="text-gray-600 mb-4">
                Keep track of your stress triggers and coping mechanisms with our stress journal tool.
              </p>
              <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
                Track Stress
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                Live Stress Relief Webinars
              </h3>
              <p className="text-gray-600 mb-4">
                Join live webinars led by experts to learn actionable tips for managing stress effectively.
              </p>
              <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
                Register Now
              </button>
            </div>
          </div>
        </section>

        {/* Stress Management Techniques Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-indigo-800 text-center mb-8">
            Stress Management Techniques
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-700 mb-4">Mindfulness</h3>
              <p className="text-gray-600">
                Practice mindfulness to focus on the present moment and reduce anxiety.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-700 mb-4">Breathing Exercises</h3>
              <p className="text-gray-600">
                Learn simple yet effective breathing exercises to calm your mind and body.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-700 mb-4">Physical Activity</h3>
              <p className="text-gray-600">
                Discover how regular physical activity can help you relieve stress and improve mood.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-700 mb-4">Cognitive Techniques</h3>
              <p className="text-gray-600">
                Reframe negative thoughts and develop positive coping mechanisms.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-indigo-800 text-center mb-8">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "I never knew stress could be managed so effectively. The guided meditations changed my life!"
              </p>
              <footer className="mt-4 text-indigo-700 font-semibold">— Sarah L.</footer>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "The tools and techniques offered here helped me regain balance in my life. Highly recommend!"
              </p>
              <footer className="mt-4 text-indigo-700 font-semibold">— John D.</footer>
            </blockquote>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">
            Start Your Stress-Free Journey Today!
          </h2>
          <p className="text-gray-600 mb-8">
            Take the first step toward a calmer, healthier you by booking a free consultation.
          </p>
          <button className="bg-indigo-500 text-white py-3 px-6 rounded-md hover:bg-indigo-600">
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
};

export default StressManagementPage;
