import React, { useState } from 'react';
import Sidebar from './sidenavbar';
import { useNavigate } from 'react-router-dom';
import UserAddform from './UserAddform';
import DeleteUser from './DeleteUser';

const AdminLayout = () => {
  const navigate = useNavigate();
  const [useradd,setUserAddOpen] = useState(false);
  const [userdelete,setUserDelete] = useState(false);
  
  const DeleteUserOpen =()=>{
    setUserDelete(true);
  }
  const DeleteuserClose =()=>{
    setUserDelete(false);
  }
  const AddUserOpen =()=>{
    setUserAddOpen(true);
  }

  const AddUserClose =()=>{
    setUserAddOpen(false);
  }

  

  return (
    <div className="flex h-screen ">
      <Sidebar />
      <main className="flex-1 overflow-hidden sm:ml-72 lg:ml-72 bg-white">
        <div className="max-w-24 md:w-24 lg:w-24 m-auto mt-4">
          <img className="object-contain" src="src/images/BIT LOGO.png" alt="BIT Logo" />
        </div>
        <div className="w-full h-12 sm:mx-2 text-center mb-8">
          <h2 className="font-sans text-xl font-semibold text-indigo-900">
            BANNARI AMMAN INSTITUTE OF TECHNOLOGY
          </h2>
          <h2 className="font-sans text-xl font-semibold text-indigo-900">
            RESOURCE BOOKING PORTAL
          </h2>
        </div>
        <div className="flex flex-col h-auto w-[95%] m-auto mb-1 md:flex-row p-2 md:gap-8 sm:gap-4">
          <div className="group w-full rounded-lg shadow-lg hover:shadow-indigo-900 md:w-1/2 h-48 mb-4 text-center hover:bg-indigo-800 hover:text-white hover:shadow-xl bg-white flex flex-col justify-center items-center">
            <h2 className="m-8 lg:text-2xl md:text-xl sm:text-lg font-semibold">Add User</h2>
            <button onClick={AddUserOpen}
              className="bg-indigo-800 text-white group-hover:bg-white group-hover:text-indigo-800 md:text-sm md:w-24 lg:w-24 hover:shadow-lg h-12 w-24 mb-8 rounded-lg"
            >
              Add
            </button>
          </div>
          <div className="group w-full rounded-lg shadow-lg hover:shadow-indigo-900 md:w-1/2 h-48 mb-4 text-center hover:bg-indigo-800 hover:text-white hover:shadow-xl bg-white flex flex-col justify-center items-center">
            <h2 className="m-8 lg:text-2xl md:text-xl sm:text-lg font-semibold">Delete User</h2>
            <button onClick={DeleteUserOpen}
              className="bg-indigo-800 text-white group-hover:bg-white group-hover:text-indigo-800 md:text-sm md:w-24 lg:w-24 hover:shadow-lg h-12 w-24 mb-8 rounded-lg"
            >
              Delete
            </button>
          </div>
          <div className="group w-full rounded-lg shadow-lg hover:shadow-indigo-900 md:w-1/2 h-48 mb-4 text-center hover:bg-indigo-800 hover:text-white hover:shadow-xl bg-white flex flex-col justify-center items-center">
            <h2 className="m-8 lg:text-2xl md:text-xl sm:text-lg font-semibold">To Approve</h2>
            <button onClick={()=>navigate('/admin-approve')}
               className="bg-indigo-800 text-white group-hover:bg-white group-hover:text-indigo-800 md:text-sm md:w-24 lg:w-24 hover:shadow-lg h-12 w-24 mb-8 rounded-lg"
            >
              Approve
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-col h-auto p-4 w-[95%] m-auto mb-10 md:flex-row md:gap-8 sm:gap-4">
        <div className="w-full rounded-lg md:w-1/2 h-48 mb-4 text-center flex flex-col border-2 border-indigo-900 hover:bg-indigo-800 hover:text-white justify-top items-center">
            <h2 className="m-8 text-xl lg:text-2xl md:text-2xl sm:text-xl font-semibold">To Approve </h2>
            <h2 className="xl:text-6xl text-2xl lg:text-4xl md:text-4xl sm:text-2xl font-semibold">3</h2>
          </div>
          <div className="w-full rounded-lg md:w-1/2 h-48 mb-4 text-center flex flex-col border-2 border-indigo-900 hover:bg-indigo-800 hover:text-white justify-top items-center">
            <h2 className="m-8 lg:text-2xl text-xl md:text-2xl sm:text-xl font-semibold">Rejected Bookings</h2>
            <h2 className="xl:text-6xl text-2xl lg:text-4xl md:text-4xl sm:text-2xl font-semibold">2</h2>
          </div>
          <div className="w-full rounded-lg md:w-1/2 h-48 mb-4 text-center flex flex-col border-2 border-indigo-900 hover:bg-indigo-800 hover:text-white justify-top items-center">
            <h2 className="m-8 text-xl lg:text-2xl md:text-2xl  sm:text-xl font-semibold">Total Bookings</h2>
            <h2 className="xl:text-6xl text-2xl lg:text-4xl md:text-4xl sm:text-2xl font-semibold">5</h2>
          </div>
        </div>
      </main>
      {useradd && <UserAddform isOpen={useradd} onClose={AddUserClose}/>}
      {userdelete && <DeleteUser isOpen={userdelete} onClose={DeleteuserClose}/>}
    </div>
  );
};

export default AdminLayout;
