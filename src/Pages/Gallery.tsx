const Gallery = () => {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white">
            <div className="text-center py-10">
                <h1 className="text-5xl font-extrabold text-blue-700 drop-shadow-lg">
                    <span>Healthcare </span>
                    <span className="text-red-600">Heroes</span>
                    <span> in Action</span>
                </h1>
                
                <p className="mt-2 text-lg text-gray-700">
                    Dedicated to saving lives and improving health worldwide.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5">
                <div className="space-y-2">
                    <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D" alt="Doctors in discussion" />
                    <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" alt="Surgical team at work" />
                    <img className="w-full h-auto object-cover" src="https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.webp?a=1&b=1&s=612x612&w=0&k=20&c=YwTJIt9-LX4Acp_3ng6BD3_pke2MHOqNMqMgR2adg_g=" alt="Healthcare professionals" />
                </div>
                <div className="space-y-2">
                    <img className="w-full h-auto object-cover" src="https://media.istockphoto.com/id/1497818358/photo/doctor-giving-out-prescription-to-a-rural-woman-during-a-rural-health-care-camp.webp?a=1&b=1&s=612x612&w=0&k=20&c=LMq_QH0k16NGZnDECy6i0Q7i1hpDOXgrZUKHW2ybvfA=" alt="Doctor checking patient" />
                    <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1550831107-1553da8c8464" alt="Nurse assisting patient" />
                </div>
                <div className="space-y-2">
                    <img className="w-full h-auto object-cover" src="https://media.istockphoto.com/id/1418999467/photo/doctors-comforting-disabled-elderly-patient.webp?a=1&b=1&s=612x612&w=0&k=20&c=GCZTGW7y3_zsw1rL9III676QppSAv-9BQwtxuHg522c=" alt="Medical equipment" />
                    <img className="w-full h-auto object-cover" src="https://media.istockphoto.com/id/1680653991/photo/a-female-doctor-conducting-a-thorough-examination-of-a-child-during-a-rural-health-care-camp.jpg?s=612x612&w=0&k=20&c=L2Cuo2hiRzlDEuT-oAbMH36xzFmrP5k5Ivzsu2p5w24=" alt="Hospital staff coordination" />
                    <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb" alt="Doctor analyzing x-ray" />
                </div>
                <div className="space-y-2">
                    <img className="w-full h-auto object-cover" src="https://media.istockphoto.com/id/1130934349/photo/doctor-doing-social-service-in-village.jpg?s=612x612&w=0&k=20&c=rP9-cpT0u0N-MguSe6VMojakJ5-7r4IObQhMI1qNvGU=" alt="Healthcare workers with patients" />
                    <img className="w-full h-auto object-cover" src="https://media.istockphoto.com/id/1739325597/photo/nurse-senior-woman-and-smile-with-comfort-holding-hands-or-support-in-nursing-home-for.jpg?s=612x612&w=0&k=20&c=BMCKzCUYgUGPlSugqpmKVJ3tNzeh0Sv_HjYcKOrKuKI=" alt="Ambulance on duty" />
                </div>
            </div>
        </div>
    );
}

export default Gallery;
