'use client'

import Image from 'next/image';
import navbarItems from '../constants/index';
import { Button } from "@/components/ui/button";
import MenuIcon from '@mui/icons-material/Menu';
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from 'react';

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function DropdownMenuCheckboxes() {
}


const Navbar = () => {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false)
  const [showPanel, setShowPanel] = useState<Checked>(false)


  return (
    <div className="w-full bg-white flex items-center px-4 lg:px-20 py-4 lg:py-8">

      {/* Left Section */}
      <div className="flex items-center mr-auto">
        <img src="/logo.svg" alt="logo" className="w-6 h-6 mr-2" />
        <p className="text-lg font-bold">
          <a href="/">UiFry</a>
        </p>
      </div>

      {/* Center Section (Menu for Larger Screens) */}
      <div className="max-lg:hidden lg:flex justify-center w-full lg:w-auto">
        <ul className="flex space-x-4">
          {navbarItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:text-blue-700">{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
        
        {/* Right Section (Download Button) */}
      <div className="lg:hidden flex justify-end w-full mx-5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <MenuIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <ul className="flex flex-col space-x-4 m-auto p-auto">
              {navbarItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-blue-700">{item.label}</a>
                </li>
              ))}
            </ul>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Right Section (Download Button) */}
      <div className="flex items-center ml-auto">
        <Button>Download</Button>
      </div>

    </div>
  );
};

export default Navbar;
