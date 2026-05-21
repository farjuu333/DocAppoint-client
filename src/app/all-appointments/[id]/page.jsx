import BookingTriggerSection from '@/components/BookingTriggerSection';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import { redirect } from 'next/navigation'; 
import React from 'react';
import { FaRegCalendar, FaBriefcase, FaHospital, FaDollarSign } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';

export async function generateMetadata({ params }) {
    const { id } = await params;

    try {

        const sessionToken = await auth.api.getToken({
            headers: await headers()
        });
        const token = sessionToken?.token;
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctor/${id}`, {
            headers: {
                authorization: `Bearer ${token}`
            },
            next: { revalidate: 60 } 
        });
        
        if (!res.ok) throw new Error();
        
        const doctor = await res.json();
        const doctorName = doctor?.name || "Doctor";
        const specialty = doctor?.specialty || "Specialist";

        return {
            title: `Dr. ${doctorName} | ${specialty} - DocAppoint`,
            description: doctor?.description || `Book an appointment with Dr. ${doctorName}, specializing in ${specialty}.`,
            openGraph: {
                title: `Dr. ${doctorName} | ${specialty}`,
                description: doctor?.description,
                images: doctor?.image ? [{ url: doctor.image }] : [],
            },
        };
    } catch (error) {
        
        return {
            title: "Doctor Details | DocAppoint",
            description: "View doctor professional details and schedule an appointment.",
        };
    }
}



const DoctorDetailsPage = async ({ params }) => {
    const { id } = await params;
    
    
    const sessionToken = await auth.api.getToken({
      headers: await headers()
    });

    const token = sessionToken?.token;
    
    
    if (!token) {
        redirect(`/login?redirectTo=/all-appointments/${id}`);
    }
    
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctor/${id}`, {
      headers: {
        authorization: `Bearer ${token}`
      },
      cache: 'no-store' 
    });

    
    if (res.status === 401 || res.status === 403) {
        redirect(`/login?redirectTo=/all-appointments/${id}`);
    }

    if (!res.ok) {
        return <div className="text-center my-12 text-red-500">Failed to load doctor details.</div>;
    }

    const doctor = await res.json();
    
    const { image, fee, name, specialty, experience, hospital, location, description, availability } = doctor;

    return (
        <div className="max-w-6xl mx-auto my-12 px-4">
            <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                
                {/* Image Container */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="relative w-full aspect-square max-w-[320px] rounded-2xl overflow-hidden shadow-md">
                        <Image 
                            className="object-cover" 
                            alt={name} 
                            src={image} 
                            fill
                            priority
                        />
                    </div>
                </div>

                {/* Content Details */}
                <div className="w-full md:w-2/3 flex flex-col justify-between">
                    <div>
                        <span className="bg-cyan-50 text-cyan-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                            {specialty || "Cardiologist"}
                        </span>
                        
                        <h2 className="text-3xl font-extrabold text-gray-800 mt-2 mb-1">{name}</h2>
                        
                        <div className="flex items-center gap-1 text-sm mb-4">
                            <span className="text-amber-500">★</span>
                            <span className="font-bold text-gray-700">4.9</span>
                            <span className="text-gray-400">(5.0)</span>
                        </div>

                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            {description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="p-2.5 bg-blue-50 text-blue-500 rounded-lg"><FaBriefcase /></div>
                                <div>
                                    <p className="text-xs text-gray-400 font-medium">Experience</p>
                                    <p className="text-sm font-semibold text-gray-700">{experience}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="p-2.5 bg-cyan-50 text-cyan-500 rounded-lg"><FaHospital /></div>
                                <div>
                                    <p className="text-xs text-gray-400 font-medium">Hospital</p>
                                    <p className="text-sm font-semibold text-gray-700">{hospital}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="p-2.5 bg-teal-50 text-teal-500 rounded-lg"><LuMapPin /></div>
                                <div>
                                    <p className="text-xs text-gray-400 font-medium">Location</p>
                                    <p className="text-sm font-semibold text-gray-700">{location}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="p-2.5 bg-emerald-50 text-emerald-500 rounded-lg"><FaDollarSign /></div>
                                <div>
                                    <p className="text-xs text-gray-400 font-medium">Consultation Fee</p>
                                    <p className="text-sm font-semibold text-gray-700">৳ {fee}</p>
                                </div>
                            </div>
                        </div>

                        {availability && availability.length > 0 && (
                            <div className="mb-6">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Availability</p>
                                <div className="flex flex-wrap gap-2">
                                    {availability.map((slot, index) => (
                                        <span key={index} className="bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1.5 rounded-md border border-emerald-100">
                                            {slot}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mt-4">
                        <BookingTriggerSection doctor={doctor} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DoctorDetailsPage;