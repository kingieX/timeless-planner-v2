"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current active route

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="TimelessPlanner Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="md:text-lg">Timeless planner</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavItem href="/" pathname={pathname} label="Home" />
            <NavItem href="/pricing" pathname={pathname} label="Pricing" />
            <NavItem
              href="/contact-us"
              pathname={pathname}
              label="Contact us"
            />
          </div>

          {/* Right-side Button */}
          <div className="hidden md:flex gap-6">
            <Link
              href="/login"
              className="border border-primary text-primary px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-primary text-white px-6 py-2 rounded-full shadow-md hover:bg-opacity-70 transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 right-0 w-full py-4 space-y-4">
          <NavItem href="/" pathname={pathname} label="Home" mobile />
          <NavItem href="/pricing" pathname={pathname} label="Pricing" mobile />

          <NavItem
            href="/contact-us"
            pathname={pathname}
            label="Contact"
            mobile
          />
          <Link
            href="/login"
            className="block text-center border border-primary text-primary py-2 mx-4 rounded-lg hover:bg-gray-100 transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="block text-center bg-primary text-white py-2 mx-4 rounded-lg hover:bg-opacity-80 transition"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

// Reusable NavItem Component
function NavItem({
  href,
  pathname,
  label,
  mobile = false,
}: {
  href: string;
  pathname: string;
  label: string;
  mobile?: boolean;
}) {
  const isActive = pathname === href;
  // const isActive = pathname.startsWith(href); // Matches all subpages too

  return (
    <Link
      href={href}
      className={`${
        isActive
          ? "text-gray-900 font-semibold border-b-2 border-gray-900"
          : "text-gray-700 hover:text-primary"
      } ${mobile ? "block text-center py-2" : ""}`}
    >
      {label}
    </Link>
  );
}
