"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";
import toast from "react-hot-toast";

export function DeleteBooking({bookingId}) {
   console.log(bookingId)
    const handleCancelBooking = async()=>{

      const {data:tokenData}= await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`,{
            method:"DELETE",
            headers:{
                'content-type':'application/json',
                authorization: `Bearer ${tokenData?.token}`
            }
        })
        const data = await res.json();
        toast.success("Appointment deleted successfully!")
       window.location.reload();
    }
  return (
    <AlertDialog>
     <Button variant='outline' className={' border-red-500 text-red-500'}><TrashBin></TrashBin>Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
             
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleCancelBooking} slot="close" variant="danger">
               Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}