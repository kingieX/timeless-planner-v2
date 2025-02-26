import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TimelessPlanner",
  description:
    "TimelessPlanner is your ultimate event planning companion, designed to help you create unforgettable experiences with minimal effort. Whether you're a professional event planner, a bride-to-be, or organizing a corporate event, it provides all the tools you need to plan, manage, and execute your event flawlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
