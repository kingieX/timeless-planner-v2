"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Camera, Mail, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProfileTab = () => {
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

  const user = {
    avatar: "/profile.png", // You can replace this with any placeholder image or profile pic
    firstName: "Jimoh",
    lastName: "Gafar",
    email: "olamhoore@gmail.com",
    phone: "+234 802 399 4499",
    jobTitle: "",
    stats: {
      events: 10,
      projects: 10,
      tasks: 10,
    },
  };

  return (
    <div>
      <div className="w-full h-56 bg-gray-300">
        <div className=" flex justify-end p-4">
          <Button
            variant="outline"
            className="flex items-center gap-4 text-white border-white"
          >
            <Camera size={16} />
            <span>Change cover</span>
          </Button>
        </div>
      </div>
      <div className="-mt-20 w-full flex flex-col lg:flex-row gap-6 p-6 bg- rounded-lg">
        {/* Left - Profile Summary */}
        <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-xl flex flex-col items-center shadow-sm">
          <Image
            src={user.avatar}
            alt="User avatar"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">
            {user.firstName} {user.lastName}
          </h3>
          <a href={`mailto:${user.email}`} className="text-sm text-blue-600">
            {user.email}
          </a>

          <div className="w-full my-6 md:pb-8 space-y-">
            <div className="flex justify-between border-t border-b border-gray-100 p-2 rounded-md text-sm">
              <span>Event created</span>
              <span className="font-semibold">{user.stats.events}</span>
            </div>
            <div className="flex justify-between border-t border-b border-gray-100 p-2 rounded-md text-sm">
              <span>Project created</span>
              <span className="font-semibold">{user.stats.projects}</span>
            </div>
            <div className="flex justify-between border-t border-b border-gray-100 p-2 rounded-md text-sm">
              <span>Task</span>
              <span className="font-semibold">{user.stats.tasks}</span>
            </div>
          </div>

          <Button className="mt-6 w-full" onClick={() => setIsOpen(true)}>
            Create Project
          </Button>
        </div>

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

        {/* Right - Profile Form */}
        <div className="w-full lg:w-2/3 space-y-6 bg-gray-50 p-6 rounded-xl shadow-sm">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">First Name</label>
              <Input defaultValue={user.firstName} />
            </div>
            <div>
              <label className="text-sm font-medium">Last Name</label>
              <Input defaultValue={user.lastName} />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input defaultValue={user.email} className="pl-8" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-2 top-2.5 h-4 w-4 text-green-500" />
                <Input defaultValue={user.phone} className="pl-8" />
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Job Title</label>
              <Input
                placeholder="Enter your job title"
                defaultValue={user.jobTitle}
              />
            </div>
          </div>

          {/* Password Reset */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Password Reset</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Old Password</label>
                <Input type="password" placeholder="********" />
              </div>
              <div>
                <label className="text-sm font-medium">New Password</label>
                <Input type="password" placeholder="********" />
              </div>
              <div>
                <label className="text-sm font-medium">Confirm Password</label>
                <Input type="password" placeholder="********" />
              </div>
            </div>
            <Button className="mt-4">Update Password</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
