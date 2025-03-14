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

interface CreateProjectDialogProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function CreateProjectDialog({
  isOpen,
  setIsOpen,
}: CreateProjectDialogProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const router = useRouter();

  const handleSave = () => {
    setIsSuccess(true);
  };

  const handleAddEvent = () => {
    router.push("/add-event");
  };

  const handleProjectOverview = () => {
    router.push("/projects");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle>Create Project</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-2">
              <label>Project Name</label>
              <Input
                placeholder="Project Name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Project Description</label>
              <Input
                placeholder="Project Description"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              />
            </div>
            <div className="flex justify-between gap-2 mt-4 md:mt-6">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button
                disabled={!projectName || !projectDescription}
                onClick={handleSave}
              >
                Save Project
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="bg-primary py-8 rounded-lg">
              <Image
                src="/projects/Macbook.png"
                alt="Success"
                width={1000}
                height={1000}
                className="w-1/2 mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">
              Project successfully added
            </h3>
            <p className="text-gray-500 mt-2">
              You can now add guest tags and team members to your event.
            </p>
            <div className="flex justify-between gap-2 mt-4">
              <Button onClick={handleAddEvent} variant="outline">
                Add Event
              </Button>
              <Button onClick={handleProjectOverview}>Project Overview</Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
