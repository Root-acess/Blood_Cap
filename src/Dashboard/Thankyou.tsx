import React from 'react';

const ThankYou: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <header className="mb-10 text-center">
                <h1 className="text-4xl font-bold text-gray-800">THANK YOU!</h1>
            </header>

            <div className="flex flex-col items-center">
                <i className="fa fa-check text-6xl text-green-500 mb-4" id="checkmark"></i>
                <p className="text-lg text-gray-700 text-center max-w-md">
                    Thanks a bunch for filling that out. It means a lot to us, just like you do! We really appreciate you giving us a moment of your time today. Thanks for being you.
                </p>
            </div>

            <footer className="mt-10">
                <p className="text-sm text-gray-500">Copyright ©2014 | All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default ThankYou;
