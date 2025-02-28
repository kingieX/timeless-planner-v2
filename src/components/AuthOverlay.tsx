"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const textOverlay = [
  {
    title: "Create and Manage Events",
    description:
      "Effortlessly organize events with precision. From virtual to physical venues, plan every detail your way.",
  },
  {
    title: "Seamless Coordination",
    description:
      "AI-powered tools make event management easy and efficient, so you can focus on what truly matters.",
  },
  {
    title: "Real-Time Updates",
    description:
      "Stay informed with instant notifications and tracking for all your scheduled events.",
  },
  {
    title: "Customizable Experience",
    description:
      "Tailor every aspect of your events to fit your unique needs with our flexible platform.",
  },
];

export default function AuthOverlay() {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textOverlay.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden md:block w-1/2 pr-12 relative">
      <Image
        src="/login-image.png"
        alt="Event Planning"
        width={1000}
        height={1000}
        className="content-evenly"
      />
      <div className="absolute bottom-24 left-8 bg-white/60 p-6 rounded-lg shadow-lg w-3/4 transition-opacity duration-500">
        <h3 className="text-xl font-semibold text-gray-900">
          {textOverlay[currentText].title}
        </h3>
        <p className="text-gray-600 mt-1">
          {textOverlay[currentText].description}
        </p>
        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-4">
          {textOverlay.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentText ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
