import React, { useEffect, useState } from "react";
import axios from "axios";

const Userprofile = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    if (!token) {
      console.log("No token found, redirecting to login...");
      setError(true);
      setLoading(false);
      return;
    }
    axios.get(`http://localhost:8080/users/userProfile?email=${email}`,{
        headers:{
            Authorization: `Bearer ${token}`,
        },
    })
      .then((response) => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log("Error Occurred:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="fixed inset-0 p-8 overflow-auto backdrop-blur-sm bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white sm:p-6 p-4 lg:p-8 border-indigo-900 border-4 rounded-lg shadow-lg w-full max-w-lg">
        <div className="md:flex justify-center">
          <div className="p-8 text-center">
            <div className="uppercase tracking-wide text-sm text-indigo-900 font-semibold">Profile</div>
            {loading ? (
              <p className="mt-4 text-gray-500">Loading profile data...</p>
            ) : error ? (
              <p className="mt-4 text-red-500">Error loading profile data. Please try again.</p>
            ) : (
              <>
                <p className="mt-2 text-gray-500 hover:text-indigo-900">Name: {profile.username}</p>
                <p className="mt-2 text-gray-500 hover:text-indigo-900">Department: {profile.department}</p>
                <p className="mt-2 text-gray-500 hover:text-indigo-900">Email: {profile.email}</p>
                <p className="mt-2 text-gray-500 hover:text-indigo-900">{profile.roles} at Bannari Amman Institute of Technology</p>
              </>
            )}
            <button className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded hover:bg-indigo-950" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;