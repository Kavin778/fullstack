// Layout.jsx
import React, { useState } from 'react';
import Sidebar from './sidenavbar'; // Import the VenueForm component
import { useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <main className="flex-1 overflow-auto sm:ml-72 lg:ml-72 bg-white">
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
          <div className="group w-full rounded-lg shadow-lg hover:shadow-indigo-900 md:w-1/2 h-48 mb-4 text-center hover:bg-indigo-800 hover:text-white hover:shadow-xl bg-white flex flex-col justify-center items-center">
            <h2 className="m-8 lg:text-2xl md:text-xl sm:text-lg font-semibold">Edit Venue</h2>
            <button
              className="bg-indigo-800 text-white group-hover:bg-white group-hover:text-indigo-800 md:w-20 md:text-sm lg:w-24 hover:shadow-lg h-12 w-24 mb-8 rounded-lg"
            >
              Edit
            </button>
          </div>
          <div className="group w-full rounded-lg shadow-lg hover:shadow-indigo-900 md:w-1/2 h-48 mb-4 text-center hover:bg-indigo-800 hover:text-white hover:shadow-xl bg-white flex flex-col justify-center items-center">
            <h2 className="m-8 lg:text-2xl md:text-xl sm:text-lg font-semibold">Update</h2>
            <button
              className="bg-indigo-800 text-white group-hover:bg-white group-hover:text-indigo-800 md:text-sm md:w-24 lg:w-24 hover:shadow-lg h-12 w-24 mb-8 rounded-lg"
            >
              Update
            </button>
          </div>
          <div className="group w-full rounded-lg shadow-lg hover:shadow-indigo-900 md:w-1/2 h-48 mb-4 text-center hover:bg-indigo-800 hover:text-white hover:shadow-xl bg-white flex flex-col justify-center items-center">
            <h2 className="m-8 lg:text-2xl md:text-xl sm:text-lg font-semibold">To Approve</h2>
            <button onClick={()=>navigate('/admin-approve')}
               className="bg-indigo-800 text-white group-hover:bg-white group-hover:text-indigo-800 md:text-sm md:w-24 lg:w-24 hover:shadow-lg h-12 w-24 mb-8 rounded-lg"
            >
              Approve
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-col h-auto p-4 w-[95%] m-auto mb-10 md:flex-row md:gap-8 sm:gap-4">
        <div className="w-full rounded-lg md:w-1/2 h-48 mb-4 text-center flex flex-col border-2 border-indigo-900 hover:bg-indigo-800 hover:text-white justify-top items-center">
            <h2 className="m-8 text-xl lg:text-2xl md:text-2xl sm:text-xl font-semibold">To Approve </h2>
            <h2 className="xl:text-6xl text-2xl lg:text-4xl md:text-4xl sm:text-2xl font-semibold">3</h2>
          </div>
          <div className="w-full rounded-lg md:w-1/2 h-48 mb-4 text-center flex flex-col border-2 border-indigo-900 hover:bg-indigo-800 hover:text-white justify-top items-center">
            <h2 className="m-8 lg:text-2xl text-xl md:text-2xl sm:text-xl font-semibold">Rejected Bookings</h2>
            <h2 className="xl:text-6xl text-2xl lg:text-4xl md:text-4xl sm:text-2xl font-semibold">2</h2>
          </div>
          <div className="w-full rounded-lg md:w-1/2 h-48 mb-4 text-center flex flex-col border-2 border-indigo-900 hover:bg-indigo-800 hover:text-white justify-top items-center">
            <h2 className="m-8 text-xl lg:text-2xl md:text-2xl  sm:text-xl font-semibold">Total Bookings</h2>
            <h2 className="xl:text-6xl text-2xl lg:text-4xl md:text-4xl sm:text-2xl font-semibold">5</h2>
          </div>
        </div>
      </main>
      {/* VenueForm Modal */}
    </div>
  );
};

export default AdminLayout;
