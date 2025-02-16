import React from "react";
import Sidebar from "../components/sidenavbar";

const AdminHistory =()=>{
    const bookings = [
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
    return(
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
                <h1 className="p-1">- - - Details Of your Bookings - - -</h1>
            </div>

            <div className="flex flex-wrap justify-center">
                {bookings.map((booking, index) => (
                    <div
                        key={index}
                        className="max-w-xs min-h-[220px] rounded overflow-hidden hover:bg-indigo-800 hover:shadow-indigo-900 hover:text-white shadow-xl bg-white m-4 flex flex-col justify-between"
                    >
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{booking.venueName}</div>
                            <p className="text-base">From Date: {booking.fromDate}</p>
                            <p className="text-base">To Date: {booking.toDate}</p>
                            <p className="text-base">From Time: {booking.fromTime}</p>
                            <p className="text-base">To Time: {booking.toTime}</p>
                            <p className="text-base">Reason: {booking.reason}</p>
                            <p className={`text-base font-semibold ${
                                booking.status === "Approved" ? "text-green-600" :
                                booking.status === "Rejected" ? "text-red-600" : "text-yellow-500"
                            }`}>
                                Status: {booking.status}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    </div>
    );
};

export default AdminHistory;