import React, { useEffect, useState } from "react";
import UserSidebar from "../components/UserSideBar";
import axios from "axios";

const UserApprovedList = () => {

    const[bookings,setBookings] = useState([]);
    const email = localStorage.getItem("email");
    useEffect(()=>{
        const fetchApprovedBookings= async()=>{
            const api = `http://localhost:8080/booking/getApprovedBookings?email=${email}`;
            try{
                const token = localStorage.getItem("token");
                if (!token) {
                console.error("Authentication error: You must be logged in to see booking options.");
                return;
                }
                const configs = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
                };
                const response = await axios.get(api,configs);

                setBookings(response.data);
            }
            catch(err){
                console.error("an errror occured")
            }
        }
        fetchApprovedBookings();
    },[])
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
                            className="max-w-xs min-h-[200px] rounded overflow-hidden hover:bg-indigo-800 shadow-xl hover:shadow-indigo-900 hover:text-white bg-white m-4 flex flex-col justify-between"
                        >
                            <div className="px-6 py-2">
                                <div className="font-bold text-xl">{booking.venues.name}</div>
                                <p className="text-base">Booked Date: {booking.booked_date}</p>
                                <p className="text-base">Booked Time: {booking.booked_time}</p>
                                <p className="text-base">Timing: {booking.timeFrame.timeRange}</p>
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
