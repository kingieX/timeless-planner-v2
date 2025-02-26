"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration
      once: false, // Ensures animation runs every time it enters the viewport
      easing: "ease-in-out",
    });
  }, []);

  return null; // No UI, just initializing AOS
}
