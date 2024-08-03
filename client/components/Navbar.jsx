'use client'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed z-10 top-0 w-full p-4 bg-[#1b1a1ad7] opacity-70 text-white flex justify-between items-center font-Noto">
      <div className="text-xl font-bold flex items-center">
        <CreateOutlinedIcon />
        <span className="ml-2">Build Your Notes</span>
      </div>
      {isMobile ? (
        <div>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          {menuOpen && (
            <div className="absolute top-16 right-0 bg-[#1b1a1ad7] p-4 rounded-lg">
              <a onClick={(e) => handleScroll(e, 'section1')} href="#home" className="block px-3 py-2 rounded hover:bg-gray-700">Home</a>
              <a onClick={(e) => handleScroll(e, 'section2')} href="#features" className="block px-3 py-2 rounded hover:bg-gray-700">Working</a>
              <a onClick={(e) => handleScroll(e, 'section3')} href="#team" className="block px-3 py-2 rounded hover:bg-gray-700">Team</a>
              <a onClick={(e) => handleScroll(e, 'section4')} href="#documentation" className="block px-3 py-2 rounded hover:bg-gray-700">Documentation</a>
              <a onClick={(e) => handleScroll(e, 'section5')} href="#Contact" className="block px-3 py-2rounded hover:bg-gray-700">Contact</a>
              <button className="relative inline-block group mt-2 w-full">
                <span className="relative z-10 block px-3 py-3 overflow-hidden leading-tight text-white transition-colors duration-300 ease-out border-2 border-White rounded-lg group-hover:text-[#070707f3]">
                  <span className="absolute inset-0 w-full h-full px-3 py-3 rounded-lg bg-[#161515fb]"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                  <span className="relative">Get Started</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-white rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center">
          <a onClick={(e) => handleScroll(e, 'section1')} href="#home" className="px-3 py-2 rounded hover:bg-gray-700">Home</a>
          <a onClick={(e) => handleScroll(e, 'section2')} href="#features" className="px-3 py-2 rounded hover:bg-gray-700">Working</a>
          <a onClick={(e) => handleScroll(e, 'section3')} href="#team" className="px-3 py-2 rounded hover:bg-gray-700">Team</a>
          <a onClick={(e) => handleScroll(e, 'section4')} href="#documentation" className="px-3 py-2 rounded hover:bg-gray-700">Documentation</a>
          <a onClick={(e) => handleScroll(e, 'section5')} href="#Contact" className="px-3 py-2 rounded hover:bg-gray-700">Contact</a>
         
        </div>
      )}
       <button className={` ${isMobile?`hidden`:`block`} relative inline-block group ml-4`}>
            <span className="relative z-10 block px-3 py-3 overflow-hidden leading-tight text-white transition-colors duration-300 ease-out border-2 border-White rounded-lg group-hover:text-[#070707f3]">
              <span className="absolute inset-0 w-full h-full px-3 py-3 rounded-lg bg-[#161515fb]"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
              <span className="relative">Get Started</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-white rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </button>
    </nav>
  );
}

export default NavBar;
