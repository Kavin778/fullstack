import React from 'react';

const About = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-500 bg-opacity-50 p-8 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-lg border-4 border-indigo-900 bg-white p-4 shadow-lg sm:p-6 lg:p-8">
        <div class="md:flejustify-center">
          <div class="p-8 text-center">
            <div class="text-sm font-semibold uppercase tracking-wide text-indigo-900">
              About This Portal
            </div>
            <p class="mt-2 text-gray-500 hover:text-indigo-900">
              This is Resource Booking Portal for BANNARI AMMAN INSTITUTE OF
              TECHNOLOGY
            </p>
            <p class="mt-2 text-gray-500 hover:text-indigo-900">
              Here you can book venues in BIT colleges for Academic purposes
            </p>
            <button
              class="mt-4 rounded bg-indigo-800 px-4 py-2 text-white hover:bg-indigo-950"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
