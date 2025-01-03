import React from "react";

const MenopauseSupportPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-rose-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-rose-800">
            Menopause Support
          </h1>
          <p className="text-gray-700 mt-4">
            Empowering women to navigate menopause with confidence, care, and
            expert guidance.
          </p>
        </header>

        {/* Banner Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="data:image/png;base64,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"
              alt="Women Empowerment"
              className="rounded-lg shadow-lg w-full"
            />
            <div>
              <h2 className="text-3xl font-bold text-rose-700">
                Redefining Wellness for Women
              </h2>
              <p className="text-gray-600 mt-4">
                Menopause is a journey, not an end. Let’s explore holistic
                support tailored for you—from physical health to emotional
                well-being.
              </p>
              <button className="bg-rose-500 text-white py-2 px-4 rounded-md mt-6 hover:bg-rose-600">
                Book a Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Unique Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-rose-800 text-center mb-8">
            Unique Features for You
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-rose-700 mb-4">
                Hormonal Health Tracking
              </h3>
              <p className="text-gray-600">
                Use our digital tracker to monitor hormonal changes and receive
                personalized health tips.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-rose-700 mb-4">
                Expert Webinars
              </h3>
              <p className="text-gray-600">
                Join webinars hosted by health professionals to learn about
                menopause management strategies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-rose-700 mb-4">
                Supportive Community
              </h3>
              <p className="text-gray-600">
                Connect with women experiencing the same journey in our
                supportive online forum.
              </p>
            </div>
          </div>
        </section>

        {/* Wellness Tips Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-rose-800 text-center mb-8">
            Wellness Tips for Menopause
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-pink-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-rose-700 mb-4">
                Nutritional Advice
              </h3>
              <p className="text-gray-600">
                Explore diet plans designed to support hormonal balance and
                overall health during menopause.
              </p>
            </div>
            <div className="bg-pink-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-rose-700 mb-4">
                Mindfulness & Relaxation
              </h3>
              <p className="text-gray-600">
                Learn meditation and breathing exercises to manage stress and
                improve sleep quality.
              </p>
            </div>
            <div className="bg-pink-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-rose-700 mb-4">
                Physical Activity
              </h3>
              <p className="text-gray-600">
                Discover workout routines tailored to support bone health and
                increase energy levels.
              </p>
            </div>
            <div className="bg-pink-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-rose-700 mb-4">
                Emotional Well-Being
              </h3>
              <p className="text-gray-600">
                Access tools to manage mood swings and maintain emotional
                resilience.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-rose-800 text-center mb-8">
            Stories of Empowerment
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "This platform has been a lifesaver! The tips and webinars have
                made my menopause journey smoother."
              </p>
              <footer className="mt-4 text-rose-700 font-semibold">
                — Emily W.
              </footer>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "Being part of the community helped me feel less alone. Thank
                you for creating such a wonderful space!"
              </p>
              <footer className="mt-4 text-rose-700 font-semibold">
                — Rachel M.
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-rose-800 mb-4">
            Let’s Begin Your Empowerment Journey
          </h2>
          <p className="text-gray-700 mb-8">
            Get the support you need to thrive during menopause. Join us today!
          </p>
          <button className="bg-rose-500 text-white py-3 px-6 rounded-md hover:bg-rose-600">
            Join the Program
          </button>
        </section>
      </div>
    </div>
  );
};

export default MenopauseSupportPage;
