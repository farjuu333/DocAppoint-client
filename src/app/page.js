import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import TopRatedDoctors from "@/components/TopRatedDoctors";
import WhyChooseUs from "@/components/WhyChooseUs";
import { TestTube } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Hero></Hero>
    <TopRatedDoctors></TopRatedDoctors>
    <WhyChooseUs></WhyChooseUs>
    <Testimonials></Testimonials>
   </div>
  );
}
