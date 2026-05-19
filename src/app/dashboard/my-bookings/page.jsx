

"use client";

import React, { useEffect, useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';

import { DeleteBooking } from '@/components/DeleteBooking';
import UpdateBooking from '@/components/UpdateBooking';

const MyBookingsPage = () => {
    const { data: session, isPending } = authClient.useSession();
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            if (session?.user?.id) {
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${session.user.id}`, {
                        cache: 'no-store'
                    });
                    const data = await res.json();
                    setBookings(data);
                } catch (error) {
                    console.error("Error fetching bookings:", error);
                }
            }
        };

        if (!isPending) {
            fetchBookings();
        }
    }, [session, isPending]);


    if (isPending) return null;
    if (!session?.user) {
        return (
            <div className='text-center mt-10'>
                <p className='text-red-500 font-medium'>Please log in to view your bookings.</p>
            </div>
        );
    }

    return (
        <div className='w-full'>
            
            {bookings.length === 0 ? (
                <div className="bg-white p-12 text-center rounded-2xl border border-dashed border-gray-300">
                    <p className="text-gray-400">You haven't booked any appointments yet.</p>
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-items-start'>
                    {bookings.map(booking => (
                        <div 
                            key={booking._id} 
                            className='border border-gray-100 p-6 rounded-3xl bg-white shadow-sm flex flex-col justify-between max-w-md transition hover:shadow-md'
                        >
                            <div className="space-y-3">
                                <h2 className='text-2xl font-bold text-cyan-700'>{booking.doctorName}</h2>
                                
                                <div className="space-y-1.5 text-gray-600 text-sm">
                                    <p className="flex items-center gap-1">
                                        <span className="text-gray-400">Patient:</span> 
                                        <span className="font-medium text-gray-700">{booking.patientName}</span>
                                    </p>
                                    
                                    <p className="flex items-center gap-1">
                                        <span className="text-gray-400">Date:</span> 
                                        <span className="font-medium text-gray-700">
                                            {booking.appointmentDate ? new Date(booking.appointmentDate).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric"
                                            }) : "N/A"}
                                        </span>
                                    </p>
                                    
                                    <p className="flex items-center gap-1">
                                        <span className="text-gray-400">Time:</span> 
                                        <span className="font-medium text-gray-700">{booking.appointmentTime}</span>
                                    </p>
                                    
                                    <p className="flex items-start gap-1">
                                        <span className="text-gray-400">Reason:</span> 
                                        <span className="font-medium text-gray-700 italic">"{booking.reason || "N/A"}"</span>
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-center gap-3 mt-6 pt-4 border-t border-gray-100'>
                                 <UpdateBooking booking={booking} /> 
                                <DeleteBooking bookingId={booking._id} />
                            </div> 
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookingsPage;