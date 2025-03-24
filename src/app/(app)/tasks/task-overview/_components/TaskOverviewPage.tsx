import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Task } from "@/types/types";
import { EllipsisVertical, SquarePen, Trash } from "lucide-react";
import React from "react";

interface TaskProps {
  task: Task;
}
export default function TaskOverviewPage({ task }: TaskProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-blue-600 bg-blue-100";
      case "Medium":
        return "text-gray-600 bg-gray-100";
      case "Low":
        return "text-yellow-500 bg-yellow-100";
      default:
        return "text-gray-500 bg-gray-100";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-blue-600 bg-blue-100";
      case "In Progress":
        return "text-yellow-500 bg-yellow-100";
      case "Pending":
        return "text-gray-600 bg-gray-100";
      default:
        return "text-gray-500 bg-gray-100";
    }
  };

  return (
    <div className="py-6 md:px-6 px-4 bg-white">
      <div className="flex flex-col w-full py-4 md:max-w-5xl bg-white mb-4 fixed z-10">
        <h2 className="md:text-2xl text-xl text-gray-900 font-semibold">
          Task overview
        </h2>
      </div>

      <div className="flex justify-between items-center mb-4 mt-20">
        <h2 className="md:text-xl font-">{task.taskName}</h2>
        <DropdownMenu>
          <DropdownMenuTrigger className="md:mr-8">
            <EllipsisVertical size={24} className="cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="text-gray-600 hover:text-gray-400">
              <SquarePen />
              <span>Edit task</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600 hover:text-red-400">
              <Trash />
              <span>Delete task</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Task Details */}
      <div className="flex justify-between gap-4 md:max-w-md">
        <div className="space-y-3 text-sm">
          <p className="text-gray-500 uppercase">Priority </p>
          <p className="text-gray-500 uppercase">Start date </p>
          <p className="text-gray-500 uppercase">End date</p>
          <p className="text-gray-500 uppercase">Team Member</p>
          <p className="text-gray-500 uppercase">Status</p>
          <p className="text-gray-500 uppercase">Team lead</p>
        </div>
        <div className="space-y-2 text-sm">
          <div
            className={`w-fit px-2 py-1 rounded ${getPriorityColor(
              task.priorityLevel
            )}`}
          >
            <p className="text-sm">{task.priorityLevel}</p>
          </div>
          <p className="text-gray-800 font-medium">{task.startDate}</p>
          <p className="text-gray-800 font-medium">{task.endDate}</p>
          <div className="flex -space-x-2">
            {task.team.slice(0, 3).map((member) => (
              <span
                key={member.id}
                className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold text-white"
              >
                {member.email[0].toUpperCase()}
              </span>
            ))}
            {task.team.length > 3 && (
              <span className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                +{task.team.length - 3}
              </span>
            )}
          </div>
          <div
            className={`w-fit px-2 py-1 rounded ${getStatusColor(task.status)}`}
          >
            <p className="text-sm">{task.status}</p>
          </div>
          {/* Team Lead (Profile Style) */}
          <div className="flex items-center gap-2">
            {task.team.length > 0 ? (
              <>
                <span className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  {task.team[0].email[0].toUpperCase()}{" "}
                  {/* First letter of email */}
                </span>
                <p className="text-red-700">{task.team[0].email}</p>{" "}
                {/* Display email */}
              </>
            ) : (
              <p className="text-gray-500">No team lead assigned</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold mb-2 text-gray-700">Task Description</h3>
        <p className="text-gray-600 border rounded-md px-2 py-2 md:mr-8">
          {task.taskDescription}
        </p>
      </div>
    </div>
  );
}
