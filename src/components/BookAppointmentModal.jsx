"use client"

import React from "react";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select
} from "@heroui/react";

export default function BookAppointmentModal({ doctor, isOpen, onClose }) {
  
  const { name: doctorName } = doctor || {};

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

   
    const bookingData = {
      userEmail: formValues.userEmail,
      doctorName: doctorName || formValues.doctorName,
      patientName: formValues.patientName,
      gender: formValues.gender,
      phone: formValues.phone,
      appointmentDate: formValues.appointmentDate,
      appointmentTime: formValues.appointmentTime,
      reason: formValues.reason || "",
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
        method: "POST",
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(bookingData)
      });

      const data = await res.json();
      
      if (data.insertedId) {
        alert("You Booked Successfully!");
        onClose(); 
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Booking Error:", error);
      alert("Failed to connect to server.");
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger onClick={onClose} />
            
            <Modal.Header>
              <Modal.Heading>Book Appointment</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="p-6 space-y-6">
                  
                  {/* ডায়নামিক সাব-হেডিং */}
                  <div className="-mt-2 mb-4">
                    <p className="text-sm font-bold text-slate-600">with {doctorName}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    
                    <div className="md:col-span-2">
                      <TextField name="userEmail" isRequired className="flex flex-col gap-2">
                        <Label>User Email <span className="text-red-500">*</span></Label>
                        <Input type="email" placeholder="user@gmail.com" className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    
                    <div className="md:col-span-2">
                      <TextField defaultValue={doctorName} name="doctorName" isDisabled className="flex flex-col gap-2">
                        <Label>Doctor Name</Label>
                        <Input type="text" className="rounded-2xl bg-slate-50" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Patient Name */}
                    <div className="md:col-span-2">
                      <TextField name="patientName" isRequired className="flex flex-col gap-2">
                        <Label>Patient Name <span className="text-red-500">*</span></Label>
                        <Input placeholder="Full name" className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Gender */}
                    <div>
                      <Select name="gender" isRequired className="w-full flex flex-col gap-2" placeholder="Select gender">
                        <Label>Gender <span className="text-red-500">*</span></Label>
                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="Male" textValue="Male">Male <ListBox.ItemIndicator /></ListBox.Item>
                            <ListBox.Item id="Female" textValue="Female">Female <ListBox.ItemIndicator /></ListBox.Item>
                            <ListBox.Item id="Other" textValue="Other">Other <ListBox.ItemIndicator /></ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <TextField name="phone" isRequired className="flex flex-col gap-2">
                        <Label>Phone <span className="text-red-500">*</span></Label>
                        <Input type="tel" placeholder="017XXXXXXXX" className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Appointment Date */}
                    <div>
                      <TextField name="appointmentDate" isRequired className="flex flex-col gap-2">
                        <Label>Appointment Date <span className="text-red-500">*</span></Label>
                        <Input type="date" className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Appointment Time */}
                    <div>
                      <TextField name="appointmentTime" isRequired className="flex flex-col gap-2">
                        <Label>Appointment Time <span className="text-red-500">*</span></Label>
                        <Input type="time" className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Reason */}
                    <div className="md:col-span-2">
                      <TextField name="reason" className="flex flex-col gap-2">
                        <Label>Reason (optional)</Label>
                        <TextArea placeholder="Brief reason for visit..." className="rounded-3xl" />
                        <FieldError />
                      </TextField>
                    </div>

                  </div>

                  <Modal.Footer className="px-0 pt-4">
                    <Button type="submit" className="w-full bg-[#00a3b1] text-white font-semibold text-base py-6 rounded-xl hover:bg-[#008c9a] transition-all">
                      Confirm Booking
                    </Button>
                  </Modal.Footer>

                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}