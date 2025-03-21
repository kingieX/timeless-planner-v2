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
import { Textarea } from "@/components/ui/textarea";

interface CreateTaskDialogProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function CreateTask({
  isOpen,
  setIsOpen,
}: CreateTaskDialogProps) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  //   const [startDate, setStartDate] = useState("");
  //   const [endDate, setEndDate] = useState("");
  const router = useRouter();

  const handleContinue = () => {
    const queryParams = new URLSearchParams({
      taskName,
      taskDescription,
    }).toString();
    router.push(`/tasks/create-task?${queryParams}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
        </DialogHeader>

        {/* Task Name */}
        <div className="flex flex-col gap-2">
          <label>Task Name</label>
          <Input
            placeholder="Task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>

        {/* Task Description */}
        <div className="flex flex-col gap-2">
          <label>Task Description</label>
          <Textarea
            placeholder="task description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>

        {/* Start and End Date */}
        <div className="flex items-center space-x-2">
          <div className="flex flex-col gap-2">
            <label>Start Date</label>
            <Input
              type="date"
              // ]                value={startDate}
              // onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>End Date</label>
            <Input
              type="date"
              // value={endDate}
              // onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
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
            disabled={!taskName || !taskDescription}
            onClick={handleContinue}
          >
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
