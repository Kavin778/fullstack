import React from 'react';

const VenueForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  

  return (
    <div className="fixed inset-0 p-8  overflow-auto backdrop-blur-sm bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white sm:p-6 p-4 lg:p-8 rounded-lg shadow-lg w-full max-w-lg ">
        <h2 className="text-2xl font-bold text-center mb-4">Venue Booking Form</h2>
        <form>
            
          <div className="mb-4">
            <label htmlFor="venueName" className="block text-sm font-medium text-gray-700">Venue Name</label>
              <select 
              id="venueName" 
              name="venueName" 
              required 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              >
              <option value="Venue1">BIT AUDITORIUM</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="venueName" className="block text-sm font-medium text-gray-700">Venue Name</label>
              <select 
              id="venueName" 
              name="venueName" 
              required 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              >
              <option value="Venue1">BIT AUDITORIUM</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason</label>
            <textarea
            id="reason"
            name="reason"
            rows="3"
            placeholder="Please enter the reason for Booking..."
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default VenueForm;