"use client";

import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { Event } from "@/types/types";

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  const router = useRouter();

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full border-collapse border-b rounded-lg overflow-x-aut whitespace-nowra">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 text-gray-600 py-4 text-left">Event Name</th>
            <th className="px-4 text-gray-600 py-4 text-left">Due Date</th>
            <th className="px-4 text-gray-600 py-4 text-left">Event Time</th>
            <th className="md:table-cell hidden px-4 text-gray-600 py-4 text-left">
              Event Location
            </th>
            <th className="md:table-cell hidden px-4 text-gray-600 py-2 text-left">
              Team Members
            </th>
            <th className="px-4 text-gray-600 py-4 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr
              key={event.id}
              className="border-t text-sm hover:bg-gray-50 cursor-pointer"
              onClick={() => router.push(`/events/event-overview/${event.id}`)}
            >
              <td className="px-4 py-4 text-special cursor-pointer hover:underline">
                {event.name}
              </td>
              <td className="px-4 py-4">{event.eventDate}</td>
              <td className="px-4 py-4">{event.eventTime}</td>
              <td className="md:table-cell hidden px-4 py-4 text-blue-500">
                {event.location}
              </td>
              <td className="md:table-cell hidden px-4 py-4">
                <div className="flex -space-x-2">
                  {event.teamMembers.slice(0, 3).map((member) => (
                    <span
                      key={member.id}
                      className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    >
                      {member.name[0]}
                    </span>
                  ))}
                  {event.teamMembers.length > 3 && (
                    <span className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                      +{event.teamMembers.length - 3}
                    </span>
                  )}
                </div>
              </td>
              <td>
                <ChevronRight className="text-gray-600" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
