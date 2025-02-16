import { useLocation } from 'react-router-dom';
import { Button, Icon, NavbarInput, Image, Dropdown, DropdownItem } from '@material-tailwind/react';
import ProfilePicture from '../assets/team-2-800x800.jpg';

interface AdminNavbarProps {
    showSidebar: string;
    setShowSidebar: (value: string) => void;
}

const AdminNavbar: React.FC<AdminNavbarProps> = ({ showSidebar, setShowSidebar }) => {
    const location = useLocation();
    const pageTitle = location.pathname === '/' ? 'DASHBOARD' : location.pathname.replace('/', '').toUpperCase();

    return (
        <nav className="bg-light-blue-500 md:ml-64 py-6 px-3">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                
                {/* Sidebar Toggle Button (Mobile) */}
                <div className="md:hidden">
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        iconOnly
                        rounded
                        ripple="light"
                        onClick={() => setShowSidebar('left-0')}
                    >
                        <Icon name="menu" size="2xl" color="white" />
                    </Button>
                    <div
                        className={`absolute top-2 md:hidden ${
                            showSidebar === 'left-0' ? 'left-64' : '-left-64'
                        } z-50 transition-all duration-300`}
                    >
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            iconOnly
                            rounded
                            ripple="light"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <Icon name="close" size="2xl" color="white" />
                        </Button>
                    </div>
                </div>

                {/* Navbar Title */}
                <div className="flex justify-between items-center w-full">
                    <h4 className="uppercase text-white text-sm tracking-wider mt-1">
                        {pageTitle}
                    </h4>

                    {/* Right Side Navbar Items */}
                    <div className="flex items-center space-x-4">
                        <NavbarInput placeholder="Search" />

                        {/* Profile Dropdown */}
                        <Dropdown
                            color="transparent"
                            buttonText={
                                <div className="w-12">
                                    <Image src={ProfilePicture} rounded />
                                </div>
                            }
                            rounded
                            style={{ padding: 0, color: 'transparent' }}
                        >
                            <DropdownItem color="lightBlue">Action</DropdownItem>
                            <DropdownItem color="lightBlue">Another Action</DropdownItem>
                            <DropdownItem color="lightBlue">Something Else</DropdownItem>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;
