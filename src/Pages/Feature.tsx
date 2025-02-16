import { motion } from "framer-motion";

const Feature = () => {
  return (
    <motion.div 
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div className="lg:w-3/4">
          <h2 className="text-3xl font-bold lg:text-4xl text-green-400">
            Comprehensive Medical Services for Your Health & Well-Being
          </h2>
          <p className="mt-3 font-medium text-gray-300">
            Access high-quality healthcare solutions tailored to your needs. From emergency care to routine check-ups, we are here for you.
          </p>
          <p className="mt-5">
            <a className="inline-flex items-center gap-x-1 text-sm text-green-400 decoration-2 hover:underline focus:outline-none focus:underline font-semibold" href="#">
              Explore Our Services
              <motion.svg 
                className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                initial={{ x: -5 }}
                animate={{ x: 0 }}
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              >
                <path d="m9 18 6-6-6-6"/>
              </motion.svg>
            </a>
          </p>
        </div>
        <div className="space-y-6 lg:space-y-10">
          {[
            { title: "24/7 Emergency Support", text: "Our medical team is available around the clock to provide immediate care in case of emergencies." },
            { title: "Specialized Healthcare", text: "Get expert care from our team of specialists across multiple medical fields, ensuring comprehensive treatment." },
            { title: "Easy Online Appointments", text: "Schedule your consultations seamlessly with our user-friendly online booking system." },
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex gap-x-5 sm:gap-x-8" 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 }}
            >
              <span className="shrink-0 inline-flex justify-center items-center size-[50px] rounded-full border border-green-400 bg-gray-800 text-green-400 shadow-md mx-auto">
                <svg className="shrink-0 size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7v6c0 5.5 4.5 10 10 10s10-4.5 10-10V7l-10-5z" />
                </svg>
              </span>
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-green-400">
                  {feature.title}
                </h3>
                <p className="mt-1 text-gray-300">
                  {feature.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Feature;
