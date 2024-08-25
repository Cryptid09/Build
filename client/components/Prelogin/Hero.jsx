import Image from "next/image";
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import Link from "next/link";
export default function HeroSection() {
  return (
    <div id="section1" className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-purple-700 to-purple-600 text-center overflow-hidden">
      {/* Top Icon */}
      <div className="absolute mb- w-3/4 h-1/2 hidden sm:block">
        <Image className="motion-reduce:animate-bounce"
          src="https://framerusercontent.com/images/6zdlesWFPYIR2teu2H3SfDPkGYo.png"
          alt="Top Icon"
          objectFit="contain"
          width={200}
          height={100}
          sizes="(max-width: 768px) 100px, 200px"
        />
      </div>
      <div className="hidden relative w-screen sm:grid place-items-end h-0 pr-12 pt-36">
        <Image className="rotate-12"
          src="https://framerusercontent.com/images/wJfpLgr6fsOQ90tlk6AnCt2HKM.png"
          alt="Top Icon"
          width={200}
          height={100}
          objectFit="contain"
          sizes="(max-width: 768px) 100px, 200px"
        />
      </div> 

      {/* Main Text */}
      <h1 className="text-5xl m-16 md:text-6xl font-extrabold text-white leading-tight">
        Never take <br /> notes again
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-gray-300 mt-4">
        Turn audio & video into notes, <br /> flashcards, quizzes, and more.
      </p>
      <p className="text-lg md:text-xl text-gray-300 mt-2">
        100+ languages supported.
      </p>

      {/* Button */}
      <div className="mt-8 flex items-center">
        <Link href="/login "><div  className="bg-white text-black font-bold py-2 px-6 rounded-full flex items-center shadow-lg">
          Try Now
          <ArrowOutwardOutlinedIcon className="ml-2" />
        </div></Link>
      </div>
      

      {/* Bottom Chart */}

      {/* Curve */}
      <div className="relative h-[600px] w-screen">
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10 h-[100px] w-[200%] rounded-b-[100%] bg-gradient-to-t from-purple-700 via-[#fffefe51] to-[#ffffff07]"></div>
        <div className="absolute border-t border-[#ffffff35] bottom-0 left-1/2 transform -translate-x-1/2 z-20 h-[550px] w-[200%] rounded-t-[100%] bg-gradient-to-b from-purple-500 via-gray-950 to-black"></div>
      </div>
    </div>
  );
}