import React from "react";
import NavBar from "./components/NavBar";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import {
  BarChart3,
  Boxes,
  Contact,
  Contact2,
  Contact2Icon,
  ContactRound,
  Heart,
  HomeIcon,
  LifeBuoy,
  Package,
  Receipt,
  Settings,
  UserCircle,
} from "lucide-react";
export default function Home() {
  return (
    <div>
      <NavBar />
      <Sidebar>
        <SidebarItem icon={<HomeIcon size={20} />} text="Home" active />
        <SidebarItem icon={<Contact2 size={20} />} text="Contacts" href='/admin' />
        <SidebarItem icon={<Heart size={20} />} text="Service" />
        <SidebarItem icon={<Package size={20} />} text="Outbreach" alert />
        <SidebarItem icon={<Receipt size={20} />} text="Billings" />
        <SidebarItem icon={<Settings size={20} />} text="settings" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
      </Sidebar>
    </div>
  );
}

