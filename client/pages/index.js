
import Head from "next/head";
import PreLoginNavbar from "@/components/Prelogin/Navbar";
import Hero from "@/components/Prelogin/Hero";
import ScrollTiltImage from "@/components/Prelogin/Tilt";
import Card from "@/components/Prelogin/Card";
import Reviews from "@/components/Prelogin/Reviews";
import FAQ from "@/components/Prelogin/FAQ";
import Footer from "@/components/Prelogin/Footer";


export default function Home() {
  

  return (
    <>
      <Head>
        <title>Build My Notes</title>
        <meta name="description" content="Hassle-free AI note taker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

     
          <PreLoginNavbar />
          <Hero />
          <ScrollTiltImage />
          <Card />
          <Reviews />
          <FAQ />
          <Footer />
        </>
      )}
    