

export async function generateMetadata({ params }) {
  const { id } = params;

  try {
    
    const res = await fetch(`https://doc-appoint-three.vercel.app/appointments/${id}`, {
      next: { revalidate: 60 } 
    });
    
    const result = await res.json();
    
    
    
    const doctorName = result?.doctorName || result?.data?.doctorName || "your Doctor"; 

    return {
      title: `Appointment with Dr. ${doctorName} | DocAppoint`,
      description: `View detailed information, timing, and status for your appointment with Dr. ${doctorName}.`,
      openGraph: {
        title: `Appointment with Dr. ${doctorName} | DocAppoint`,
        description: `Detailed view for appointment with Dr. ${doctorName}.`,
      },
    };
  } catch (error) {
    
    return {
      title: `Appointment Details #${id} | DocAppoint`,
      description: `View detailed information for appointment reference number ${id}.`,
    };
  }
}

export default function SingleAppointmentLayout({ children }) {
  return <>{children}</>;
}