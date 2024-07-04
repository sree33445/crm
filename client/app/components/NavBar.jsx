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
//     <Navbar className='bg-black'>
//       <NavbarBrand>
//         <p className="font-bold text-white text-inherit ">CRM</p>
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

import React from 'react';
import Image from 'next/image';
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
    <Navbar className='bg-black p-1'>
      <NavbarBrand className="flex items-center">
        {/* <Image src="../Asset/crm.png" alt="Logo" className="h-8 w-8 mr-2" />         */}
        <p className="font-bold text-white text-inherit">CRM</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 ml-auto">
        <NavbarItem isActive>
          <Link className="text-white hover:text-gray-300" href="#">
            Home
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex gap-4">
        <NavbarItem>
          <Button as={Link} color="primary" href="/login" variant="flat">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/signup" variant="flat">
            Signup
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle />
    </Navbar>
  );
}

export default NavBar;



