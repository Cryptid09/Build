"use client";
import NavBar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import ScrollTiltImage from "@/components/Tilt";
const home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <ScrollTiltImage/>
      <Card/>
      <Reviews />
      <FAQ />
      
      <Footer />
    </div>
  );
};

export default home;
