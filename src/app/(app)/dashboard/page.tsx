"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DashboardPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="p-6 bg-white mt-8">
      <h2 data-aos="fade-up" className="text-3xl font-semibold text-primary">
        Welcome to Your Dashboard
      </h2>
    </main>
  );
}
