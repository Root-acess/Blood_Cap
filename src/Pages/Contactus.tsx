const Contactus = () => {
  return (
    <div className="bg-white text-[#0A2540]">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="font-semibold text-3xl md:text-4xl">Get in Touch</h2>
          <p className="mt-2 text-gray-600">
            Have a question or want to work with us? Drop us a message!
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          {/* Contact Form */}
          <div className="md:order-2 border-b border-gray-300 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
            <form>
              <div className="space-y-4">
                {["Your Name", "Your Email", "Your Company", "Your Phone"].map((label, index) => (
                  <div key={index} className="relative">
                    <input
                      type={label.includes("Email") ? "email" : "text"}
                      className="peer p-4 block w-full bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] placeholder-transparent"
                      placeholder={label}
                    />
                    <label className="absolute top-0 left-0 p-4 h-full text-gray-500 text-sm transition-all peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400">
                      {label}
                    </label>
                  </div>
                ))}

                {/* Message Box */}
                <div className="relative">
                  <textarea
                    className="peer p-4 block w-full bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] placeholder-transparent"
                    placeholder="Describe your project"
                    rows={4}
                  ></textarea>
                  <label className="absolute top-0 left-0 p-4 h-full text-gray-500 text-sm transition-all peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400">
                    Tell us about your project
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button className="w-full py-3 bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white font-semibold rounded-lg hover:shadow-md transition">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 text-gray-700">
            <div className="flex gap-x-5">
              <div className="shrink-0 size-6 text-[#007BFF]">📍</div>
              <div>
                <h4 className="font-semibold">Our Location:</h4>
                <p className="mt-1 text-gray-600">Your Company Address Here</p>
              </div>
            </div>

            <div className="flex gap-x-5">
              <div className="shrink-0 size-6 text-[#007BFF]">📧</div>
              <div>
                <h4 className="font-semibold">Email:</h4>
                <p className="mt-1 text-gray-600">careconnect@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-x-5">
              <div className="shrink-0 size-6 text-[#007BFF]">📞</div>
              <div>
                <h4 className="font-semibold">Phone:</h4>
                <p className="mt-1 text-gray-600">8984443551</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
