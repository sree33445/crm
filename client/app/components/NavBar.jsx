"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { SlOptionsVertical } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

const NavBar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="bg-black flex flex-wrap justify-between items-center py-4 px-4 relative">
      <div className="flex items-center space-x-3">
        <Image src="/image/crmLogo.png" alt="CRM Logo" width={48} height={48} />
        <h1 className="font-bold text-white">CRM</h1>
      </div>

      <div className="flex p-3 relative items-center bg-gray-400 rounded-2xl">
        <IoPersonOutline color="white"
          className="w-5 h-5 rounded-md"
        />
        <div
          className={`
          flex items-center space-x-3
          overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
        `}
        >
          <div className="leading-4">
            <h4 className="text-xs text-white">John Doe</h4>
            <span className="text-xs text-white">johndoe@gmail.com</span>
          </div>
<IoIosNotifications color="white" />

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
      

      {/* <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? <IoMdClose size={28} /> : <MdMenu size={25} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="w-full md:hidden mt-4">
          <Button
            as={Link}
            color="primary"
            href="/login"
            variant="flat"
            className="w-full mb-2"
          >
            Login
          </Button>
          <Button
            as={Link}
            color="primary"
            href="/signup"
            variant="flat"
            className="w-full"
          >
            Signup
          </Button>
        </div>
      )} */}
      
    </div>
    
  );
};

export default NavBar;
