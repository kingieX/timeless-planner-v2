"use client";

import { useState } from "react";
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

interface AddTeamMemberDialogProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function CreateFormDialog({
  isOpen,
  setIsOpen,
}: AddTeamMemberDialogProps) {
  const [formTitle, setFormTitle] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<string>("");
  const router = useRouter();

  const handleContinue = () => {
    const queryParams = new URLSearchParams({
      formTitle,
      selectedEvent,
    }).toString();
    router.push(`/events/add-event?${queryParams}`);
  };
  console.log("Selected Event:", selectedEvent);

  return (
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
                  <p className="px-2 py-1 text-gray-500">No events available</p>
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
  );
}
