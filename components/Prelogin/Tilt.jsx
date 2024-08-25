'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";

const ScrollTiltImage = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const percentage = (rect.top / windowHeight) * 2 - 1;
      imageRef.current.style.transform = `rotateY(${percentage * 20}deg)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="section2" className="relative grid gap-28 place-items-center justify-center h-screen bg-black text-white">
      <div className=" flex justify-center w-full top-4 left-4 font-bold z-10 text-4xl ">
        <p className="text-wrap w-1/2">Instantly turn audio and video into notes, flashcards, quizzes, and more</p>
      </div>
      <div className="overflow-hidden rounded-lg shadow-lg">
        <Image
          ref={imageRef}
          src="https://framerusercontent.com/images/1KdZDwcFIKMsilInaKwlyFTcG8.png?scale-down-to=2048"
          alt="Tilt Image"
          width={1000}
          height={500}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ScrollTiltImage;