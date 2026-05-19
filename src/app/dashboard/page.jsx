

"use client";
import React, { useState } from 'react';
import MyBookingsPage from './my-bookings/page';
import ProfilePage from './my-profile/page';

const DashboardPage = () => {
    
    const [activeTab, setActiveTab] = useState('bookings');

    return (
        
        <div className="max-w-7xl mx-auto px-4 mt-10 mb-20 w-full flex flex-col items-start justify-start text-left">
            
            
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>

            
            <div className="flex items-center gap-3 bg-gray-100 p-1.5 rounded-2xl w-fit mb-8">
                <button
                    onClick={() => setActiveTab('bookings')}
                    className={`px-5 py-2 text-sm font-semibold rounded-xl transition-all ${
                        activeTab === 'bookings'
                            ? 'bg-white text-gray-800 shadow-sm'
                            : 'text-gray-500 hover:text-gray-800'
                    }`}
                >
                    My Bookings
                </button>
                
                <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-5 py-2 text-sm font-semibold rounded-xl transition-all ${
                        activeTab === 'profile'
                            ? 'bg-white text-gray-800 shadow-sm'
                            : 'text-gray-500 hover:text-gray-800'
                    }`}
                >
                    My Profile
                </button>
            </div>

    
            <div className="w-full flex flex-col items-start justify-start">
                {activeTab === 'bookings' && <MyBookingsPage />}
                {activeTab === 'profile' && <ProfilePage />}
            </div>
        </div>
    );
};

export default DashboardPage;