import React from "react";
import { Create as PencilIcon, GitHub } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
const Footer = () => {
  return (
    <footer className="bg-white w-screen  dark:bg-[#1f1e1e]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://buildyournotes.com/" className="flex items-center">
              <PencilIcon className="h-8 me-3 text-gray-900 dark:text-white" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Build Your Notes
              </span>
            </a>
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
