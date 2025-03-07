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

export default function EmptyProjects() {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="flex flex-col md:px-4 px-6 items-center max-w-sm justify-center h-full text-center">
      <div className="bg-gray-100 p-6 rounded-full">
        <Image
          src="/projects/Illustration.png"
          alt="Illustration"
          width={150}
          height={150}
        />
      </div>
      <h2 className="text-lg font-semibold mt-4">No Project Found</h2>
      <p className="text-gray-500 mt-2 max-w-md">
        It looks like you haven't created any project yet. Click below to create
        your project.
      </p>
      <Button
        className="w-full block text-center bg-primary text-white py-2 mx-4 rounded-lg hover:bg-opacity-80 transition mt-4"
        onClick={() => setIsOpen(true)}
      >
        Create Project
      </Button>

      {/* Create Project Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          {!isSuccess ? (
            <>
              <DialogHeader>
                <DialogTitle>Create Project</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-2">
                <label className="">Project Name</label>
                <Input
                  placeholder="Project Name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="">Project Description</label>
                <Input
                  placeholder="Project Description"
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                />
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
                you can now add guest tag and team to your event.
              </p>
              <div className="flex justify-between gap-2 mt-4">
                <Button onClick={handleAddEvent} variant="outline">
                  Add Event
                </Button>
                <Button onClick={handleProjectOverview}>
                  Project Overview
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
