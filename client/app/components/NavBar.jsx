"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { Button } from "@nextui-org/button";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      <div className="hidden md:flex space-x-4 ml-4">
        <Button as={Link} color="primary" href="/login" variant="flat">
          Login
        </Button>
        <Button as={Link} color="primary" href="/signup" variant="flat">
          Signup
        </Button>
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
