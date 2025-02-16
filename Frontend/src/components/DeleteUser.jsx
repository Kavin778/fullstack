import React from "react";

const DeleteUser = ({isOpen,onClose})=>{
    if(!isOpen)return null;
    return (
        <div className="fixed inset-0 p-8 overflow-auto backdrop-blur-sm bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white sm:p-6 p-4 lg:p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Delete User</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                User Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter user's email"
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
                className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    );

}

export default DeleteUser;