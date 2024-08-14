"use client";
import Head from "next/head";
import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollTiltImage from "@/components/Tilt";
import Card from "@/components/Card";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Build-Your-Notes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="font-sans">
        <NavBar />
        <Hero />
        <ScrollTiltImage />
        <Card />
        <Reviews />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
