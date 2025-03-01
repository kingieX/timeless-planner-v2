"use client";

// import { useState } from "react";
import { LayoutDashboard, MapPin, List } from "lucide-react";
import DashboardCard from "./_components/DashboardCard";
import { RecentEvents } from "./_components/RecentEvents";
import RecentTasks from "./_components/RecentTasks";
import { TeamChat } from "./_components/TeamChat";
import { TeamLeads } from "./_components/TeamLeads";

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

  // Mock activity data (Replace with API data later)
  // const [recentEvents, setRecentEvents] = useState([]);
  // const [recentTasks, setRecentTasks] = useState([]);
  // const [teamChat, setTeamChat] = useState([]);
  // const [teamLeads, setTeamLeads] = useState([]);

  // Check if there are any activities
  // const hasActivities =
  //   recentEvents.length > 0 ||
  //   recentTasks.length > 0 ||
  //   teamChat.length > 0 ||
  //   teamLeads.length > 0;

  return (
    <div className="py-6 mt-4">
      <h2 className="md:text-2xl font-semibold mb-4">Dashboard</h2>

      {/* Always Show Dashboard Cards */}
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

      {/* Show other components only if there are activities */}
      {/* {hasActivities && ( */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <RecentEvents />
        <RecentTasks />
        <TeamChat />
        <TeamLeads />
      </div>
      {/* )} */}
    </div>
  );
}
