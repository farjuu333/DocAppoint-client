"use client";
import React from 'react';
import { Button } from '@heroui/react';
import { ShieldCheck, Zap, Heart, Award } from 'lucide-react'; 

const features = [
  {
    id: 1,
    title: "Verified Specialists",
    desc: "Every medical practitioner on our platform goes through a strict background and credential verification process.",
    icon: <ShieldCheck className="w-6 h-6 text-cyan-600" />,
  },
  {
    id: 2,
    title: "Instant Live Booking",
    desc: "No more waiting in phone queues. Check real-time doctor slots and secure your token within seconds.",
    icon: <Zap className="w-6 h-6 text-amber-500" />,
  },
  {
    id: 3,
    title: "Patient-Centric Care",
    desc: "We prioritize your comfort and health journey, providing transparent consultation fees and history tracking.",
    icon: <Heart className="w-6 h-6 text-rose-500" />,
  },
  {
    id: 4,
    title: "Top-Tier Excellence",
    desc: "Connect with highly recognized hospital specialists and award-winning doctors in various fields.",
    icon: <Award className="w-6 h-6 text-emerald-500" />,
  }
];

const WhyChooseUs = () => {
  return (
    <section className="pt-4 pb-16 max-w-7xl mx-auto px-4 mt-0 mb-0">
      
     
      <div className="text-center mb-16 space-y-2">
        <span className="bg-cyan-50 text-cyan-600 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
          Our Promise
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
          Why Choose DocAppoint?
        </h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
          Built around your health and your time with maximum trust.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        
        <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-tight">
            Why Hundreds of Patients Trust Us Daily
          </h3>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
            We bridge the gap between world-class healthcare specialists and patients, ensuring a seamless, secure, and transparent booking experience.
          </p>
          <div className="pt-2">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-5 rounded-xl shadow-md transition-all">
              Learn More About Us
            </Button>
          </div>
        </div>

      
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="p-6 bg-white rounded-3xl border border-gray-200 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(8,145,178,0.04)] hover:border-cyan-100 transition-all duration-300"
            >
              <div className="p-3 bg-slate-50 w-fit rounded-2xl mb-4">
                {feature.icon}
              </div>
              <h4 className="text-base font-bold text-gray-800 mb-1.5">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;