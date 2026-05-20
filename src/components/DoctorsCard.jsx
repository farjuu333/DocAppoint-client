

import { Button } from "@heroui/react";

import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar, FaStar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const DoctorsCard = ({ doctor }) => {
  const { _id, image, fee, name, specialty, description, rating, experience, location } = doctor;

  return (
    <div className="flex flex-col justify-between max-w-sm bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-all duration-300 h-full">
      
      {/* Image & Rating Container */}
      <div className="relative w-full p-3 pb-0"> 
       
        <div className="relative w-full h-60 overflow-hidden rounded-2xl">
          <Image
            alt={name}
            src={image}
            fill
            className="object-cover object-top" 
            priority
          />
          {/* Top Right Rating Badge (Matched with Image 2) */}
          {rating && (
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 px-2.5 py-1 rounded-xl text-xs font-bold flex items-center gap-1 shadow-sm">
              <FaStar className="text-amber-400 text-xs" />
              <span>{rating}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content Details */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          {/* Name & Specialty */}
          <h2 className="text-xl font-bold text-gray-800 tracking-tight">{name}</h2>
          <p className="text-xs font-semibold text-cyan-600 mt-0.5 mb-3">{specialty}</p>
          
          {/* Description */}
          <p className="text-gray-400 text-xs line-clamp-2 mb-4 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Info Area */}
        <div>
          {/* Location & Experience */}
          <div className="flex flex-col gap-1.5 text-xs text-gray-400 mb-5">
            <div className="flex items-center gap-2">
              <LuMapPin className="text-gray-400 text-sm shrink-0" />
              <span className="truncate">{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCalendar className="text-gray-400 text-sm shrink-0" />
              <span>{experience}  experience</span>
            </div>
          </div>

          <hr className="border-gray-100 my-4" />

          {/* Consultation Fee and Action Button */}
          <div className="flex items-center justify-between items-end">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">Consultation</p>
              <h3 className="text-xl font-bold text-cyan-600">৳{fee}</h3>
            </div>
            
            <Link href={`/all-appointments/${_id}`}>
              <Button 
                size="sm"
                className="bg-cyan-600 hover:bg-cyan-600 text-white font-semibold px-5 py-4 text-xs rounded-xl shadow-sm transition-colors"
              >
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
