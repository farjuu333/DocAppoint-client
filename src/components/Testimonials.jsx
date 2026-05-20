"use client";
import React from 'react';
import { Star, MessageSquare } from 'lucide-react'; 

const patientReviews = [
  {
    id: 1,
    name: "Arif Al Rahman",
    role: "General Checkup",
    feedback: "The efficiency of this platform is unmatched. I managed to book an appointment with a top general physician within minutes, and the digital confirmation process was seamless.",
    rating: 5,
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Orthopedics Care",
    feedback: "I am highly impressed by the transparency here. Being able to see genuine specialist experience and final consultation fees upfront helps eliminate all unnecessary anxiety.",
    rating: 5,
  },
  {
    id: 3,
    name: "Tariqul Islam",
    role: "Dermatology Patient",
    feedback: "Managing my parents' routine medical checkups used to be an uphill task. Thanks to this streamlined system, scheduling specific slots has become completely hassle-free.",
    rating: 5,
  },
  {
    id: 4,
    name: "Dr. Farah Anjum",
    role: "Child Wellness",
    feedback: "As a working mother, time is everything. Finding an active pediatrician slot and getting an instant booking number saved us from long hours in the clinic waiting area.",
    rating: 5,
  },
  {
    id: 5,
    name: "Zeeshan Ahmed",
    role: "Neurology Consultation",
    feedback: "The user interface is exceptionally clean and intuitive. Navigating through different specialized departments and choosing verified experts was an absolute breeze.",
    rating: 5,
  },
  {
    id: 6,
    name: "Sadia Chowdhury",
    role: "Dental Treatment",
    feedback: "Excellent platform that bridges the gap between reliable healthcare and patients. The instant booking confirmation guarantees a highly professional experience.",
    rating: 5,
  }
];

const Testimonials = () => {
  return (
    <section className="pt-4 pb-16 bg-gradient-to-b from-white to-slate-50/50 max-w-7xl mx-auto px-4 md:px-8 mt-0 mb-12">
      
      
      <div className="text-center mb-12 space-y-3">
        <span className="bg-cyan-50 text-cyan-600 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-cyan-100">
          Patient Feedback
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-gray-800 tracking-tight">
          Stories of Trust & Seamless Care
        </h2>
        <p className="text-gray-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
          Discover how our transparent system transforms the medical appointment experience for thousands every single day.
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patientReviews.map((item) => (
          <div 
            key={item.id}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.012)] hover:shadow-[0_8px_30px_rgb(6,145,178,0.03)] hover:border-cyan-100/70 transition-all duration-300 relative flex flex-col justify-between group"
          >
            
            <div className="absolute top-6 right-6 text-slate-100 group-hover:text-cyan-50/70 transition-colors">
              <MessageSquare className="w-5 h-5 stroke-[1.5]" />
            </div>

            <div>
              
              <div className="flex items-center gap-0.5 mb-3.5">
                {[...Array(item.rating)].map((_, index) => (
                  <Star key={index} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              
              <p className="text-gray-500 text-xs leading-relaxed font-normal">
                {item.feedback}
              </p>
            </div>

            
            <div className="mt-5 pt-3.5 border-t border-gray-50 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-gray-800 text-xs tracking-wide">
                  {item.name}
                </h4>
                <p className="text-[10px] text-cyan-600 font-semibold mt-0.5">
                  {item.role}
                </p>
              </div>
              
              
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-200 group-hover:bg-cyan-500 transition-colors"></div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;