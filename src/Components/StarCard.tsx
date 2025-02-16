const StarCard = () => {
  return (
    <div className="bg-white">
      <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
        <div className="border border-neutral-800 rounded-xl">
          <div className="p-4 lg:p-8 bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
              
              {/* Patients Served */}
              <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                <svg className="shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"/><path d="M15 9h.01"/><path d="M9 9h.01"/><path d="M8 13h8"/><path d="M10 17h4"/>
                </svg>
                <div className="mt-3 sm:mt-5">
                  <h3 className="text-lg sm:text-3xl font-semibold text-white">50,000+</h3>
                  <p className="mt-1 text-sm sm:text-base text-neutral-400">Patients Treated</p>
                </div>
              </div>

              {/* Trusted Hospitals */}
              <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                <div className="flex justify-center items-center -space-x-5">
                  <img className="relative z-[2] shrink-0 size-8 rounded-full border-[3px] border-neutral-800" src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Hospital" />
                  <img className="relative z-[1] shrink-0 size-8 rounded-full border-[3px] border-neutral-800 -mt-7" src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Hospital" />
                  <img className="relative shrink-0 size-8 rounded-full border-[3px] border-neutral-800" src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Hospital" />
                </div>
                <div className="mt-3 sm:mt-5">
                  <h3 className="text-lg sm:text-3xl font-semibold text-white">200+</h3>
                  <p className="mt-1 text-sm sm:text-base text-neutral-400">Trusted Hospitals</p>
                </div>
              </div>

              {/* Successful Surgeries */}
              <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                <svg className="shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"/><path d="M8 12h8"/><path d="M12 8v8"/>
                </svg>
                <div className="mt-3 sm:mt-5">
                  <h3 className="text-lg sm:text-3xl font-semibold text-white">10,000+</h3>
                  <p className="mt-1 text-sm sm:text-base text-neutral-400">Successful Surgeries</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StarCard;
