/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { projectData } from "@/data/data";
import { Event } from "@/types/types";

export default function CreateForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<string>("");
  const router = useRouter();

  const event = projectData.projects
    .flatMap((project) => project.events)
    .find((event) => event.id);

  // if (event) {
  //   console.log("event ID: ", event.id);
  // }

  const handleContinue = () => {
    if (!event) {
      console.error("No event found!");
      return;
    }

    const queryParams = new URLSearchParams({
      formTitle,
      selectedEvent,
    }).toString();
    router.push(`/feedback/${event.id}?${queryParams}`);
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
      <h2 className="text-lg font-semibold mt-4">No form Found</h2>
      <p className="text-gray-500 mt-2 max-w-md">
        It looks like you haven't created any form yet. Click below to create
        your feedback form.
      </p>
      <Button
        className="w-full block text-center bg-primary text-white py-2 mx-4 rounded-lg hover:bg-opacity-80 transition mt-4"
        onClick={() => setIsOpen(true)}
      >
        Create form
      </Button>

      {/* Create Event Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create feedback form</DialogTitle>
          </DialogHeader>

          {/* form Title */}
          <div className="flex flex-col gap-2">
            <label>Form Title</label>
            <Input
              placeholder="Form title"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
            />
          </div>

          {/* Event Selection */}
          <div className="flex flex-col gap-2">
            <label>Event</label>
            <Select value={selectedEvent} onValueChange={setSelectedEvent}>
              <SelectTrigger className="w-full">
                <SelectValue
                  className="text-gray-600"
                  placeholder="Select an event"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select event</SelectLabel>
                  {projectData.projects && projectData.projects.length > 0 ? (
                    projectData.projects
                      .flatMap((project) => project.events)
                      .map((event: Event) => (
                        <SelectItem key={event.id} value={event.name}>
                          {event.name}
                        </SelectItem>
                      ))
                  ) : (
                    <p className="px-2 py-1 text-gray-500">
                      No events available
                    </p>
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
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
              disabled={!selectedEvent || !formTitle}
              onClick={handleContinue}
            >
              Set up form
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
