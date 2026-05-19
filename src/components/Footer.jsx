import React from 'react';
import { CiFacebook, CiLinkedin, CiMail, CiLocationOn } from 'react-icons/ci';
import { SlSocialTwitter } from 'react-icons/sl';
import { FiPhone } from 'react-icons/fi';
import { FaStethoscope } from 'react-icons/fa'; 
import Link from 'next/link'; 


const Footer = () => {
    return (
        <footer className="bg-[#013131] text-gray-400 py-12 px-6 font-sans border-t border-gray-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                
                {/* Column 1: Brand & Social Links */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex items-center gap-2 mb-4">
                       
                        <div className="bg-[#48C8D0] p-1.5 rounded-lg text-white">
                            <FaStethoscope size={24} />
                        </div>
                        
                        <h2 className="text-white text-2xl font-bold tracking-tight">DocAppoint</h2>
                    </div>
                    <p className="text-sm leading-relaxed mb-6">
                        Making healthcare accessible for everyone. Find trusted doctors and book your appointments with ease, anytime and anywhere.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="p-2 bg-gray-800/50 hover:bg-[#48C8D0] text-white rounded-full transition-all duration-300">
                            <span className="sr-only">Facebook</span>
                            <CiFacebook size={20} /> 
                        </a>
                        <a href="#" className="p-2 bg-gray-800/50 hover:bg-[#48C8D0] text-white rounded-full transition-all duration-300">
                            <span className="sr-only">Twitter</span>
                            <SlSocialTwitter size={20} />
                        </a>
                        <a href="#" className="p-2 bg-gray-800/50 hover:bg-[#48C8D0] text-white rounded-full transition-all duration-300">
                            <span className="sr-only">LinkedIn</span>
                            <CiLinkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Column 2: Quick Contact */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-white font-semibold mb-6 text-lg">Contact Us</h3>
                    <ul className="space-y-4 text-sm font-medium">
                        <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                            <CiMail className="text-[#48C8D0] text-xl group-hover:scale-110 transition-transform" />
                            <span className="hover:text-white transition-colors">support@docappoint.com</span>
                        </li>
                        <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                            <FiPhone className="text-[#48C8D0] text-lg group-hover:scale-110 transition-transform" />
                            <span className="hover:text-white transition-colors">+880 1700 000 000</span>
                        </li>
                        <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                            <CiLocationOn className="text-[#48C8D0] text-xl group-hover:scale-110 transition-transform" />
                            <span className="hover:text-white transition-colors">Banani, Dhaka, Bangladesh</span>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Patient & Doctor Links */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
                    <ul className="space-y-3 text-sm font-medium">
                        <li><Link href="/doctors" className="hover:text-[#48C8D0] hover:translate-x-1 inline-block transition-all italic">Find a Doctor</Link></li>
                        <li><Link href="/appointment" className="hover:text-[#48C8D0] hover:translate-x-1 inline-block transition-all italic">Book Appointment</Link></li>
                        <li><Link href="/services" className="hover:text-[#48C8D0] hover:translate-x-1 inline-block transition-all italic">Our Services</Link></li>
                        <li><Link href="/doctor-portal" className="hover:text-[#48C8D0] hover:translate-x-1 inline-block transition-all italic">Join as a Doctor</Link></li>
                    </ul>
                </div>

                {/* Column 4: Newsletter */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-white font-semibold mb-6 text-lg">Health Updates</h3>
                    <p className="text-sm mb-4">Subscribe to receive health tips and hospital updates.</p>
                    <div className="flex w-full max-w-[300px] shadow-lg">
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            className="bg-gray-800 text-gray-300 px-4 py-2.5 rounded-l-xl focus:outline-none w-full border border-gray-700 text-sm focus:border-[#48C8D0] transition-colors"
                        />
                        <button className="bg-[#48C8D0] hover:bg-[#3ba7af] text-white px-5 py-2.5 rounded-r-xl font-bold text-sm transition-all active:scale-95">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800/60 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-medium">
                <p>© 2026 DocAppoint. Designed for better healthcare.</p>
                <div className="flex space-x-8">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
                    <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;