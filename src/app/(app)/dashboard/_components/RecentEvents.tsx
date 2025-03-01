"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

const events = [
  {
    name: "Project Kickoff",
    description: "Initial meeting with the team.",
    icon: <ChevronRight size={20} />,
    link: "/events/1",
  },
  {
    name: "Design Review",
    description: "Review UI/UX designs.",
    icon: <ChevronRight size={20} />,
    link: "/events/2",
  },
  {
    name: "Development Sprint",
    description: "Start backend implementation.",
    icon: <ChevronRight size={20} />,
    link: "/events/3",
  },
  {
    name: "Code Review",
    description: "Review backend code.",
    icon: <ChevronRight size={20} />,
    link: "/events/4",
  },
  {
    name: "Deployment",
    description: "Deploy the application to production.",
    icon: <ChevronRight size={20} />,
    link: "/events/5",
  },
];

export function RecentEvents() {
  return (
    <div className="bg-white py-4">
      <h3 className="md:text-lg text-gray-600 mb-3">Recent Events</h3>
      <ul className="border rounded-md ">
        {events.map((event, index) => (
          <Link
            href={event.link}
            key={index}
            className="flex justify-between items-center px-4 py-2 border-b last:border-none hover:bg-gray-100"
          >
            <div>
              <p className="text-gray-900">{event.name}</p>
              <p className="text-sm text-gray-500">{event.description}</p>
            </div>
            <span className="text-gray-600">{event.icon}</span>
          </Link>
        ))}
      </ul>
    </div>
  );
}
