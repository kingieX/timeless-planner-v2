"use client";

import { JSX, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  Map,
  Bell,
  Settings,
  Trash2,
  Recycle,
} from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-white text- w-64 min-h-screen p-6 border-r-2 fixed transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0`}
      >
        <div className="flex-shrink-0 flex items-center mb-6">
          <Image
            src="/logo.png"
            alt="TimelessPlanner Logo"
            width={32}
            height={32}
            className="mr-2"
          />
          <span className="md:text-lg">Timeless planner</span>
        </div>

        <ul className="space-y-4">
          <SidebarLink
            href="/dashboard"
            icon={<Home size={20} />}
            label="Dashboard"
            pathname={pathname}
          />
          {/* <SidebarLink
            href="/bin-status"
            icon={<Trash2 size={20} />}
            label="Waste Bin Status"
            pathname={pathname}
          />
          <SidebarLink
            href="/map"
            icon={<Map size={20} />}
            label="Map View"
            pathname={pathname}
          />
          <SidebarLink
            href="/history"
            icon={<Bell size={20} />}
            label="History & Reports"
            pathname={pathname}
          />
          <SidebarLink
            href="/settings"
            icon={<Settings size={20} />}
            label="Settings"
            pathname={pathname}
          /> */}
        </ul>
      </div>

      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 bg-primary text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
}

// SidebarLink Component for Reusability
function SidebarLink({
  href,
  icon,
  label,
  pathname,
}: {
  href: string;
  icon: JSX.Element;
  label: string;
  pathname: string;
}) {
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition ${
          isActive ? "bg-primary text-white" : "hover:text-primary"
        }`}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
}
