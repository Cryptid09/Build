import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HelpCenterRoundedIcon from "@mui/icons-material/HelpCenterRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useState } from "react";
import { useLogin } from "@/context"; // Import useLogin for authentication management
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

const Navbar = () => {
  const { isLoggedIn, logout } = useLogin(); // Get login state and logout function
  const [isOpen, setIsOpen] = useState(false); // Toggle for mobile hamburger menu
  const [isRotated, setIsRotated] = useState(false); // Toggle for settings rotation
  const [isDarkMode, setIsDarkMode] = useState(false); // Toggle for dark mode

  // Effect to toggle dark mode in the DOM
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const pathname = usePathname(); // Get the current route for active link styling

  return (
    <div className={` ${isLoggedIn ? `block` : `hidden`} h-10 font-sans absolute z-10 w-full`}>
      <div className="flex justify-between w-full px-6 md:px-36 mt-4 md:mt-16 text-black dark:text-white">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center">
          <div className="relative grid justify-center">
            <CreateOutlinedIcon className="absolute rounded ml-1 mt-1 opacity-100" />
            <div className="relative p-4 rounded-[9px] bg-[conic-gradient(from_0deg_at_50%_50%,rgb(252,214,255)_0deg,rgb(41,216,255)_95.6757deg,rgb(255,253,130)_180deg,rgb(242,54,255)_257.23deg,rgb(252,214,255)_360deg)] blur-[8px] shadow-[rgba(241,56,255,0.3)_-2px_2px_20px_0px] opacity-50"></div>
          </div>
          <span className="ml-2">Build My Notes</span>
        </div>
        {/* Dark Mode ,Sign Out Button & Get Limitless Button */}
        <div className="md:flex gap-4 hidden">
          <button className=" bg-purple-600 hover:bg-purple-700 p-2 text-white font-bold rounded-xl">
            Get Limitless
          </button>
          <button onClick={logout} className="text-white bg-red-500 hover:bg-red-600 p-2 rounded-md ml-4">
          Sign Out
        </button>
          <button onClick={toggleDarkMode} className="p-2 text-white bg-[#201e1e] rounded-full focus:outline-none">
            {isDarkMode ? <LightModeRoundedIcon /> : <NightlightRoundOutlinedIcon />}
          </button>
      </div>
        {/* Hamburger Menu for Mobile */}
        <button className="text-black dark:text-white md:hidden flex items-center" onClick={toggleNavbar}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        </div>


      <hr className="font-semibold font-mono border-t mx-4 md:mx-24 border-[#84828284] mt-1"></hr>

      {/* Navbar Links */}
      <div
        className={`md:grid md:gap-12 md:ml-32 w-36 md:mt-10 md:bg-transparent bg-[#f6f6f1] bg-opacity-80 p-0  md:p-3 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:text-left text-right md:mr-0 mr-4`}
      >
        <Link
          href="/"
          className={`${
            pathname === "/" ? `text-black dark:text-[#fff8e1] font-semibold` : `text-gray-400`
          } flex justify-end md:justify-start items-center space-x-3 w-36 `}
        >
          <div className="hover:bg-[#948d8dc8] p-1 rounded-full">
            <HomeRoundedIcon className="text-black dark:text-white hover:text-[#fcfce9] pb-1" />
          </div>
          <span className="hover:underline text-lg font-semibold">Home</span>
        </Link>

        <Link
          href="/Tut"
          className={`${
            pathname === "/Tut" ? `text-black dark:text-[#fff8e1] font-semibold` : `text-gray-400`
          } flex justify-end md:justify-start items-center space-x-3 w-36 `}
        >
          <div className="hover:bg-[#948d8dc8] p-1 rounded-full">
            <LightbulbRoundedIcon className="text-black dark:text-white dark:hover:text-yellow-300 pb-1" />
          </div>
          <span className="text-lg hover:underline ">How to use</span>
        </Link>

        <Link
          href="/support"
          className={`${
            pathname === "/support"
              ? `text-black font-semibold dark:text-[#fff8e1]`
              : `text-gray-400`
          } flex justify-end md:justify-start items-center space-x-3 w-36 `}
        >
          <div className="hover:bg-[#948d8dc8] p-1 rounded-full">
            <HelpCenterRoundedIcon className="dark:text-white text-black hover:text-[#fcfce9] pb-1" />
          </div>
          <span className="text-lg hover:underline ">Support</span>
        </Link>

        <Link
          href="/settings"
          className={`${
            pathname === "/settings"
              ? `text-black dark:text-white font-semibold`
              : `text-gray-400`
          } flex justify-end md:justify-start items-center space-x-3 w-36 `}
        >
          <SettingsRoundedIcon
            onClick={() => setIsRotated(!isRotated)}
            className={`transform transition-transform duration-300 ${
              isRotated ? "rotate-90" : "rotate-0"
            }`}
          />
          <p onClick={() => setIsRotated(!isRotated)}>Settings</p>
        </Link>
        <div className="grid mt-3 gap-4  sm:hidden">
          <button onClick={logout} className="text-white bg-red-500 hover:bg-red-600 p-2 rounded-xl ml-4">
          Sign Out
        </button>

        <button className=" bg-purple-600 hover:bg-purple-700 p-2 text-white font-bold rounded-xl">
            Get Limitless
          </button>

          <button onClick={toggleDarkMode} className="p-2 text-white bg-[#201e1e] rounded-full focus:outline-none">
            {isDarkMode ? <LightModeRoundedIcon /> : <NightlightRoundOutlinedIcon />}
          </button>
      </div>
      </div>
    </div>
  );
};

export default Navbar;