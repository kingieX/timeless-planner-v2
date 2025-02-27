/* eslint-disable react/no-unescaped-entities */
"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaFacebook, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock } from "react-icons/fi";

export default function LoginPage() {
  return (
    <div className="w-full min-h-scree flex flex-col">
      <Navbar />
      <div className="flex flex-col md:flex-row w-full h-full items-center mt-16">
        {/* Left Section: Image */}
        <div className="hidden md:block w-1/2 pr-12">
          <Image
            src="/login-image.png"
            alt="Event Planning"
            width={1000}
            height={1000}
            className="content-evenly"
          />
        </div>

        {/* Right Section: Login Form */}
        <div className="w-full md:w-1/2 bg-white p-8 max-w-xl md:ml-1 md:-mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Welcome back!</h2>
          <p className="text-gray-600 mt-2">
            Simplify event planning with AI-powered tools for seamless
            coordination and management.
          </p>

          {/* Login Form */}
          <form className="mt-12 space-y-4">
            <div className="relative">
              <FiMail className="absolute left-3 top-4 text-gray-600" />
              <input
                type="email"
                placeholder="olivia@untitledui.com"
                className="w-full pl-10 p-3 border rounded-lg outline-none focus:ring focus:ring-primary"
              />
            </div>
            <div className="relative">
              <FiLock className="absolute left-3 top-4 text-gray-600" />
              <input
                type="password"
                placeholder="at least 8 character"
                className="w-full pl-10 p-3 border rounded-lg outline-none focus:ring focus:ring-primary"
              />
              <FaRegEyeSlash className="absolute right-3 top-4 text-gray-600" />
            </div>
            <div className="text-right">
              <a
                href="#"
                className="text-primary text-sm font-medium hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white p-3 rounded-lg hover:bg-primary-dark transition"
              //   disabled ? '' : ''
            >
              Login
            </button>
          </form>

          {/* Social Login */}
          <div className="flex items-center my-4 ">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-500 text-sm">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="flex md:flex-row justify-center flex-col gap-4">
            <button className="w-full flex items-center justify-center border p-3 rounded-lg hover:bg-gray-100 transition">
              <FcGoogle className="mr-2" size={24} /> Sign in with Google
            </button>
            <button className="w-full bg-primary text-white flex items-center justify-center border p-3 rounded-lg hover:bg-primary/70 transition">
              <FaFacebook className="text-white mr-2" size={24} /> Sign in with
              Facebook
            </button>
          </div>

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-600 md:mt-16 mt-4">
            Don't have an account?{" "}
            <a href="#" className="text-primary font-medium hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
