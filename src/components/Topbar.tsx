"use client";

// import { usePathname } from "next/navigation";
import { Bell, UserRound } from "lucide-react";
import Image from "next/image";

export default function Topbar() {
  //   const pathname = usePathname();

  // Define titles for each page
  //   const pageTitles: { [key: string]: string } = {
  //     "/dashboard": "Dashboard",
  //     "/bin-status": "Waste Bin Status",
  //     "/map": "Map View",
  //     "/history": "History & Reports",
  //     "/settings": "Settings",
  //   };

  // Get the current page title, default to "Dashboard" if not found
  //   const currentTitle = pageTitles[pathname] || "Dashboard";

  return (
    <div className="bg-white w-full flex fixed z-10 justify-between items-center px-6 py-2">
      <div className="ml-8 md:ml-0 mt-1 flex-shrink-0 flex items-center">
        <Image
          src="/logo.png"
          alt="TimelessPlanner Logo"
          width={32}
          height={32}
          className="mr-2"
        />
        <span className="md:text-lg font-semibold">Timeless Planner</span>
      </div>
      <div></div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <Bell size={24} className="text-secondary hover:text-primary" />
          <span className="absolute -top-2 -right-1 bg-primary text-white text-xs w-4 rounded-full">
            3
          </span>
        </button>
        <div className="flex justify-center items-center bg-gray-100 rounded-full p-2">
          <UserRound size={16} className="text-secondary" />
        </div>
      </div>
    </div>
  );
}
