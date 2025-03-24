"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EllipsisVertical, SquarePen, Trash } from "lucide-react";
import { Event } from "@/types/types";
import EmptyGuestList from "./EmptyGuestList";
import GuestList from "./GuestList";
import { useProject } from "@/context/ProjectContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface EventProps {
  event: Event;
}

export default function EventOverviewPage({ event }: EventProps) {
  const [activeTab, setActiveTab] = useState("guest-tag");
  //   const hasGuests = event.totalGuest?.length > 0;

  // console.log("event", event.id);
  const { setEvent } = useProject();

  useEffect(() => {
    setEvent(event); // Set project in context
  }, [event, setEvent]);

  return (
    <div className="py-6 md:px-6 px-4 bg-white">
      <div className="flex flex-col w-full py-4 md:max-w-5xl bg-white mb-4 fixed z-10">
        <h2 className="md:text-2xl text-xl text-gray-900 font-semibold">
          Event overview
        </h2>
      </div>

      <div className="flex justify-between items-center mb-4 mt-20">
        <h2 className="md:text-xl font-">{event.name}</h2>
        <DropdownMenu>
          <DropdownMenuTrigger className="md:mr-8">
            <EllipsisVertical size={24} className="cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="text-gray-600 hover:text-gray-400">
              <SquarePen />
              <span>Edit event</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600 hover:text-red-400">
              <Trash />
              <span>Delete event</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex justify-between gap-4 md:max-w-md">
        <div className="space-y-2 text-sm">
          <p className="text-gray-500 uppercase">Created time </p>
          <p className="text-gray-500 uppercase">Event date </p>
          <p className="text-gray-500 uppercase">Event time</p>
          <p className="text-gray-500 uppercase">Event type</p>
          <p className="text-gray-500 uppercase">Event location</p>
          <p className="text-gray-500 uppercase">Industry</p>
          <p className="text-gray-500 uppercase">Team Member</p>
          <p className="text-gray-500 uppercase">Team lead</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-gray-800">{event.createdAt}</p>
          <p className="text-gray-800">{event.eventDate}</p>
          <p className="text-gray-800">{event.eventTime}</p>
          <p className="text-gray-800">{event.eventType}</p>
          <p className="text-primary">{event.location}</p>
          <p className="text-gray-800">{event.industry}</p>
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
          {/* <p className="text-gray-800">{event.teamLead}</p> */}
          {/* Team Lead (Profile Style) */}
          <div className="flex items-center gap-2">
            {event.teamLead.length > 0 ? (
              <>
                <span className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  {event.teamLead[0].name[0]}{" "}
                  {/* Display first letter of first team lead */}
                </span>
                <p className="text-red-700">{event.teamLead[0].email}</p>
              </>
            ) : (
              <p className="text-gray-500">No team lead assigned</p>
            )}
          </div>
        </div>
      </div>

      {/* Event Section */}
      <div className="flex flex-col justify-center">
        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="">
          <div className="flex items-center mt-8 border-b">
            <TabsList>
              <TabsTrigger value="guest-tag">Guest Tag</TabsTrigger>
              <TabsTrigger value="team-chat">Team Chat</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="vendors">Vendors</TabsTrigger>
              <TabsTrigger value="attachments">Attachments</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
            </TabsList>
          </div>

          {/* Guest Tag Content */}
          <TabsContent value="guest-tag">
            {event.guestTag.length > 0 &&
            event.guestTag.some((tag) => tag.guests.length > 0) ? (
              <GuestList event={event} />
            ) : (
              <div className="flex justify-center items-center py-8">
                <EmptyGuestList event={event} />
              </div>
            )}
          </TabsContent>

          {/* Other Tabs Content */}
          <TabsContent value="team-chat">{/* <TeamChat /> */}</TabsContent>
          <TabsContent value="team">{/* <Team /> */}</TabsContent>
          <TabsContent value="vendors">{/* <Vendors /> */}</TabsContent>
          <TabsContent value="attachments">{/* <Attachments /> */}</TabsContent>
          <TabsContent value="tasks">{/* <Tasks /> */}</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
