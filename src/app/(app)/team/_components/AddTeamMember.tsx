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
import { tasks } from "@/data/data";
import { Task } from "@/types/types";

export default function AddTeamMember() {
  const [isOpen, setIsOpen] = useState(false);
  const [teamMemberName, setTeamMemberName] = useState("");
  const [email, setEmail] = useState("");
  const [teamMemberDescription, setTeamMemberDescription] = useState("");
  const [selectedTask, setSelectedTask] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState("");
  const router = useRouter();

  const handleContinue = () => {
    // const queryParams = new URLSearchParams({
    //   teamMemberName,
    //   selectedProject,
    // }).toString();
    // router.push(`/team/?${queryParams}`);
    router.push("/team");
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
      <h2 className="text-lg font-semibold mt-4">No Team Found</h2>
      <p className="text-gray-500 mt-2 max-w-md">
        It looks like you haven't created any team yet. Click below to create
        your team.
      </p>
      <Button
        className="w-full block text-center bg-primary text-white py-2 mx-4 rounded-lg hover:bg-opacity-80 transition mt-4"
        onClick={() => setIsOpen(true)}
      >
        Add team member
      </Button>

      {/* Create Event Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Team</DialogTitle>
          </DialogHeader>

          {/* Team Member Name */}
          <div className="flex flex-col gap-2">
            <label className="hidden md:block">Enter Team Member Name</label>
            <Input
              placeholder="Team member name"
              value={teamMemberName}
              onChange={(e) => setTeamMemberName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="hidden md:block">Email</label>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Task Selection */}
          <div className="flex flex-col gap-2">
            <label className="hidden md:block">TASK</label>
            <Select value={selectedTask} onValueChange={setSelectedTask}>
              <SelectTrigger className="w-full">
                <SelectValue
                  className="text-gray-600"
                  placeholder="Select a task"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select task</SelectLabel>
                  {tasks && tasks.length > 0 ? (
                    tasks.map((task: Task) => (
                      <SelectItem key={task.id} value={task.id.toString()}>
                        {task.taskName}
                      </SelectItem>
                    ))
                  ) : (
                    <p className="px-2 py-1 text-gray-500">No task available</p>
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* ROLE */}
          <div className="flex flex-col gap-2">
            <label className="hidden md:block">ROLE</label>
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger className="w-full">
                <SelectValue
                  className="text-gray-600"
                  placeholder="Select a task role"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select team</SelectLabel>
                  <SelectItem value="team-lead">Team Lead</SelectItem>
                  <SelectItem value="team-Member">Team Member</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* team member description */}
          <div className="flex flex-col gap-2">
            <label className="hidden md:block">Task Member Description</label>
            <Input
              placeholder="team member description"
              value={teamMemberDescription}
              onChange={(e) => setTeamMemberDescription(e.target.value)}
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
              disabled={
                !teamMemberName ||
                !email ||
                !teamMemberDescription ||
                !selectedRole
              }
              onClick={handleContinue}
            >
              Add team member
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
