
import Head from 'next/head';

export default function Hero() {
  return (    <div className="relative min-h-screen bg-gradient-to-b from-purple-800 via-purple-900 to-black text-white">
    <Head>
      <title>Never take notes again</title>
    </Head>

    <div className="absolute inset-0 flex justify-between items-start p-6">
      <div className="flex items-center space-x-3">
        <img src="/coconote-logo.png" alt="Coconote Logo" className="w-10 h-10"/>
        <span className="font-semibold text-lg">Coconote</span>
      </div>
      <div className="bg-white bg-opacity-10 py-2 px-4 rounded-full">
        Never take notes again
      </div>
    </div>

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
    <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden leading-none">
      <div className="framer-1ax6d5t w-full h-full bg-black"></div>
    </div>
  </div> );
}


