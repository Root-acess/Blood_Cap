import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full bg-black transition duration-300 ease-in-out">
      <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8 backdrop-blur-md bg-opacity-50">
        <div className="flex justify-between items-center gap-x-1">
          <a className="flex-none font-semibold text-xl text-white focus:outline-none focus:opacity-80" href="#home" aria-label="Brand">Care Connect</a>

          {/* Collapse Button */}
          <button type="button" className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="hs-header-base-collapse" aria-expanded="false" aria-controls="hs-header-base" aria-label="Toggle navigation" data-hs-collapse="#hs-header-base">
            <svg className="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" x2="21" y1="6" y2="6"/>
              <line x1="3" x2="21" y1="12" y2="12"/>
              <line x1="3" x2="21" y1="18" y2="18"/>
            </svg>
            <svg className="hs-collapse-open:block shrink-0 hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
            <span className="sr-only">Toggle navigation</span>
          </button>
          {/* End Collapse Button */}
        </div>

        {/* Collapse */}
        <div id="hs-header-base" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-header-base-collapse">
          <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
              <div className="grow">
                <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                  <Link className="p-2 flex items-center text-sm bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" to="home" smooth={true} duration={500}>
                    Home
                  </Link>
                  <Link className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" to="feature" smooth={true} duration={500}>
                    Feature
                  </Link>
                  <Link className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" to="faq" smooth={true} duration={500}>
                    FAQ
                  </Link>
                  <Link className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" to="gallery" smooth={true} duration={500}>
                    Gallery
                  </Link>
                  <Link className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" to="contactus" smooth={true} duration={500}>
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="my-2 md:my-0 md:mx-2">
                <div className="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300 dark:bg-neutral-700"></div>
              </div>

              <div className="flex flex-wrap items-center gap-x-1.5">
                <button 
                  onClick={() => navigate('/signin')} 
                  className="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                >
                  Sign in
                </button>
                <button 
                  onClick={() => navigate('/signup')} 
                  className="py-2 px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600"
                >
                  Get started
                </button>
              </div>
              {/* End Button Group */}
            </div>
          </div>
        </div>
        {/* End Collapse */}
      </nav>
    </header>
  );
};

export default Navbar;