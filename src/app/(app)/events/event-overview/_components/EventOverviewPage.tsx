"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EllipsisVertical } from "lucide-react";
import { Event } from "@/types/types";

interface EventProps {
  event: Event;
}

export default function EventOverviewPage({ event }: EventProps) {
  const [activeTab, setActiveTab] = useState("guest-tag");
  //   const hasGuests = event.totalGuest?.length > 0;

  return (
    <div className="py-6 md:px-6 px-4 bg-white">
      <div className="flex flex-col w-full py-4 md:max-w-5xl bg-white mb-4 fixed z-10">
        <h2 className="md:text-2xl text-xl text-gray-900 font-semibold">
          Event overview
        </h2>
      </div>

      <div className="flex justify-between items-center mb-4 mt-20">
        <h2 className="md:text-xl font-">{event.name}</h2>
        <EllipsisVertical size={24} className="md:mr-8" />
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
          <p className="text-gray-800">{event.teamLead}</p>
        </div>
      </div>

      {/* Event Section */}
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
          {/* <TabsContent value="guest-tag">
            {event.totalGuest > 0 ? (
              <GuestList guests={event.guestTag} />
            ) : (
              <EmptyGuestList />
            )}
          </TabsContent> */}

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
