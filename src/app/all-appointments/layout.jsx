

export const metadata = {
  title: "All Appointments | DocAppoint",
  description: "View, manage, and track all your scheduled doctor appointments in one place. Stay updated on your healthcare schedule.",
  keywords: ["doctor appointments", "medical booking", "healthcare schedule", "DocAppoint"],
  openGraph: {
    title: "All Appointments | DocAppoint",
    description: "Manage your scheduled doctor appointments easily.",
    type: "website",
  },
};

export default function AppointmentsLayout({ children }) {
  return <>{children}</>;
}