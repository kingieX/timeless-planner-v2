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
    </div>
  );
}
