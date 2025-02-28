/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiMail } from "react-icons/fi";
import AuthOverlay from "@/components/AuthOverlay";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/verify-otp");
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col md:flex-row w-full h-full items-center mt-16">
        {/* Left Section: Image with Overlay */}
        <AuthOverlay />

        {/* Right Section: Login Form */}
        <div className="w-full md:w-1/2 bg-white p-8 max-w-xl md:ml-1 md:-mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Forgot Password</h2>
          <p className="text-gray-600 mt-2">
            Enter your email to send reset password link
          </p>

          {/* Login Form */}
          <form className="mt-12 space-y-4" onSubmit={handleSubmit}>
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

            <button
              type="submit"
              className="w-full bg-primary text-white p-3 rounded-lg hover:bg-primary-dark transition disabled:bg-primary/60"
              disabled={!email}
            >
              Send link
            </button>
          </form>

          {/* Social Login */}
          <div className="flex items-center my-4 py-8">
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
            <Link
              href="/signup"
              className="text-primary font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
