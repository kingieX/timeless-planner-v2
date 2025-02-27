"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname(); // Get the current active route

  return (
    <footer className="flex flex-col justify-center bg-background py-16 text-white text-center">
      <div className="flex md:flex-row flex-col md:justify-between items-center md:px-12 md:mt-20 mt-8">
        <div className="md:flex-grow flex space-x-8 md:pl-28">
          <NavItem href="/" pathname={pathname} label="Home" />
          <NavItem href="/pricing" pathname={pathname} label="Pricing" />
          <NavItem href="/contact-us" pathname={pathname} label="Contact us" />
        </div>

        <div className="md:w-2/5 py-8">
          <div className="w-full flex md:flex-row flex-col md:justify-end justify-center items-center md:gap-8 gap-4">
            <div className="md:flex-grow flex justify-between px-2 py-1 border border-white rounded-full">
              <input
                type="text"
                className="text-white bg-transparent placeholder:text-white outline-none border-none md:flex-grow mr-2"
                placeholder="Enter your email to subscribe"
              />
              <div className="p-1 bg-primary rounded-full hover:opacity">
                <ChevronDown className="text-white" />
              </div>
            </div>
            <Link
              href="/signup"
              className="bg-primary text-white px-6 py-2 rounded-full shadow-md hover:bg-opacity-70 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-white my-10 md:mx-12 mx-6"></div>
      <p className="text-xs text-gray-200 text-center">
        &copy; {new Date().getFullYear()} Timeless planner. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

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
  // const isActive = pathname === href;
  const isActive = pathname.startsWith(href); // Matches all subpages too

  return (
    <Link
      href={href}
      className={`${
        isActive
          ? "text-white font-semibold"
          : "text-white hover:text-gray-300 hover:underline"
      } ${mobile ? "block text-center py-2" : ""}`}
    >
      {label}
    </Link>
  );
}
