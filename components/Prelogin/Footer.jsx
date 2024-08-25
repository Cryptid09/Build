import React from "react";
import { Create as PencilIcon, GitHub } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
const Footer = () => {
  return (
    <footer id="section5" className="bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
          <div className="text-xl font-bold flex items-center">
      <div className="relative grid justify-center">
        <PencilIcon className="absolute rounded ml-1 mt-1 bg-white text-black opacity-100" />
        <div className="relative p-4 rounded-[9px] bg-[conic-gradient(from_0deg_at_50%_50%,rgb(252,214,255)_0deg,rgb(41,216,255)_95.6757deg,rgb(255,253,130)_180deg,rgb(242,54,255)_257.23deg,rgb(252,214,255)_360deg)] blur-[8px] shadow-[rgba(241,56,255,0.3)_-2px_2px_20px_0px] opacity-50"></div>
      </div>
        <span className="ml-2">Build My Notes</span>
      </div>

          
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact Us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="mailto:support@buildyournotes.com"
                    className="hover:underline"
                  >
                    Email Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/buildyournotes"
                    className="hover:underline"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://buildyournotes.com/" className="hover:underline">
              Build Your Notes™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#_"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span className="sr-only">Linkdin page</span>
            </a>
            <a
              href="#_"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <XIcon className="w-4 h-4" />
              <span className="sr-only">X page</span>
            </a>
            <a
              href="#_"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <GitHub className="w-4 h-4" />
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="#_"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <InstagramIcon className="w-4 h-4" />
              <span className="sr-only">Instagram Account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
