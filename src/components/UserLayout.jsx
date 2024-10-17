// Layout.jsx
import React, { useState } from 'react';
import VenueForm from './VenueForm'; // Import the VenueForm component
import UserSidebar from './UserSideBar';

const UserLayout = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to control form visibility

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="flex h-screen ">
      <UserSidebar/>
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
        <div className="flex flex-col h-auto w-[95%] m-auto mb-1 md:flex-row p-2 md:gap-8 sm:gap-4">
          <div className="w-full rounded-lg shadow-lg md:w-1/2 h-48 mb-4 text-center hover:bg-slate-50 hover:shadow-xl bg-slate-100 flex flex-col justify-center items-center">
            <h2 className="m-8 lg:text-2xl md:text-xl sm:text-lg font-semibold">Book Venue</h2>
            <button
              className="bg-indigo-900 text-white hover:bg-indigo-800 md:w-20 lg:w-24 hover:shadow-lg h-12 w-24 mb-8 rounded-lg"
              onClick={openForm}
            >
              Form
            </button>
          </div>
          <div className="w-full rounded-lg shadow-lg md:w-1/2 h-48 mb-4 text-center hover:bg-slate-50 hover:shadow-xl bg-slate-100 flex flex-col justify-center items-center">
            <h2 className="m-8 lg:text-2xl md:text-xl sm:text-lg font-semibold">My Profile</h2>
            <button
              className="bg-indigo-900 text-white hover:bg-indigo-800 md:text-sm md:w-24 lg:w-24 hover:shadow-lg h-12 w-24 mb-8 rounded-lg">
              View Profile
            </button>
          </div>
          <div className="w-full rounded-lg shadow-lg md:w-1/2 h-48 mb-4 text-center hover:bg-slate-50 hover:shadow-xl bg-slate-100 flex flex-col justify-center items-center">
            <h2 className="m-8 lg:text-2xl md:text-xl sm:text-lg font-semibold">My Bookings</h2>
            <button
              className="bg-indigo-900 text-white hover:bg-indigo-800 md:text-sm md:w-24 lg:w-24 hover:shadow-lg h-12 w-24 mb-8 rounded-lg">
              Bookings
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row h-auto p-4 w-[95%] m-auto mb-10 md:flex-row md:gap-8 sm:gap-4">
        <div className="w-full rounded-lg md:w-1/2 h-48 mb-4 text-center flex flex-col justify-top items-center">
            <h2 className="m-8 lg:text-2xl md:text-xl sm:text-lg font-semibold">Approved Bookings</h2>
            <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-lg font-semibold">5</h2>
          </div>
          <div className="w-full rounded-lg md:w-1/2 h-48 mb-4 text-center flex flex-col justify-top items-center">
            <h2 className="m-8 lg:text-2xl md:text-xl  sm:text-lg font-semibold">Pending Bookings</h2>
            <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-xl font-semibold">5</h2>
          </div>
        </div>
      </main>
      {/* VenueForm Modal */}
      {isFormOpen && <VenueForm isOpen={isFormOpen} onClose={closeForm} />}
    </div>
  );
};

export default UserLayout;
