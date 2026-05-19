// import React from 'react';

// const MyBookingsPage = () => {
//     return (
//         <div>
//             my book
//         </div>
//     );
// };

// export default MyBookingsPage; 
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { Button } from '@heroui/react';
import { BookingCancelAlert } from '@/components/DeleteBooking';
import UpdateBookingModal from '@/components/UpdateBooking';
// import UpdateBookingModal from '@/components/UpdateBookingModal'; 
// import { BookingCancelAlert } from '@/components/BookingCancelAlert';

const MyBookingsPage = async () => {
    
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
        cache: 'no-store'
    });
    const bookings = await res.json();

    return (
        <div className='max-w-7xl mx-auto mb-20 px-4'>
            <h1 className='text-3xl font-bold mb-6 text-gray-800'>My Bookings</h1>

            
            {bookings.length === 0 ? (
                <div className="bg-white p-12 text-center rounded-2xl border border-dashed border-gray-300">
                    <p className="text-gray-400">You haven't booked any appointments yet.</p>
                </div>
            ) : (
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {bookings.map(booking => (
                        <div 
                            key={booking._id} 
                            className='border border-gray-100 p-6 rounded-3xl bg-white shadow-sm flex flex-col justify-between max-w-sm transition hover:shadow-md'
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
                                
                                 <UpdateBookingModal booking={booking} /> 

                                
                                <BookingCancelAlert bookingId={booking._id} />
                            </div> 
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookingsPage;