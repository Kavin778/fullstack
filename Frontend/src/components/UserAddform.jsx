import axios from "axios";
import React from "react";

const UserAddform = ({isOpen,onClose})=>{
    if(!isOpen)return null;
    
    const handleSubmit = async(e) =>{
      e.preventDefault();

      const formData = {
        email:e.target.email.value,
        department:e.target.department.value,
        password:e.target.password.value,
        username:e.target.name.value
      };
      const token = localStorage.getItem("token");

      try{
        const response = await axios.post("http://localhost:8080/resource/addUsers",formData,{
          headers:{
            Authorization:`Bearer ${token}`,
            "Content-Type": "application/json",
          }
        });
        console.log(response.data);
        onClose();
      }
      catch(error){
        console.error(error);
      }
    }

    return(
        <div className="fixed inset-0 p-8 overflow-auto backdrop-blur-sm bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white sm:p-6 p-4 lg:p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Add User</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter user's full name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
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
            <div className="mb-4">
              <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <select
                id="department"
                name="department"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              >
                <option value="">Select Department</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
                <option value="CIVIL">Civil</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Set Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter a strong password"
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
    )
}

export default UserAddform;