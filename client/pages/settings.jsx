import Navbar from "@/components/postlogin/Navbar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import RedeemIcon from "@mui/icons-material/Redeem";
import LockIcon from "@mui/icons-material/Lock";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";

import React from "react";

const settings = () => {
  return (
    <div className="w-screen h-auto text-black bg-[#ebebe4] dark:bg-[#2b2a2a]">
      <Navbar />
      <div className="max-w-md grid mx-auto  h-full p-4 ">
        <h2 className="text-lg pt-36 font-semibold mb-4 dark:text-white">
          Settings
        </h2>
        <ul className="space-y-4 dark:bg-[#1d1c1cec] rounded p-3 ">
          <li className="flex items-center bg-gray-50 rounded-lg shadow p-3 justify-between">
            <div className="flex  items-center space-x-2">
              <FavoriteIcon className="w-6 h-6 text-purple-600" />
              <span className="text-purple-600 font-medium">
                Gift Build My Notes
              </span>
            </div>
            <span>&gt;</span>
          </li>
          <li className="flex items-center bg-gray-50 rounded-lg shadow p-3 justify-between">
            <div className="flex items-center space-x-2">
              <Image src="/discord.svg" alt="Discord" width={24} height={24} />
              <span className="font-medium">Join the Discord</span>
            </div>
            <span>&gt;</span>
          </li>
          <li className="flex items-center bg-gray-50 rounded-lg shadow p-3 justify-between">
            <div className="flex items-center space-x-2">
              <ShareIcon className="w-6 h-6 text-gray-600" />
              <span className="font-medium">Share with a friend</span>
            </div>
            <span>&gt;</span>
          </li>
          <li className="flex items-center bg-gray-50 rounded-lg shadow p-3 justify-between">
            <div className="flex items-center space-x-2">
              <RedeemIcon className="w-6 h-6 text-gray-600" />
              <span className="font-medium">Redeem code</span>
            </div>
            <span>&gt;</span>
          </li>
          <li className="flex items-center bg-gray-50 rounded-lg shadow p-3 justify-between">
            <div className="flex items-center space-x-2">
              <LockIcon className="w-6 h-6 text-gray-600" />
              <span className="font-medium">Privacy Policy</span>
            </div>
            <span>&gt;</span>
          </li>
          <li className="flex items-center bg-gray-50 rounded-lg shadow p-3 justify-between">
            <button className="flex items-center space-x-2">
              <PowerSettingsNewIcon className="w-6 h-6 text-gray-600" />
              <span className="font-medium">Sign out</span>
            </button>
          </li>
          <li className="flex items-center bg-gray-50 rounded-lg shadow p-3 justify-between">
            <div className="flex items-center space-x-2">
              <DeleteIcon className="w-6 h-6 text-red-600" />
              <span className="text-red-600 font-medium">Delete account</span>
            </div>
            <span>&gt;</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default settings;
