"use client";

import { useState } from "react";
import { Button, Modal, Input,  TextArea } from "@heroui/react";
import { Pencil } from "@gravity-ui/icons"; 
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function UpdateBooking({ booking }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleUpdateBooking = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    
    const updatedData = {
      patientName: formValues.patientName,
      appointmentDate: formValues.appointmentDate,
      appointmentTime: formValues.appointmentTime,
      reason: formValues.reason,
    };

    const {data:tokenData}= await authClient.token()
            console.log(tokenData)
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${booking._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
         authorization : `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(updatedData),
    });

    const data = await res.json();
    
    if (data.modifiedCount > 0) {
      toast.success("Appointment Updated Successfully!");
      setIsOpen(false);
      window.location.reload();
    } else {
      toast.error("No changes made or something went wrong.");
    }
  };

  return (
    <>
    
      <Button 
        onClick={() => setIsOpen(true)} 
        variant="outline" 
        className="rounded-xl border-gray-300 text-gray-700"
      >
        <Pencil /> Update
      </Button>

    
      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[500px] p-6 bg-white rounded-3xl">
              <Modal.CloseTrigger onClick={() => setIsOpen(false)} />
              
              <Modal.Header>
                <Modal.Heading className="text-xl font-bold text-gray-800">
                  Update Appointment
                </Modal.Heading>
              </Modal.Header>

              <form onSubmit={handleUpdateBooking} className="mt-4 space-y-4">
                <Modal.Body className="space-y-4">
                  
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700">Doctor</label>
                    <Input
                      type="text"
                      defaultValue={booking.doctorName}
                      readOnly
                      className="bg-gray-100 text-gray-500 cursor-not-allowed rounded-xl"
                    />
                  </div>

                  {/* Patient Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700">Patient Name</label>
                    <Input
                      type="text"
                      name="patientName"
                      defaultValue={booking.patientName}
                      required
                      placeholder="Patient Name"
                      className="rounded-xl"
                    />
                  </div>

                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-gray-700">Date</label>
                      <Input
                        type="date"
                        name="appointmentDate"
                        defaultValue={booking.appointmentDate}
                        required
                        className="rounded-xl"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-gray-700">Time</label>
                      <Input
                        type="time"
                        name="appointmentTime"
                        defaultValue={booking.appointmentTime}
                        required
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Reason */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700">Reason</label>
                    <TextArea
                      name="reason"
                      defaultValue={booking.reason}
                      placeholder="Reason for appointment"
                      className="rounded-xl"
                    />
                  </div>

                </Modal.Body>

                <Modal.Footer className="pt-4">
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#00a3b1] text-white font-medium py-3 rounded-xl hover:bg-[#008b98] transition-all"
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </form>

            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
}