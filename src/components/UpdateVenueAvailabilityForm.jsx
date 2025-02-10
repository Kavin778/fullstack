import React from "react";

const UpdateVenueAvailabilityForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    
    <div className="fixed inset-0 p-8 overflow-auto backdrop-blur-sm bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white sm:p-6 p-4 lg:p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Mark Venue as Unavailable</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="venueName" className="block text-sm font-medium text-gray-700">
              Venue Name
            </label>
            <select
              id="venueName"
              name="venueName"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            >
              <option value="">Select Venue</option>
              <option value="Venue1">BIT Auditorium</option>
              <option value="Venue2">Vedanayagam Auditorium</option>
              <option value="Venue3">Library Conference Room</option>
            </select>
          </div>
          <div className="flex mb-4 gap-2 flex-col md:flex-row md:w-full">
            <div className="md:w-1/2">
              <label htmlFor="fromDate" className="block text-sm font-medium text-gray-700">
                From Date
              </label>
              <input
                type="date"
                id="fromDate"
                name="fromDate"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>
            <div className="md:w-1/2">
              <label htmlFor="toDate" className="block text-sm font-medium text-gray-700">
                To Date
              </label>
              <input
                type="date"
                id="toDate"
                name="toDate"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
              Reason for Unavailability
            </label>
            <textarea
              id="reason"
              name="reason"
              rows="3"
              placeholder="Enter reason..."
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-800 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Mark Unavailable
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateVenueAvailabilityForm;
