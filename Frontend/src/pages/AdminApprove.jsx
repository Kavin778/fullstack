import React from "react";
import Sidebar from "../components/sidenavbar";

const bookingRequests = [
    {
        id: 1,
        venueName: "Conference Room A",
        name: "Mr.Kavin",
        dept: "CSE",
        fromDate: "2024-11-10",
        toDate: "2024-11-12",
        fromTime: "10:00 AM",
        toTime: "04:00 PM",
        reason: "Team Workshop",
    },
    {
        id: 2,
        venueName: "Auditorium",
        name: "Mr.Kavin",
        dept: "CSE",
        fromDate: "2024-11-15",
        toDate: "2024-11-17",
        fromTime: "09:00 AM",
        toTime: "05:00 PM",
        reason: "Annual Meetup",
    },
    {
      id: 3,
      venueName: "Mechanical Seminar HAll",
      name: "Mr.Kavin",
      dept: "CSE",
      fromDate: "2024-11-15",
      toDate: "2024-11-17",
      fromTime: "09:00 AM",
      toTime: "05:00 PM",
      reason: "Annual Meetup",
  },
];

const AdminApprove = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 overflow-x-hidden sm:ml-72 lg:ml-72 bg-white">
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
                <div className="h-10 text-indigo-600 md:text-2xl text-center">
                    <h1 className="p-1">- - - Admin Approval for Booking Requests - - -</h1>
                </div>

                <div className="flex flex-wrap justify-center">
                    {bookingRequests.map((request, index) => (
                        <div
                            key={index}
                            className="max-w-xs min-h-[250px] rounded overflow-hidden hover:bg-indigo-800 shadow-xl hover:shadow-indigo-900 hover:text-white bg-white m-4 flex flex-col justify-between"
                        >
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{request.venueName}</div>
                                <p className="text-base">Applied by: {request.name}</p>
                                <p className="text-base">Department: {request.dept}</p>
                                <p className="text-base">From Date: {request.fromDate}</p>
                                <p className="text-base">To Date: {request.toDate}</p>
                                <p className="text-base">From Time: {request.fromTime}</p>
                                <p className="text-base">To Time: {request.toTime}</p>
                                <p className="text-base">Reason: {request.reason}</p>
                      
                            </div>
                            <div className="flex justify-center gap-2 mb-4">
                                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                                    Approve
                                </button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                                    Reject
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default AdminApprove;
