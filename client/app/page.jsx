"use client";
import NavBar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import StatusComponent from "@/components/StatusComponent";
const home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <StatusComponent />
      <Card/>
      <FAQ />
      
      <Footer />
    </div>
  );
};

export default home;
