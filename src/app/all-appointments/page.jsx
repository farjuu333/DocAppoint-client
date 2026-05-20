"use client";
import React, { useState, useEffect } from 'react';
import DoctorsCard from '@/components/DoctorsCard';

import { FiSearch } from "react-icons/fi"; 
import { Spinner } from '@heroui/react';

const AllAppointmentsPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchDoctors = async (searchQuery = "") => {
    try {
      setLoading(true);
      const url = searchQuery 
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/doctor?search=${searchQuery}`
        : `${process.env.NEXT_PUBLIC_SERVER_URL}/doctor`;
        
    //   const res = await fetch(url);
      const res = await fetch(url, { cache: 'no-store' });
      const data = await res.json();
      setDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchDoctors(searchTerm);
  };

  return (
    <div className='container mx-auto mb-20 px-4'>
      
      <div className="text-center my-10 space-y-2">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">All Appointments</h1>
        <p className="text-gray-400 text-sm font-medium">Find the right doctor for you.</p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-12">
        <form onSubmit={handleSearch} className="w-full max-w-xl flex gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.03)] bg-white p-2 rounded-full border border-gray-100">
          <div className="flex items-center flex-1 px-3 gap-2">
            <FiSearch className="text-gray-400 text-lg" />
            <input 
              type="text"
              placeholder="Search by doctor name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent focus:outline-none text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
          <button 
            type="submit" 
            className="bg-[#48C8D0] hover:bg-[#3db3bb] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm"
          >
            Search
          </button>
        </form>
      </div>

    
      {loading ? (
        <div className="flex flex-col justify-center items-center my-24 gap-3">
        
          <Spinner size="lg" color="primary" className="text-[#48C8D0]" />
          <p className="text-gray-400 text-sm font-semibold tracking-wider uppercase">Loading Experts...</p>
        </div>
      ) : doctors.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {doctors.map(doctor => (
            <DoctorsCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 text-sm font-medium my-20">
          No doctors found with name "{searchTerm}"
        </div>
      )}
    </div>
  );
};

export default AllAppointmentsPage;