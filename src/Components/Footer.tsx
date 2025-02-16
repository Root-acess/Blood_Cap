const Footer = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-[#111827] text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
        <div>
          <a className="flex-none text-xl font-semibold text-white focus:outline-none" href="#" aria-label="Brand">CareConnect@odisha</a>
        </div>

        <ul className="text-center">
          <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-500">
            <a className="inline-flex gap-x-2 text-sm text-gray-300 hover:text-white focus:outline-none" href="#">
              About
            </a>
          </li>
          <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-500">
            <a className="inline-flex gap-x-2 text-sm text-gray-300 hover:text-white focus:outline-none" href="#">
              Services
            </a>
          </li>
          <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-500">
            <a className="inline-flex gap-x-2 text-sm text-gray-300 hover:text-white focus:outline-none" href="#">
              Blog
            </a>
          </li>
        </ul>
    
        <div className="md:text-end space-x-2">
          <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-300 hover:bg-gray-700 focus:outline-none" href="#">
            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
