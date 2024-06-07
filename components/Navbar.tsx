import Image from 'next/image';
import navbarItems from '../constants/index';
import { Button } from "@/components/ui/button";

const Navbar = () => {
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
      <div className="hidden lg:flex justify-center w-full lg:w-auto">
        <ul className="flex space-x-4">
          {navbarItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:text-blue-700">{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Breadcrumb for Small Screens */}
      <div className="flex lg:hidden w-full justify-center items-center">
        <ul className="flex space-x-2">
          {navbarItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="text-sm hover:text-blue-700">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section (Download Button) */}
      <div className="flex items-center ml-auto">
        <Button>Download</Button>
      </div>

    </div>
  );
};

export default Navbar;
