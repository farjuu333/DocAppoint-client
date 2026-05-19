
"use client";
import { useState } from "react"; // Menu toggle er jonno
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import NavLink from "./NavLink";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Hamburger icons
import Logoo from "@/assets/logoo.png"
import Image from "next/image";
import { FaHandHoldingMedical } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className=" flex-1 flex justify-start items-center gap-1">
            <Image className="" alt="logoo" src={Logoo} height={40} width={40}></Image>
          <Link href="/" className=" font-bold text-inherit tracking-tight">

            DocAppoint
          </Link>
        </div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center justify-center gap-8 flex-1">
          <NavLink href="/" className=" font-medium ">
            Home
          </NavLink>
          <NavLink href="/all-appointments" className= "font-medium ">
            All Appointments
          </NavLink>
          
            <NavLink href="/dashboard" className=" font-medium ">
              Dashboard
            </NavLink>
          
        </nav>

        {/* Right Section: Desktop Auth + Mobile Toggle */}
        <div className="flex-1 flex justify-end items-center gap-4">
          
          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center gap-3">
            {!user ? (
              <div className="flex items-center gap-3">
                <Link href="/login">
                  <button className="px-5 py-2 text-[#48C8D0] font-semibold hover:bg-gray-100 rounded-lg transition-all">
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button className="px-5 py-2 bg-[#48C8D0] text-white font-semibold rounded-lg hover:brightness-110 transition-all shadow-sm">
                    Register
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex gap-3 items-center">
                <Avatar size="sm">
                  <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy="no-referrer" />
                  <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <Button onClick={handleSignOut} size="sm" variant="danger">Logout</Button>
              </div>
            )}
          </div>

          {/* Hamburger Icon (Visible only on Mobile/Tablet) */}
          <button 
            className="md:hidden text-2xl text-[#48C8D0]" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <NavLink href="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink href="/all-appointments" onClick={() => setIsOpen(false)}>All Appointments</NavLink>
            <NavLink href="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</NavLink>
          <hr />
          {!user ? (
            <div className="flex flex-col gap-2">
              <Link href="/login" onClick={() => setIsOpen(false)} className="text-center py-2 text-[#48C8D0] border border-[#48C8D0] rounded-lg">Login</Link>
              <Link href="/register" onClick={() => setIsOpen(false)} className="text-center py-2 bg-[#48C8D0] text-white rounded-lg">Register</Link>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                 <Avatar size="sm">
                   <Avatar.Image src={user?.image} />
                   <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                 </Avatar>
                 <span className="text-sm font-medium">{user?.name}</span>
              </div>
              <Button onClick={handleSignOut} size="sm" variant="danger">Logout</Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;