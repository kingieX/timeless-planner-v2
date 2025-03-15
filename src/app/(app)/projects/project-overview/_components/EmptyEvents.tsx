/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Project } from "@/types/types";

interface ProjectData {
  projects: Project[];
}

interface EmptyEventsProps {
  project: Project;
  projectData: ProjectData;
}

export default function EmptyEvents({
  project,
  projectData,
}: EmptyEventsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [eventName, setEventName] = useState("");
  const [selectedProject, setSelectedProject] = useState<string>(project.title);
  const router = useRouter();

  console.log("project", project);
  console.log("projectData", projectData);

  const projectId = String(project.id);

  const handleContinue = () => {
    const queryParams = new URLSearchParams({
      eventName,
      selectedProject,
      projectId,
    }).toString();
    router.push(`/events/add-event?${queryParams}`);
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
      <h2 className="text-lg font-semibold mt-4">No Event Found</h2>
      <p className="text-gray-500 mt-2 max-w-md">
        It looks like you haven't created any event yet. Click below to create
        your event.
      </p>
      <Button
        className="w-full block text-center bg-primary text-white py-2 mx-4 rounded-lg hover:bg-opacity-80 transition mt-4"
        onClick={() => setIsOpen(true)}
      >
        Add event
      </Button>

      {/* Create Event Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Event</DialogTitle>
          </DialogHeader>

          {/* Event Name */}
          <div className="flex flex-col gap-2">
            <label className="">Event Name</label>
            <Input
              placeholder="Event name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>

          {/* Project Selection */}
          <div className="flex flex-col gap-2">
            <label className="">Project</label>
            <Select
              value={selectedProject}
              onValueChange={(value) => setSelectedProject(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a project" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {projectData.projects?.map((proj) => (
                    <SelectItem key={proj.id} value={proj.title}>
                      {proj.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Switch */}
          <div className="flex items-center space-x-2">
            <Switch id="team" />
            <Label htmlFor="team">TEAM</Label>
          </div>

          <div className="flex justify-between gap-2 mt-4 md:mt-6">
            <Button
              className="text-primary"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button disabled={!eventName} onClick={handleContinue}>
              Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
