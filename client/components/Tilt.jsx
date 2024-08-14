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
    <div className="relative flex items-center justify-center h-screen bg-black text-white">
      <div className="absolute top-4 left-4 font-bold text-xl">
        Instantly turn audio and video into notes, flashcards, quizzes, and more
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