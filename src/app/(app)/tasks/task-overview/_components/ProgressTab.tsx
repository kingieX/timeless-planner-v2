import { Task } from "@/types/types";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, SquareCheckBig, Trash } from "lucide-react";

type ProgressTabProps = {
  task: Task;
};

const ProgressTab: React.FC<ProgressTabProps> = ({ task }) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="relative flex items-center justify-between py-2 border-b">
        <div>
          <p className="font-medium text-base">{task.taskName}</p>
          <p className="text-sm text-gray-500">{task.taskDescription}</p>
        </div>
        <span
          className={`mr-16 px-3 py-1 rounded-md text-xs font-medium ${
            task.status === "Completed"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {task.status}
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger className="absolute top-4 right-4 p-1 rounded">
            <EllipsisVertical size={20} className="text-red-600" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="text-gray-600 hover:text-gray-400">
              <SquareCheckBig className="text-green-600" />
              <span>Complete task</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600 hover:text-red-400">
              <Trash />
              <span>Delete task</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="w-full flex justify-between py-4 items-center mt-4">
        <div className="flex items-center justify-between text-sm">
          <p className="text-gray-600">{task.progress}% Completed</p>
        </div>

        <div className="w-1/2 flex items-center">
          <div className="w-full bg-gray-200 rounded h-2 mx-4">
            <div
              className=" bg-green-500 h-2 rounded"
              style={{ width: `${task.progress}%` }}
            />
          </div>
          <p>{task.progress}%</p>
        </div>

        <div className="w-ful">
          <button
            className={`px-2 py-2 rounded text-white transition shrink-0 ${
              task.progress === 100
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={task.progress !== 100}
          >
            Confirm completion
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressTab;
