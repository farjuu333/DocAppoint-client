"use client"

import React, { useState } from 'react';
import { Button } from '@heroui/react';
import BookAppointmentModal from './BookAppointmentModal';


export default function BookingTriggerSection({ doctor }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)} 
        className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-6 py-2.5 rounded-xl transition shadow-sm"
      >
        Book Appointment
      </Button>

      
      <BookAppointmentModal 
        doctor={doctor} 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
}