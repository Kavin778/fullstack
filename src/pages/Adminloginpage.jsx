import React from 'react';
import { useNavigate } from 'react-router-dom';

const Adminloginpage = () => {
  const navigate = useNavigate();
  return (
    <div class="font-sans">
      <div class="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div class="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div class="text-center">
            <div class="m-auto w-16 ">
              <img
                class="  object-contain h-16 w-48"
                src="src\images\BIT LOGO.png"
              />
            </div>
            <h2 class="lg:text-5xlfont-sans text-indigo-800  text-4xl font-extrabold lg:leading-[55px] text-center">
              BIT-LOGIN
            </h2>
            <p class="text-lg text-indigo-800 text-center font-sans font-semibold mt-2">
              BIT RESOURCE BOOKING PORTAL - LOGIN WITH YOUR BIT ACCOUNT
            </p>
          </div>
          <form class="space-y-6 border rounded-md p-6 shadow-xl max-w-md md:ml-auto max-md:mx-auto w-full">
            <h3 class="text-2xl text-indigo-800 font-sans font-extrabold mb-2 text-center">
              ADMIN-LOGIN
            </h3>
            <div>
              <input
                name="email"
                type="email"
                autocomplete="email"
                required
                class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-indigo-800"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-indigo-800"
                placeholder="Password"
              />
            </div>
            <div class="!mt-10">
              <button
                onClick={() => navigate('/adminhome')}
                type="button"
                class="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-indigo-800 hover:bg-indigo-900 focus:outline-none"
              >
                Log in
              </button>
            </div>
            <p class="my-10 text-sm text-gray-400 text-center">
              or continue with
            </p>
            <div class="space-x-6  flex justify-center">
              <button
                onClick={() => navigate('/adminhome')}
                type="button"
                class="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              >
                <img
                  src="src\images\Google icon.png"
                  alt="Google Icon"
                  class="w-6 h-6 mr-2"
                />
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Adminloginpage;
