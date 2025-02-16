import { useRef, useEffect } from 'react';
import { Typed } from 'react-typed'; // No need for named import
import ig from '../assets/aq.svg';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Your Loved Ones', 'Your Family', 'Your Friends', 'Your Community'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative flex flex-col-reverse py-10 lg:pt-0 lg:flex-col lg:pb-0 bg-blue-900 -mt-12">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-2 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-blue-700 transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-64 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={ig}
          alt="Home Healthcare Service"
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-6 mx-auto md:px-0 lg:px-10 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-wider text-gray-300 uppercase rounded-full bg-blue-700">
            Compassionate Care, Right at Home
          </p>
          <h2 className="mb-6 font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl sm:leading-tight">
            Quality Medical Services
            <br className="hidden md:block" />
            <span className="inline-block text-green-400">
              For{' '}
              <span ref={typedRef}></span> {/* Typed will render here */}
            </span>
          </h2>
          <p className="pr-5 mb-6 text-lg text-gray-300 md:text-xl">
            Our experienced healthcare professionals bring personalized and expert medical care to your home, ensuring your well-being and peace of mind.
          </p>
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-14 px-8 mr-6 text-lg font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-600 hover:bg-green-800 focus:shadow-outline focus:outline-none"
            >
              Book a Consultation
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium tracking-wide text-blue-900 transition duration-200 rounded shadow-md bg-white hover:bg-gray-200 focus:shadow-outline focus:outline-none"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;