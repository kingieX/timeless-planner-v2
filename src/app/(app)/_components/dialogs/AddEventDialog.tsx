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
import { projectData } from "@/data/data";

interface AddEventDialogProps {
  isOpen: boolean;
  setIsOpen: () => void;
  project: Project;
  projectData: { projects: Project[] };
}

export default function AddEventDialog({
  isOpen,
  setIsOpen,
  project,
}: //   projectData,
AddEventDialogProps) {
  const [eventName, setEventName] = useState("");
  const [selectedProject, setSelectedProject] = useState<string>("");
  const router = useRouter();

  const handleContinue = () => {
    const queryParams = new URLSearchParams({
      eventName,
      selectedProject,
      projectId: String(project.id),
    }).toString();
    router.push(`/events/add-event?${queryParams}`);
  };

  return (
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
            onClick={setIsOpen}
          >
            Cancel
          </Button>
          <Button disabled={!eventName} onClick={handleContinue}>
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
