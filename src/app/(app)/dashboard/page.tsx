"use client";

import { LayoutDashboard, MapPin, List } from "lucide-react";
import DashboardCard from "./_components/DashboardCard";
import { RecentEvents } from "./_components/RecentEvents";
import RecentTasks from "./_components/RecentTasks";

export default function Dashboard() {
  const cardData = [
    {
      icon: <LayoutDashboard size={24} />, // Projects Icon
      number: 14,
      title: "Projects",
      path: "/projects",
    },
    {
      icon: <MapPin size={24} />, // Events Icon
      number: 14,
      title: "Events",
      path: "/events",
    },
    {
      icon: <List size={24} />, // Tasks Icon
      number: 14,
      title: "Tasks",
      path: "/tasks",
    },
  ];

  return (
    <div className="py-6 mt-4">
      <h2 className="md:text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <DashboardCard
            key={index}
            icon={card.icon}
            number={card.number}
            title={card.title}
            path={card.path}
          />
        ))}
      </div>

      {/* Recent Events & Recent Tasks Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <RecentEvents />
        <RecentTasks />
      </div>
    </div>
  );
}
