/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaFacebook, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock } from "react-icons/fi";

const textOverlay = [
  "Create and Manage Events",
  "Effortlessly organize events",
  "From virtual to physical venues",
  "Plan every detail your way",
];

export default function LoginPage() {
  const [currentText, setCurrentText] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textOverlay.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col md:flex-row w-full h-full items-center mt-16">
        {/* Left Section: Image with Overlay */}
        <div className="hidden md:block w-1/2 pr-12 relative">
          <Image
            src="/login-image.png"
            alt="Event Planning"
            width={1000}
            height={1000}
            className="content-evenly"
          />
          <div className="absolute bottom-20 left-8 bg-white p-4 rounded-lg shadow-lg w-3/4">
            <p className="text-lg font-semibold text-gray-900">
              {textOverlay[currentText]}
            </p>
          </div>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <FiLock className="absolute left-3 top-4 text-gray-600" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="at least 8 character"
                className="w-full pl-10 p-3 border rounded-lg outline-none focus:ring focus:ring-primary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <FaRegEye
                  className="absolute right-3 top-4 text-gray-600 cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FaRegEyeSlash
                  className="absolute right-3 top-4 text-gray-600 cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
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
              className="w-full bg-primary text-white p-3 rounded-lg hover:bg-primary-dark transition disabled:bg-gray-300"
              disabled={!email || !password}
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
