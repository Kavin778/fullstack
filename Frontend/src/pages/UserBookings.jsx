import React from "react";
import UserSidebar from "../components/UserSideBar";

const UserBookings =()=>{
    const bookings = [
        {
            venueName: "BIT AUDITORIUM",
            fromDate: "2024-10-01",
            toDate: "2024-10-02",
            fromTime: "10:00",
            toTime: "12:00",
            reason: "Workshop",
            status: "Pending",
        },
        {
            venueName: "EEE DEPARTMENT",
            fromDate: "2024-10-15",
            toDate: "2024-10-16",
            fromTime: "14:00",
            toTime: "16:00",
            reason: "Seminar",
            status: "Approved",
        },
        {
            venueName: "CIVIL ENGINEERING LAB",
            fromDate: "2024-10-29",
            toDate: "2024-10-30",
            fromTime: "09:00",
            toTime: "11:00",
            reason: "Meeting",
            status: "Rejected",
        },
        {
            venueName: "MECHANICAL ENGINEERING HALL",
            fromDate: "2024-11-12",
            toDate: "2024-11-13",
            fromTime: "13:00",
            toTime: "15:00",
            reason: "Cultural Event",
            status: "Pending",
        },
        {
            venueName: "VEDANAYAGAM AUDITORIUM",
            fromDate: "2024-11-26",
            toDate: "2024-11-27",
            fromTime: "15:00",
            toTime: "17:00",
            reason: "Guest Lecture",
            status: "Approved",
        },
    ];

    return (
        <div className="flex h-screen">
            <UserSidebar />
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
    
}

export default UserBookings;