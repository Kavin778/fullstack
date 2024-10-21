// Layout.jsx
import React, { useState } from 'react';
import Sidebar from './sidenavbar'; // Import the VenueForm component

const AdminLayout = () => {
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
        
      </main>
      {/* VenueForm Modal */}
    </div>
  );
};

export default AdminLayout;
