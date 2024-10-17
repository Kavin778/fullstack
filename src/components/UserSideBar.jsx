import { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function UserSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        className="inline-flex items-center w-10 hover:shadow-lg text-sm text-gray-500 sm:hidden  hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setOpen(!open)}
        aria-controls="default-sidebar"
        aria-label="Open sidebar"
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="ml-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-menu"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>
      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-72 h-screen transition-transform ${open ? '-translate-x-0' : '-translate-x-full'} sm:translate-x-0 bg-gray-50 dark:bg-gray-800`}
        aria-label="Sidebar"
      >
        <button
          className="absolute top-3 right-3 p-2 text-gray-500 rounded-lg sm:hidden hover:bg-indigo-800 hover:text-white  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => setOpen(false)}
          aria-label="Close sidebar"
        >
          <span className="sr-only">Close sidebar</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        <div className="h-full bg-white   py-4  px-3 overflow-y-auto">
          <div className="h-12 w-1/4  mx-24 ">
            <img className="object-contain" src="src\images\BIT LOGO.png"></img>
          </div>
          <div className="w-full h-12 text-center mb-6">
            <h2 className="font-sans text-lg font-semibold text-indigo-900">
              Bannari Amman Institute of Technology
            </h2>
          </div>
          <hr className="border-indigo-900 border-t-2 w-full mb-4"></hr>
          <ul>
            <li>
              <button className="flex mb-2 font-sans font-semibold text-lg items-center hover:shadow-xl p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-indigo-800 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-home"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span className="ms-3">Home</span>
              </button>
            </li>
          </ul>
          <ul>
            <li className="relative">
              <button className="flex mb-2 font-sans font-semibold items-center hover:shadow-xl p-2 w-full text-gray-900 rounded-lg dark:text-white text-lg hover:bg-indigo-800 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notebook-tabs"><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M15 2v20"/><path d="M15 7h5"/><path d="M15 12h5"/><path d="M15 17h5"/></svg>
                <span className="ms-3">Venue Details</span>
              </button>
            </li>
          </ul>
          <ul>
            <li>
              <button className="flex mb-2 font-sans font-semibold items-center hover:shadow-xl p-2 w-full text-gray-900 rounded-lg dark:text-white text-lg hover:bg-indigo-800 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                <span className="ms-3">Approved Bookings</span>
              </button>
            </li>
          </ul>
          <ul>
            <li>
              <button className="flex mb-2 font-sans font-semibold items-center hover:shadow-xl p-2 w-full text-gray-900 rounded-lg dark:text-white text-lg hover:bg-indigo-800 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-arrow-down"><path d="M12.338 21.994A10 10 0 1 1 21.925 13.227"/><path d="M12 6v6l2 1"/><path d="m14 18 4 4 4-4"/><path d="M18 14v8"/></svg>
                <span className="ms-3">Pending Bookings</span>
              </button>
            </li>
          </ul>
          <ul>
            <li>
              <button className="flex mb-2 font-sans font-semibold items-center hover:shadow-xl p-2 w-full text-gray-900 rounded-lg dark:text-white text-lg hover:bg-indigo-800 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-log-out"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" x2="9" y1="12" y2="12" />
                </svg>
                <span className="ms-3">Logout</span>
              </button>
            </li>
          </ul>
          <ul>
            <li>
              <button className="flex mb-2 font-sans font-semibold items-center hover:shadow-xl p-2 w-full text-gray-900 rounded-lg dark:text-white text-lg hover:bg-indigo-800 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-info"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                <span className="ms-3">About</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default UserSidebar;