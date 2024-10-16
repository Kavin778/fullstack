// Layout.jsx
import React from 'react';
import Sidebar from './sidenavbar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto sm:ml-72 lg:ml-72  bg-slate-200">
        {children}
        <div className=" max-w-24 md:w-24 lg:w-24 m-auto mt-4 ">
          <img className="object-contain" src="src\images\BIT LOGO.png"></img>
        </div>
        <div className="w-full h-12 sm:mx-2 text-center mb-8">
          <h2 className="font-sans text-xl font-semibold text-indigo-900">
            BANNARI AMMAN INSTITUTE OF TECHNOLOGY{' '}
          </h2>
          <h2 className="font-sans text-xl font-semibold text-indigo-900">
            RESOURCE BOOKING PORTAL{' '}
          </h2>
        </div>
        <div class="flex flex-col h-auto p-4 w-[95%] m-auto mb-10  md:flex-row md:gap-8 sm:gap-4 ">
          <div class="w-full rounded-lg shadow-lg md:w-1/3 h-48 mb-4 hover:bg-slate-50 hover:shadow-xl bg-slate-100 flex flex-col justify-end items-center">
            <button class="bg-indigo-200 hover:bg-indigo-800 md:w-16 lg:w-20 hover:shadow-lg h-12 w-24 mb-8 rounded-lg "></button>
          </div>
          <div class="w-full rounded-lg shadow-lg  md:w-1/3 h-48 mb-4 hover:bg-slate-50 hover:shadow-xl bg-slate-100">
            02
          </div>
          <div class="w-full rounded-lg shadow-lg  md:w-1/3 h-48 mb-4 hover:bg-slate-50 hover:shadow-xl bg-slate-100">
            03
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
