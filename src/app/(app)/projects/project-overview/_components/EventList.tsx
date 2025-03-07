"use client";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface Event {
  id: number;
  name: string;
  dueDate: string;
  eventTime: string;
  location: string;
  team: string[];
}

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  const router = useRouter();

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full border-collapse border-b rounded-lg overflow-x-aut0 whitespace-nowra">
        <thead className="bg-gray-100">
          <tr>
            <td className="px-4 text-gray-600 py-4 text-left">Event Name</td>
            <td className="px-4 text-gray-600 py-4 text-left">Due Date</td>
            <td className="px-4 text-gray-600 py-4 text-left">Event Time</td>
            <td className="md:table-cell hidden px-4 text-gray-600 py-4 text-left">
              Event Location
            </td>
            <td className="md:table-cell hidden px-4 text-gray-600 py-2 text-left">
              Team
            </td>
            <td className="px-4 text-gray-600 py-4 text-left"></td>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr
              key={index}
              className="border-t text-sm hover:bg-gray-50 cursor-pointer"
              onClick={() => router.push(`/events/event-overview/${event.id}`)}
            >
              <td
                className="px-4 py-4 text-special cursor-pointer hover:underline"
                onClick={() =>
                  router.push(`/events/event-overview/${event.id}`)
                }
              >
                {event.name}
              </td>
              <td className="px-4 py-4">{event.dueDate}</td>
              <td className="px-4 py-4">{event.eventTime}</td>
              <td className="md:table-cell hidden px-4 py-4 text-blue-500">
                {event.location}
              </td>
              <td className="md:table-cell hidden px-4 py-4">
                <div className="flex -space-x-2">
                  {event.team.slice(0, 3).map((member, i) => (
                    <span
                      key={i}
                      className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    >
                      {member[0]}
                    </span>
                  ))}
                  {event.team.length > 3 && (
                    <span className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                      +{event.team.length - 3}
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
