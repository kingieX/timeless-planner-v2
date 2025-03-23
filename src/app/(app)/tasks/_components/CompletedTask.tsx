import { tasks } from "@/data/data";
import { Task } from "@/types/types";
import React from "react";
import {
  Calendar,
  EllipsisVertical,
  MessageSquare,
  SquarePen,
  Trash,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

const CompletedTask = () => {
  const router = useRouter();

  const completedTasks: Task[] = tasks.filter(
    (task) => task.status === "Completed"
  );

  const getDaysLeft = (endDate: string | undefined) => {
    if (!endDate) return "N/A";
    const end = new Date(endDate);
    const today = new Date();
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <div className="mt-4">
      {completedTasks.length === 0 ? (
        <div className="md:mt-20 mt-12 flex flex-col justify-center items-center">
          <p className="text-gray-500">No completed tasks yet.</p>
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {completedTasks.map((task) => (
            <div
              key={task.id}
              onClick={() => router.push(`/tasks/task-overview/${task.id}`)}
              className="p-4 rounded-lg shadow-md relative cursor-pointer hover:bg-gray-50"
            >
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-md">{task.taskName}</h3>
                <span className="text-[#42CEF2] text-xs">
                  {task.event?.name}
                </span>
              </div>

              <div className="flex justify-between items-center md:gap-10 gap-4 mb-4">
                <div className="flex flex-grow md:w-4/5 w-full justify-start items-center gap-4 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                  <span className="text-green-500 text-sm font-medium">
                    {task.progress}%
                  </span>
                </div>
                <div className="shrink-0">
                  <span className="text-green-500 bg-gray-100 px-2 py-1 rounded text-xs font-medium">
                    {task.status}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-8 text-gray-600 text-sm">
                <div className="flex items-center bg-gray-50 px-2 py-1 text-gray-500 space-x-1">
                  <Calendar size={16} />
                  <span>{getDaysLeft(task.endDate)} days left</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {task.team.slice(0, 3).map((member) => (
                      <span
                        key={member.id}
                        className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      >
                        {member.email[0]}
                      </span>
                    ))}
                    {task.team.length > 3 && (
                      <span className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                        +{task.team.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <MessageSquare size={24} /> 4
                  </div>
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger className="absolute top-4 right-4 p-1 border rounded">
                  <EllipsisVertical size={20} className="text-gray-600" />
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
          ))}
        </div>
      )}
    </div>
  );
};

export default CompletedTask;
