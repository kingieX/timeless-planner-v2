/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  //   SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Event } from "@/types/types";
import { projectData } from "@/data/data";

interface EmptyGuestListProps {
  event: Event;
}

export default function EmptyGuestList({ event }: EmptyGuestListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [guestListTag, setGuestListTag] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<string>(event.name);
  //   console.log("Current event:", event.name);

  const eventId = String(event.id);

  const router = useRouter();

  const handleContinue = () => {
    // const queryParams = new URLSearchParams({
    //   guestListTag,
    //   selectedEvent,
    //   eventId,
    // }).toString();
    // router.push(`/events/event-overview/AddguestTag?${queryParams}`);
    router.push(`/events/event-overview/${eventId}`);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col md:px-4 px-2 items-center max-w-sm justify-center h-full text-center">
      <div className="bg-gray-100 p-6 rounded-full">
        <Image
          src="/projects/Illustration.png"
          alt="Illustration"
          width={150}
          height={150}
        />
      </div>
      <h2 className="text-lg font-semibold mt-4">No Guest Found</h2>
      <p className="text-gray-500 mt-2 max-w-md">
        It looks like you haven't added any guest yet. Click below to add guest
        to your event.
      </p>
      <Button
        className="w-full block text-center bg-primary text-white py-2 mx-4 rounded-lg hover:bg-opacity-80 transition mt-4"
        onClick={() => setIsOpen(true)}
      >
        Add guest tag
      </Button>

      {/* Create Event Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add guest tag</DialogTitle>
          </DialogHeader>

          {/* Guest list tag */}
          <div className="flex flex-col gap-2">
            <label>Guest list tag</label>
            {/* <Input
              placeholder="Event name"
              value={guestListTag}
              onChange={(e) => setGuestListTag(e.target.value)}
            /> */}
            <Select
              value={guestListTag}
              onValueChange={(value) => setGuestListTag(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Guest list tag" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vip-guests">VIP guests</SelectItem>
                <SelectItem value="family-guests">Family guests</SelectItem>
                <SelectItem value="business-partners">
                  Business partners
                </SelectItem>
                <SelectItem value="guest-speakers">Guest Speakers</SelectItem>
                <SelectItem value="other-attendees">Other attendees</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Event Selection */}
          <div className="flex flex-col gap-2">
            <label>Event</label>
            <Select
              value={selectedEvent}
              onValueChange={(value) => setSelectedEvent(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue
                  className="text-gray-600"
                  placeholder="Select an event"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Select event</SelectLabel> */}
                  {projectData.projects && projectData.projects.length > 0 ? (
                    projectData.projects
                      .flatMap((proj) => proj.events) // Flatten all events into a single array
                      .map((event: Event) => (
                        <SelectItem key={event.id} value={event.name}>
                          {event.name}
                        </SelectItem>
                      ))
                  ) : (
                    <p className="px-2 py-1 text-gray-500">
                      No event available
                    </p>
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* RSVP Form */}
          <div className="flex items-center space-x-2">
            <Switch id="team" />
            <Label htmlFor="team">RSVP FORM</Label>
          </div>

          {/* Name badge printing */}
          <div className="flex items-center space-x-2">
            <Switch id="team" />
            <Label htmlFor="team">NAME BADGE PRINTING</Label>
          </div>

          <div className="flex justify-between gap-2 mt-4 md:mt-6">
            <Button
              className="text-primary"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button
              disabled={!guestListTag || !selectedEvent}
              onClick={handleContinue}
            >
              Add guest tag
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
