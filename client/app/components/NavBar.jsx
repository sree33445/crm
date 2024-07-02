import React from 'react'
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
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">CRM</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarItem isActive>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/signup" variant="flat">
            Signup
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default NavBar