"use client";

import { JSX, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  X,
  LayoutDashboard,
  Briefcase,
  Users,
  Bell,
  Globe,
  Plus,
  Minus,
  LogOut,
  Folder,
  MapPin,
  Tag,
  List,
  UserRoundCheck,
  MessageCircle,
  Speaker,
  Star,
  UserRound,
} from "lucide-react";
import Image from "next/image";

// Sidebar links data
const sidebarLinks = [
  {
    href: "/dashboard",
    icon: <LayoutDashboard size={20} />,
    label: "Dashboard",
  },
  { href: "/projects", icon: <Folder size={20} />, label: "Projects" },
  { href: "/events", icon: <MapPin size={20} />, label: "Events" },
  { href: "/vendor", icon: <Tag size={20} />, label: "Vendor" },
  { href: "/tasks", icon: <List size={20} />, label: "Tasks" },
  { href: "/team", icon: <Users size={20} />, label: "Team" },
  { href: "/rsvp", icon: <UserRoundCheck size={20} />, label: "RSVP" },
  { href: "/chat", icon: <MessageCircle size={20} />, label: "Chat" },
  { href: "/broadcast", icon: <Speaker size={20} />, label: "Broadcast" },
  { href: "/feedback", icon: <Star size={20} />, label: "A.I feedback" },
  { href: "/domain", icon: <Globe size={20} />, label: "Domain" },
  { href: "/notification", icon: <Bell size={20} />, label: "Notification" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`flex flex-col justify-between bg-white w-64 min-h-screen md:px-6 px-2 py-4 border-r-2 fixed z-10 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0 overflow-y-auto max-h-screen`}
      >
        {/* Sidebar Content */}
        <div>
          {/* Logo */}
          <div className="ml-10 md:ml-0 mt-1 flex-shrink-0 flex items-center mb-4">
            <Image
              src="/logo.png"
              alt="TimelessPlanner Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="md:text-lg text-sm font-semibold">
              Timeless Planner
            </span>
          </div>

          {/* Sidebar Links */}
          <ul className="space-y-1">
            {sidebarLinks.map((link) => (
              <SidebarLink key={link.href} {...link} pathname={pathname} />
            ))}
          </ul>
        </div>

        {/* Bottom Section */}
        <div>
          {/* My Workspace */}
          <Link
            href="/workspace"
            className="w-full flex justify-between items-center space-x-3 ml-2 px-2 py-4 text-sm rounded transition hover:text-primary text-gray-700"
          >
            <div className="flex items-center gap-2">
              <Briefcase size={20} />
              <span>My workspace</span>
            </div>
            <div className="flex text-gray-900">
              <Plus size={16} />
              <Minus size={16} />
            </div>
          </Link>

          {/* Profile */}
          <Link
            href="/profile"
            className="w-full flex justify-between items-center space-x-2 px- py-1 text-sm rounded transition hover:text-primary"
          >
            <div className="flex items-center gap-2">
              <div className="relative flex items-center border rounded-full w-10 h-10">
                <UserRound size={20} />
                <span className="absolute top-6 right-0 bg-green-700 text-white text-xs w-2 h-2 rounded-full"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-900">Alison Eyo</span>
                <span className="text-gray-600 text-xs">
                  alison.e@gmail.com
                </span>
              </div>
            </div>
            <div className="flex text-gray-900">
              <LogOut size={16} />
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 bg-primary text-white z-20 p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
}

// SidebarLink Component
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
        className={`flex items-center space-x-3 md:px-4 px-2 md:py-1 py-2 md:text-sm rounded transition ${
          isActive
            ? "bg-gray-100 text-gray-900 font-semibold"
            : "hover:text-primary text-gray-700"
        }`}
      >
        <span className={`${isActive ? "text-primary" : ""}`}>{icon}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
}
