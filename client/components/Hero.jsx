


export default function Hero() {
  return (    <div className="top-0 relative min-h-screen bg-gradient-to-b from-purple-700 via-purple-900  to-black text-white">
 

    <div className="flex flex-col items-center justify-center text-center mt-20">
      <h1 className="text-6xl font-bold mb-6">Never take <br /> notes again</h1>
      <p className="text-lg mb-6">
        Turn audio & video into <strong>notes, flashcards, quizzes</strong>, and more.<br />
        100+ languages supported.
      </p>
      <div className="flex space-x-4 mb-10">
        <button className="bg-white text-black rounded-full py-2 px-8 text-lg font-semibold shadow-md">for iPhone</button>
        <button className="bg-purple-600 bg-opacity-80 text-white rounded-full py-2 px-8 text-lg font-semibold shadow-md">Android & Web</button>
      </div>
      <p className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐ 4.9 stars</p>
    </div>

    {/* Bottom Curve using div */}
    <div className="relative bg-gradient-to-b from-purple-700 to-black h-64 flex items-center justify-center">
      <div className="text-white text-center">
        <div className="text-2xl mb-2">★★★★★</div>
        <div className="text-lg">4.9 stars</div>
      </div>
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#000"
            d="M0,256L80,224C160,192,320,128,480,106.7C640,85,800,107,960,117.3C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </div>
    
  </div> );
}


