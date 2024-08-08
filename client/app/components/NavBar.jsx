"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SlOptionsVertical } from "react-icons/sl";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

const NavBar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="bg-gray-800 flex flex-wrap justify-between items-center py-4 px-4 relative">
      <div className="flex items-center space-x-3">
        <Image src="/image/crmLogo.png" alt="CRM Logo" width={48} height={48} />
        <h1 className="font-bold text-white">CRM</h1>
      </div>

      <div className="ml-auto flex items-center space-x-4">
        <div className="flex p-2 relative items-center bg-neutral-200 rounded-2xl ">
          <IoPersonCircleOutline
            color="black"
            className="w-8 h-9 rounded-md mr-2"
          />

          <div className="leading-4">
            <h2 className="text-s text-black font-semibold">John Doe</h2>
            <span className="text-xs text-black">johndoe@gmail.com</span>
          </div>
        </div>
        
        <IoIosNotifications color="white" className="cursor-pointer h-8 w-7" />

        <SlOptionsVertical
          color="white"
          onClick={toggleDropdown}
          className="cursor-pointer"
        />
      </div>

      {dropdownVisible && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <ul className="list-none p-0 m-0">
            <li className="border-b border-gray-300">
              <Link
                href="/login"
                className="block px-4 py-2 text-black hover:bg-gray-200"
              >
                Login
              </Link>
            </li>
            <li className="border-b border-gray-300">
              <Link
                href="/signup"
                className="block px-4 py-2 text-black hover:bg-gray-200"
              >
                Signup
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="block px-4 py-2 text-black hover:bg-gray-200"
              >
                LogOut
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
