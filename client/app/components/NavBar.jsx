'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@nextui-org/button";


const NavBar = () => {
  const menu = <img src="https://gist.githubusercontent.com/sree33445/b6597ab91dc4e9e61fbe902745d076f9/raw/e6d025718ac9928a23662bd87a219e12b0bff4ea/menu.svg" alt="Menu" className='w-[25px] h-[25px] object-contain cursor-pointer ' />
  const close = <img src="https://gist.githubusercontent.com/sree33445/201f94267085e71121680e404bee0e7f/raw/7dd8b2c547674712a3d2100131dbad697f623553/close.svg" alt="Close" className='w-[28px] h-[28px] object-contain cursor-pointer' />
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-black p-3 w-full'>
      <div className='max-w-7xl mx-20 flex flex-wrap  justify-between'>
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
            {isMenuOpen ? close : menu}
          </button>
        </div>
        <div className="hidden md:flex gap-4">
          <Button as={Link} color="primary" href="/login" variant="flat">
            Login
          </Button>
          <Button as={Link} color="primary" href="/signup" variant="flat">
            Signup
          </Button>
        </div>
        
        {isMenuOpen && (
          <div className="w-full md:hidden mt-4">
            <Button as={Link} color="primary" href="/login" variant="flat" className="w-full mb-2">
              Login
            </Button>
            <Button as={Link} color="primary" href="/signup" variant="flat" className="w-full">
              Signup
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;