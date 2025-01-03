import React from "react";

const CounselingPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-teal-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-800">Counseling Services</h1>
          <p className="text-gray-600 mt-4">
            Compassionate, confidential, and expert counseling to guide you toward a healthier and happier life.
          </p>
        </header>

        {/* Introduction Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="https://5.imimg.com/data5/KP/OI/GLADMIN-71345602/cure-with-therapy-workplace-counselling-500x500.jpg"
              alt="Counseling"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-teal-700">
                Why Choose Our Counseling Services?
              </h2>
              <p className="text-gray-600 mt-4">
                Life can be challenging, but you don’t have to face it alone. Our experienced counselors provide a safe space to explore your thoughts, feelings, and goals.
              </p>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Confidential and empathetic sessions.</li>
                <li>Personalized counseling plans.</li>
                <li>Specialized in individual, family, and group counseling.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Unique Feature: Counseling Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-teal-800 text-center mb-8">
            Counseling Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">
                Self-Help Guides
              </h3>
              <p className="text-gray-600 mb-4">
                Explore a variety of self-help guides for mental health and personal growth.
              </p>
              <button className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600">
                Explore Guides
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">
                Mental Health Webinars
              </h3>
              <p className="text-gray-600 mb-4">
                Join our expert-led webinars to learn strategies for managing stress, anxiety, and more.
              </p>
              <button className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600">
                View Webinars
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">
                Community Support Groups
              </h3>
              <p className="text-gray-600 mb-4">
                Connect with others facing similar challenges in our safe and supportive groups.
              </p>
              <button className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600">
                Join a Group
              </button>
            </div>
          </div>
        </section>

        {/* Counseling Specialties */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-teal-800 text-center mb-8">
            Our Counseling Specialties
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-teal-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Anxiety & Stress</h3>
              <p className="text-gray-600">
                Learn to manage anxiety and stress with proven techniques tailored to your needs.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Relationships</h3>
              <p className="text-gray-600">
                Resolve conflicts and build stronger, healthier relationships with expert guidance.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Career Challenges</h3>
              <p className="text-gray-600">
                Navigate career transitions and workplace challenges with personalized support.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-teal-800 text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "The counseling sessions have been life-changing. I finally feel in control of my emotions and decisions."
              </p>
              <footer className="mt-4 text-teal-700 font-semibold">— Emily T.</footer>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "I gained clarity and confidence in my relationships and career. Highly recommended!"
              </p>
              <footer className="mt-4 text-teal-700 font-semibold">— Mark P.</footer>
            </blockquote>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-teal-800 mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-gray-600 mb-8">
            Schedule a free consultation and start your journey toward well-being today.
          </p>
          <button className="bg-teal-500 text-white py-3 px-6 rounded-md hover:bg-teal-600">
            Book a Session
          </button>
        </section>
      </div>
    </div>
  );
};

export default CounselingPage;
