


"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from "framer-motion";
import { FaArrowRight, FaPlayCircle, FaStethoscope } from 'react-icons/fa';
import { RiVerifiedBadgeFill } from "react-icons/ri";


import BannerImg1 from '@/assets/banner.jpg';
import BannerImg2 from '@/assets/hero.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: "Your Health, Our Priority. Anytime, Anywhere.",
    highlight: "Anytime, Anywhere.",
    desc: "Connect with top-rated specialists and book your appointment in seconds. Experience healthcare that truly cares for you.",
    img: BannerImg1, 
    stats: "500+ Specialists"
  },
  {
    title: "Expert Medical Care You Can Trust",
    highlight: "You Can Trust",
    desc: "Access a network of verified doctors and world-class medical facilities. Reliable healthcare solutions, just a click away.",
    img: BannerImg2, 
    stats: "50k+ Happy Patients"
  }
];

const Hero = () => {
  return (
    <section className="w-full px-2 sm:px-4 pt-2 md:pt-6 pb-10 overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl max-w-7xl mx-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative min-h-[480px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px] flex items-center bg-[#001e2f]">
              
              {/* Background Image - Path corrected by using slide.img */}
              <div className="absolute inset-0">
                <Image
                  src={slide.img} 
                  fill
                  className="object-cover opacity-90 md:opacity-100"
                  alt={`banner-${index}`}
                  priority
                />
                
                <div className="absolute inset-0 bg-black/30 md:bg-transparent md:bg-gradient-to-r md:from-black/50 md:to-transparent"></div>
              </div>

              {/* Content Grid */}
              <div className="relative z-10 w-full px-4 sm:px-8 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center py-10 md:py-0">
                
                {/* Left Side: Text Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center lg:text-left flex flex-col items-center lg:items-start drop-shadow-md"
                >
                  <div className="flex items-center gap-2 bg-[#48C8D0] text-white px-3 py-1 rounded-full mb-4 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                    <RiVerifiedBadgeFill /> No. 1 Healthcare Platform
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 leading-[1.2] text-white">
                    {slide.title.split(slide.highlight)[0]}
                    <span className="text-[#48C8D0] block lg:inline-block">{slide.highlight}</span>
                  </h1>
                  
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8 max-w-lg leading-relaxed font-medium">
                    {slide.desc}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button className="bg-[#48C8D0] hover:bg-[#3ba7af] text-white px-8 py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 active:scale-95 text-sm md:text-base shadow-lg shadow-[#48C8D0]/20">
                      Book Now <FaArrowRight />
                    </button>
                    <button className="flex items-center justify-center gap-2 text-white font-bold hover:text-[#48C8D0] transition-colors py-2">
                       My Bookings
                    </button>
                  </div>
                </motion.div>

                {/* Right Side: Stats (Desktop Only) */}
                <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   className="hidden lg:flex justify-end"
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2.5rem] w-80 shadow-2xl">
                    <div className="bg-[#48C8D0] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                      <FaStethoscope className="text-xl text-white" />
                    </div>
                    <h3 className="text-white text-4xl font-bold mb-1">{slide.stats}</h3>
                    <p className="text-slate-100">Verified & Trusted Experts.</p>
                  </div>
                </motion.div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;