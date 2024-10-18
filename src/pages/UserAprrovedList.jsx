import React from "react";
import UserSidebar from "../components/UserSideBar";

const UserApprovedList = () => {
    // Sample booking data with a two-week gap in dates
    const bookings = [
        {
            venueName: "BIT AUDITORIUM",
            fromDate: "2024-10-01",
            toDate: "2024-10-02",
            fromTime: "10:00",
            toTime: "12:00",
            reason: "Workshop",
        },
        {
            venueName: "VEDANAYAGAM AUDITORIUM",
            fromDate: "2024-10-15",
            toDate: "2024-10-16",
            fromTime: "14:00",
            toTime: "16:00",
            reason: "Seminar",
        },
        {
            venueName: "LIB CONFERENCE ROOM",
            fromDate: "2024-10-29",
            toDate: "2024-10-30",
            fromTime: "09:00",
            toTime: "11:00",
            reason: "Meeting",
        },
        {
            venueName: "BIT AUDITORIUM",
            fromDate: "2024-11-12",
            toDate: "2024-11-13",
            fromTime: "13:00",
            toTime: "15:00",
            reason: "Cultural Event",
        },
        {
            venueName: "VEDANAYAGAM AUDITORIUM",
            fromDate: "2024-11-26",
            toDate: "2024-11-27",
            fromTime: "15:00",
            toTime: "17:00",
            reason: "Guest Lecture",
        },
        {
            venueName: "LIB CONFERENCE ROOM",
            fromDate: "2024-12-10",
            toDate: "2024-12-11",
            fromTime: "11:00",
            toTime: "13:00",
            reason: "Department Meeting",
        },
        {
            venueName: "BIT AUDITORIUM",
            fromDate: "2024-12-24",
            toDate: "2024-12-25",
            fromTime: "09:00",
            toTime: "11:00",
            reason: "Christmas Celebration",
        },
        {
            venueName: "VEDANAYAGAM AUDITORIUM",
            fromDate: "2025-01-07",
            toDate: "2025-01-08",
            fromTime: "14:00",
            toTime: "16:00",
            reason: "New Year Party",
        },
        {
            venueName: "LIB CONFERENCE ROOM",
            fromDate: "2025-01-21",
            toDate: "2025-01-22",
            fromTime: "09:00",
            toTime: "11:00",
            reason: "Team Building",
        },
        {
            venueName: "BIT AUDITORIUM",
            fromDate: "2025-02-04",
            toDate: "2025-02-05",
            fromTime: "13:00",
            toTime: "15:00",
            reason: "Annual Conference",
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
                    <h1 className="p-1">- - - Details Of your Approved Bookings - - -</h1>
                </div>

                <div className="flex flex-wrap justify-center">
                    {bookings.map((booking, index) => (
                        <div 
                            key={index} 
                            className="max-w-xs min-h-[200px] rounded overflow-hidden hover:bg-indigo-800 shadow-xl hover:shadow-indigo-900 hover:text-white shadow-lg bg-white m-4 flex flex-col justify-between"
                        >
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{booking.venueName}</div>
                                <p className="text-base">From Date: {booking.fromDate}</p>
                                <p className="text-base">To Date: {booking.toDate}</p>
                                <p className="text-base">From Time: {booking.fromTime}</p>
                                <p className="text-base">To Time: {booking.toTime}</p>
                                <p className="text-base">Reason: {booking.reason}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default UserApprovedList;
