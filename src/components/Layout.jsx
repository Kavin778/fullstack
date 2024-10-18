// Layout.jsx
import React, { useState } from 'react';
import Sidebar from './sidenavbar';
import VenueForm from './VenueForm'; // Import the VenueForm component

const Layout = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to control form visibility

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="flex h-screen ">
      <Sidebar />
      <main className="flex-1 overflow-auto sm:ml-72 lg:ml-72 bg-slate-200">
        <div className="max-w-24 md:w-24 lg:w-24 m-auto mt-4">
          <img className="object-contain" src="src/images/BIT LOGO.png" alt="BIT Logo" />
        </div>
        <div className="w-full h-12 sm:mx-2 text-center mb-8">
          <h2 className="font-sans text-xl font-semibold text-indigo-900">
            BANNARI AMMAN INSTITUTE OF TECHNOLOGY
          </h2>
          <h2 className="font-sans text-xl font-semibold text-indigo-900">
            RESOURCE BOOKING PORTAL
          </h2>
        </div>
      </main>
      {/* VenueForm Modal */}
      {isFormOpen && <VenueForm isOpen={isFormOpen} onClose={closeForm} />}
    </div>
  );
};

export default Layout;
