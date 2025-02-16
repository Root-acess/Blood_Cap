import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#2c3e50] transition duration-300 ease-in-out">
      <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8 backdrop-blur-md bg-opacity-50">
        <div className="flex justify-between items-center gap-x-1">
          <a className="flex-none font-semibold text-xl text-[#f9f9f9] focus:outline-none focus:opacity-80" href="#home" aria-label="Brand">CareConnect</a>

          {/* Collapse Button */}
          <button 
            type="button" 
            className="md:hidden relative size-9 flex justify-center items-center rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            ) : (
              <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" x2="21" y1="6" y2="6"/>
                <line x1="3" x2="21" y1="12" y2="12"/>
                <line x1="3" x2="21" y1="18" y2="18"/>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex md:items-center md:gap-4 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            {['home', 'feature', 'faq', 'gallery', 'contactus'].map((section) => (
              <Link 
                key={section} 
                className="p-2 text-[#f9f9f9] hover:bg-[#16a085] rounded-lg transition duration-200 cursor-pointer"
                to={section} 
                smooth={true} 
                duration={500}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>

          {/* Button Group */}
          <div className="flex items-center gap-2 mt-3 md:mt-0">
            <button 
              onClick={() => navigate('/signin')} 
              className="py-2 px-4 text-[#2c3e50] bg-[#f9f9f9] border border-[#16a085] rounded-lg hover:bg-[#16a085] hover:text-[#f9f9f9] transition duration-200"
            >
              Sign in
            </button>
            <button 
              onClick={() => navigate('/signup')} 
              className="py-2 px-4 bg-[#16a085] text-[#f9f9f9] rounded-lg hover:bg-[#2c3e50] transition duration-200"
            >
              Get started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
