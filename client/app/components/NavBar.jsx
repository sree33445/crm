// import React from 'react'
// import {
//     Navbar,
//     NavbarBrand,
//     NavbarContent,
//     NavbarItem,
//     NavbarMenuToggle,
//     NavbarMenu,
//     NavbarMenuItem,
//   } from "@nextui-org/navbar";
//   import Link from "next/link";
//   import { Button } from "@nextui-org/button";

// const NavBar = () => {
//   return (
//     <Navbar>
//       <NavbarBrand>
//         <p className="font-bold text-inherit">CRM</p>
//       </NavbarBrand>
//       <NavbarContent className="hidden sm:flex gap-4">
//         <NavbarItem isActive>
//           <Link color="foreground" href="#">
//             Home
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="/login">Login</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="primary" href="/signup" variant="flat">
//             Signup
//           </Button>
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   )
// }

// export default NavBar

import React from "react";
import Image from "next/image";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { Button } from "@nextui-org/button";

const NavBar = () => {
  return (
    <Navbar className="flex items-center flex-wrap justify-between  px-10 py-0  bg-indigo-600 text-white">
      {/* <Navbar className="flex justify-start  px-10 py-0 items-center bg-indigo-600 text-white"> */}
      <NavbarBrand>
      {/* <nav className="flex items-center justify-between p-4 bg-white shadow"> */}
      {/* <Link href="/" legacyBehavior>
        <a className="text-3xl font-bold font-heading flex items-center">
          <Image src="/assets/3.png" alt="logo" width={26} height={36} className="h-9" />
          <span className="ml-2">Logo Here</span>
        </a>
      </Link> */}
    {/* </nav> */}
        <p className="text-xl font-bold text-start  ">CRM</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarItem isActive>
          <Link className="text-xl text-white hover:text-gray-300" href="#">
            Home
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="flex items-center gap-4">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/login"
            variant="flat"
            className="
            flex text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 w-38 border-b-4 border-gray-500 hover:border-b-2 bg-gradient-to-t from-indigo-400  via-indigo-600 to-gray-200 rounded-2xl hover:translate-y-px "
          >
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/signup"
            variant="flat"
            className="
            flex text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 w-38 border-b-4 border-gray-500 hover:border-b-2 bg-gradient-to-t from-indigo-400  via-indigo-600 to-gray-200 rounded-2xl hover:translate-y-px "
          >
            Signup
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;


