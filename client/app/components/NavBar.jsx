"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { MoreVertical } from "lucide-react";
import { SelectItem } from "@nextui-org/select";
import { SlOptionsVertical } from "react-icons/sl";

const NavBar = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(true)
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black flex flex-wrap justify-between items-center py-4 px-4">
      <div className="flex items-center space-x-3">
        <Image
          src="/image/crmLogo.png" // Path to image in the public folder
          alt="CRM Logo" // Alt text for accessibility
          width={48} // Adjust width as needed
          height={48} // Adjust height as needed
        />
        <h1 className="font-bold text-white">CRM</h1>
      </div>

      {/* <div className="hidden md:flex space-x-4 ml-4">
        <Button as={Link} color="primary" href="/login" variant="flat">
          Login
        </Button>
        <Button as={Link} color="primary" href="/signup" variant="flat">
          Signup
        </Button>
      </div> */}
      <div className="flex p-3 relative">
      <img
        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
        alt=""
        className="w-10 h-10 rounded-md"
      />
      <div
        className={`
          flex justify-between items-center
          overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
        `}
      >
        <div className="leading-4">
          <h4 className="font-semibold text-white">John Doe</h4>
          <span className="text-xs text-white">johndoe@gmail.com</span>
        </div>
        <div className="relative">
          {/* <MoreVertical size={20} color="white" onClick={toggleDropdown} className="cursor-pointer" /> */}
          <SlOptionsVertical color="white" onClick={toggleDropdown} />

          {dropdownVisible && (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
        <select>
            <option  className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer" ><a href="/login">Login</a></option>
            <option className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer">Option 2</option>
            <option className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer"><a href="/signup">Signup</a></option>
        </select>
    </div>
)}
        </div>
      </div>
    </div>

      <div className="md:hidden">
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
      )}
    </div>
  );
};

export default NavBar;
