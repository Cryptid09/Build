"use client";
import { useLogin } from "@/context";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import { useState } from "react";

function NavBar() {
  const {Login,setLogin} = useLogin();



  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed z-30  w-full p-4  text-white flex justify-between items-center font-Noto">
      {/* LOGO */}
      <div className="text-xl font-bold flex items-center">
        <div className="relative grid justify-center">
          <CreateOutlinedIcon className="absolute rounded ml-1 mt-1 bg-white text-black opacity-100" />
          <div className="relative p-4 rounded-[9px] bg-[conic-gradient(from_0deg_at_50%_50%,rgb(252,214,255)_0deg,rgb(41,216,255)_95.6757deg,rgb(255,253,130)_180deg,rgb(242,54,255)_257.23deg,rgb(252,214,255)_360deg)] blur-[8px] shadow-[rgba(241,56,255,0.3)_-2px_2px_20px_0px] opacity-50"></div>
        </div>
        <span className="ml-2">Build My Notes</span>
      </div>
      {/* ...... */}
      <div>
        <button
          className="bg-white px-3 text-black p-2 rounded-full"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Never take notes again <QrCode2Icon />
        </button>
        {menuOpen && (
          <div className="absolute top-16 right-0 bg-[#1b1a1ad7] p-4 rounded-lg">
            <a
              onClick={(e) => handleScroll(e, "section1")}
              href="#home"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Home
            </a>
            <a
              onClick={(e) => handleScroll(e, "section2")}
              href="#features"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Features
            </a>
            <a
              onClick={(e) => handleScroll(e, "section3")}
              href="#team"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Reviews
            </a>
            <a
              onClick={(e) => handleScroll(e, "section4")}
              href="#documentation"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              FAQ
            </a>
            <a
              onClick={(e) => handleScroll(e, "section5")}
              href="#Contact"
              className="block px-3 py-2rounded hover:bg-gray-700"
            >
              Contact
            </a>
            <button
              onClick={()=>setLogin(!Login)}
              className="mt-2 relative inline-flex items-center justify-center px-4 py-1 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span className="relative">Sign up/in </span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );

}

export default NavBar;