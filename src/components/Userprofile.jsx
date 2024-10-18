import React from "react";

const Userprofile =({isOpen, onClose })=>{
    if(!isOpen)return null;

    return(
        <div className="fixed inset-0 p-8  overflow-auto backdrop-blur-sm bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
         <div className="bg-white sm:p-6 p-4 lg:p-8 rounded-lg shadow-lg w-full max-w-lg ">
  <div class="md:flex">
    <div class="p-8 text-center">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">User Profile</div>
      <h1 class="block mt-1 text-lg leading-tight font-medium text-black">User</h1>
      <p class="mt-2 text-gray-500">Faculty at Bannari Amman Institute Of Technology</p>
      <button class="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600" onClick={onClose}>Close</button>
    </div>
  </div>
</div>
</div>

    );

};
export default Userprofile;