import React from "react";
 
const About =({isOpen, onClose})=>{
    if(!isOpen)return null;
    return(
        <div className="fixed inset-0 p-8 overflow-auto backdrop-blur-sm bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
         <div className="bg-white sm:p-6 p-4 lg:p-8 border-indigo-900 border-4 rounded-lg shadow-lg w-full max-w-lg ">
            <div class="md:flejustify-center">
                <div class="p-8 text-center ">
                <div class="uppercase tracking-wide text-sm text-indigo-900 font-semibold">About This Portal</div>
                <p class="mt-2 text-gray-500 hover:text-indigo-900">This is Resource Booking Portal for BANNARI AMMAN INSTITUTE OF TECHNOLOGY 
                </p>
                <p class="mt-2 text-gray-500 hover:text-indigo-900">Here you can book venues in BIT colleges for Academic purposes  
                </p>
                <button class="mt-4 bg-indigo-800 text-white px-4 py-2 rounded hover:bg-indigo-950" onClick={onClose}>Close</button>
                </div>
            </div>
         </div>
        </div>

    );
}
export default About;