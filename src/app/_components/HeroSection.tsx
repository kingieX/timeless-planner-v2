/* eslint-disable react/no-unescaped-entities */
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center md:px-6 px-8 pt-12">
      {/* Floating Circles */}
      <div className="hidden md:flex justify-center items-center absolute top-64 left-16 w-6 h-6 bg-yellow-600 rounded-full opacity-50 animate-pulse">
        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>
      <div className="hidden md:flex justify-center items-center absolute top-24 left-[250px] w-6 h-6 bg-green-900 rounded-full opacity-60">
        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>
      <div className="hidden md:flex justify-center items-center absolute top-36 right-20 w-8 h-8 bg-red-600 rounded-full opacity-70">
        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>
      <div className="hidden md:flex justify-center items-center absolute top-72 right-32 w-6 h-6 bg-blue-600 rounded-full opacity-50 animate-pulse">
        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>
      <div className="hidden md:flex justify-center items-center absolute top-24 right-[250px] w-4 h-4 bg-green-800 rounded-full opacity-60">
        <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
      </div>
      <div className="hidden md:flex justify-center items-center z-10 absolute bottom-64 right-4 w-10 h-10 border border-white rounded-full opacity-50 animate-pulse">
        <div className="flex justify-center items-center w-6 h-6 p-1 bg-yellow-600 rounded-full">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full flex flex-col justify-center items-center md:mx-auto md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Say Goodbye To Event Planning Stress
        </h1>
        <p className="text-3xl md:text-5xl text-primary font-bold mt-2 mb-4">
          Simplify Tasks, Boost Profits
        </p>
        <p className="max-w-4xl text-gray-600">
          TimelessPlanner is your ultimate event planning companion, designed to
          help you create unforgettable experiences with minimal effort. Whether
          you're a professional event planner, a bride-to-be, or organizing a
          corporate event, it provides all the tools you need to plan, manage,
          and execute your event flawlessly.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/signup"
            className="bg-primary text-white md:px-6 px-4 py-3 rounded-full shadow-md flex items-center justify-center gap-2 group hover:bg-opacity-80 transition"
          >
            <span>Get Started</span>
            <ArrowRight className="text-white transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/features"
            className="border border-primary text-primary md:px-8 px-4 py-3 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            Explore
          </Link>
        </div>
        <div className="w-full md:px-12 mt-10 z-10">
          <Image
            src="/home/HeroImage.png" // Replace with actual image path
            alt="Hero Image"
            width={1000}
            height={1000}
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>

      {/* Full-Width Gradient Background */}
      <div className="absolute inset-x-0 bottom-0 md:h-96 h-24 bg-gradient-to-b from-transparent to-[#1877f2]"></div>
    </section>
  );
}
