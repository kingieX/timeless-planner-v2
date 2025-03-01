import Link from "next/link";
import { JSX } from "react";

interface DashboardCardProps {
  icon: JSX.Element;
  number: number;
  title: string;
  path: string;
}

export default function DashboardCard({
  icon,
  number,
  title,
  path,
}: DashboardCardProps) {
  return (
    <Link
      href={path}
      className="flex flex-col items-center justify-center w-full p-6 border-2 border-primary rounded-lg transition duration-300 hover:bg-primary hover:text-white"
    >
      <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gray-100 rounded-full text-primary hover:bg-white transition duration-300">
        {icon}
      </div>
      <h2 className="md:text-3xl text-xl font-">{number}</h2>
      <p className="md:text-lg">{title}</p>
    </Link>
  );
}
