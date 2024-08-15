"use client";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import { useState } from "react";

function NavBar() {
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
      

      <div className="text-xl font-bold flex items-center">
      <div className="relative grid justify-center">
        <CreateOutlinedIcon className="absolute rounded ml-1 mt-1 bg-white text-black opacity-100" />
        <div className="relative p-4 rounded-[9px] bg-[conic-gradient(from_0deg_at_50%_50%,rgb(252,214,255)_0deg,rgb(41,216,255)_95.6757deg,rgb(255,253,130)_180deg,rgb(242,54,255)_257.23deg,rgb(252,214,255)_360deg)] blur-[8px] shadow-[rgba(241,56,255,0.3)_-2px_2px_20px_0px] opacity-50"></div>
      </div>
        <span className="ml-2">Build Your Notes</span>
      </div>

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
              Working
            </a>
            <a
              onClick={(e) => handleScroll(e, "section3")}
              href="#team"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Team
            </a>
            <a
              onClick={(e) => handleScroll(e, "section4")}
              href="#documentation"
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Documentation
            </a>
            <a
              onClick={(e) => handleScroll(e, "section5")}
              href="#Contact"
              className="block px-3 py-2rounded hover:bg-gray-700"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
