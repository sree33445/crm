"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black p-3 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://gist.githubusercontent.com/MsJoitson/9afc5501022de51282446370b5f7b199/raw/1fa7091487a0be1fcfd7e820e7faea9e4b19c098/logo.svg"
            className="w-12 mr-5"
            alt="CRM Logo"
          />
          <p className="font-bold text-white text-inherit">CRM</p>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4 ml-auto">
          <Button as={Link} color="primary" href="/login" variant="flat">
            Login
          </Button>
          <Button as={Link} color="primary" href="/signup" variant="flat">
            Signup
          </Button>
        </div>
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
    </nav>
  );
};

export default NavBar;
