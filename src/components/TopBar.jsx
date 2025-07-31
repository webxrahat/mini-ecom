import React from "react";
import { IoMdSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { RiShoppingBag4Fill } from "react-icons/ri";

export default function TopBar() {
 return (
  <header className="flex items-center justify-between px-6 py-3  sticky top-0 z-50 bg-white">
   <div className="text-2xl font-bold">MyStore</div>

   <div className="flex-1 mx-6 relative max-w-96">
    <input
     type="text"
     placeholder="Search products..."
     className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
   </div>

   <div className="flex items-center space-x-5 text-xl text-gray-600">
    <i className="fas fa-shopping-cart cursor-pointer hover:text-black transition">
     <RiShoppingBag4Fill />
    </i>
    <i className="fas fa-sun cursor-pointer hover:text-black transition">
     <IoMdSunny />
     <MdDarkMode />
    </i>
   </div>
  </header>
 );
}
