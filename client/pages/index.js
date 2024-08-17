"use client";
import Head from "next/head";
import NavBar from "@/components/Prelogin/Navbar";
import Hero from "@/components/Prelogin/Hero";
import ScrollTiltImage from "@/components/Prelogin/Tilt";
import Card from "@/components/Prelogin/Card";
import Reviews from "@/components/Prelogin/Reviews";
import FAQ from "@/components/Prelogin/FAQ";
import Footer from "@/components/Prelogin/Footer";
//Postlogin
import Navbar from "@/components/postlogin/Navbar";
import MicIcon from "@mui/icons-material/Mic";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useLogin } from "@/context";
export default function Home() {


  const {Login}= useLogin();
  return (
    <>
      <Head>
        <title>Build-My-Notes</title>
        <meta name="description" content="Hassle free Ai note taker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <div className={` ${Login?`block`:`hidden`} relative font-sans min-h-screen  bg-[#ebebe4] text-black flex justify-center pl-28  items-center p-4`}>
        <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
          {/* New note section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-black">New note</h2>
            <p className="text-sm text-gray-500 mb-4">
              Record audio, upload audio, or use a YouTube URL
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center space-x-2 bg-white shadow-md p-4 rounded-lg hover:bg-gray-100 w-full sm:w-auto">
                <MicIcon className="text-red-500" />
                <span className="font-medium">Record audio</span>
              </button>
              <button className="flex items-center space-x-2 bg-white shadow-md p-4 rounded-lg hover:bg-gray-100 w-full sm:w-auto">
                <YouTubeIcon className="text-black" />
                <span className="font-medium">YouTube video</span>
              </button>
              <button className="flex items-center space-x-2 bg-white shadow-md p-4 rounded-lg hover:bg-gray-100 w-full sm:w-auto">
                <CloudUploadIcon className="text-black" />
                <span className="font-medium">Upload audio</span>
              </button>
            </div>
          </div>

          {/* My notes section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">My notes</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center hover:bg-gray-100">
                <div>
                  <h3 className="font-medium">
                    Fundamentals of Go Programming Language
                  </h3>
                  <p className="text-sm text-gray-500">Aug 15, 2024</p>
                </div>
                <div>&#8250;</div>
              </div>
              <div className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center hover:bg-gray-100">
                <div>
                  <h3 className="font-medium">
                    Welcome! Here's how to get the most out of Coconote
                  </h3>
                  <p className="text-sm text-gray-500">Aug 15, 2024</p>
                </div>
                <div>&#8250;</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${Login?`hidden`:`block`} font-sans`}>
        <NavBar />
        <Hero />
        <ScrollTiltImage id="section4" />
        <Card />
        <Reviews />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
