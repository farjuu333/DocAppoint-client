"use client";
import { useEffect, useState } from "react";
import DoctorsCard from "./DoctorsCard";
import { Spinner } from "@heroui/react";

 

const TopRatedDoctors = () => {
  const [topDoctors, setTopDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/top-doctors`)
      .then((res) => res.json())
      .then((data) => {
        setTopDoctors(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching top doctors:", err);
        setLoading(false);
      });
  }, []);

 

if (loading) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">
      <Spinner size="lg" color="cyan"  />
      <p className="text-sm font-medium text-cyan-600 animate-pulse">
        Loading Top Doctors...
      </p>
    </div>
  );
}

  return (
    <section className="py-12 max-w-7xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Top Rated Doctors</h2>
        <p className="text-gray-500 mt-2">Meet our highest-rated specialists</p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {topDoctors.map((doctor) => (
          <DoctorsCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
};

export default TopRatedDoctors;