import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HelpCenterRoundedIcon from '@mui/icons-material/HelpCenterRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { useState } from 'react';
import { useLogin } from "@/context";
const Navbar = () => {
  const {Login} = useLogin();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={` ${Login?`block`:`hidden`} font-sans absolute z-10 w-full`} >
      <div className="flex justify-between w-full px-6 md:px-36 mt-4 md:mt-16 text-black">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center">
          <div className="relative grid justify-center">
            <CreateOutlinedIcon className="absolute rounded ml-1 mt-1 opacity-100" />
            <div className="relative p-4 rounded-[9px] bg-[conic-gradient(from_0deg_at_50%_50%,rgb(252,214,255)_0deg,rgb(41,216,255)_95.6757deg,rgb(255,253,130)_180deg,rgb(242,54,255)_257.23deg,rgb(252,214,255)_360deg)] blur-[8px] shadow-[rgba(241,56,255,0.3)_-2px_2px_20px_0px] opacity-50"></div>
          </div>
          <span className="ml-2">Build My Notes</span>
        </div>
        {/* Get Limitless Button */}
        <button className="hidden md:block bg-purple-600 hover:bg-purple-700 p-2 text-white font-bold rounded-xl">
          Get Limitless
        </button>
        {/* Hamburger Menu for Mobile */}
        <button className="md:hidden flex items-center" onClick={toggleNavbar}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <hr className="font-semibold font-mono border-t mx-4 md:mx-24 border-[#84828284] mt-1"></hr>

      {/* Navbar Links */}
      <div
        className={`md:grid md:gap-12 md:ml-32 mt-4 md:mt-10 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:text-left text-right md:mr-0 mr-4`}
      >
        <Link href="#" className="flex justify-end md:justify-start items-center space-x-3 text-black">
          <div className="hover:bg-[#948d8dc8] p-1 rounded-full">
            <HomeRoundedIcon className="text-black hover:text-[#fcfce9] pb-1" />
          </div>
          <span className="hover:underline text-lg font-semibold">Home</span>
        </Link>

        <Link href="#" className="flex justify-end md:justify-start items-center space-x-3 text-gray-400 mt-4 md:mt-0">
          <div className="hover:bg-[#948d8dc8] p-1 rounded-full">
            <LightbulbRoundedIcon className="text-black hover:text-[#fcfce9] pb-1" />
          </div>
          <span className="text-lg">How to use</span>
        </Link>

        <Link href="#" className="flex justify-end md:justify-start items-center space-x-3 text-gray-400 mt-4 md:mt-0">
          <div className="hover:bg-[#948d8dc8] p-1 rounded-full">
            <HelpCenterRoundedIcon className="text-black hover:text-[#fcfce9] pb-1" />
          </div>
          <span className="text-lg">Support</span>
        </Link>

        <Link href="#" className="flex justify-end md:justify-start items-center space-x-3 text-gray-400 mt-4 md:mt-0">
          <div className="hover:bg-[#948d8dc8] p-1 rounded-full">
            <SettingsRoundedIcon className="text-black hover:text-[#fcfce9] pb-1" />
          </div>
          <button className="text-lg">Settings</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
