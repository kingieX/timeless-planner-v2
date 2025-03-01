"use client";

import { MoreVertical, Calendar, MessageSquare } from "lucide-react";
import Image from "next/image";

interface Task {
  id: number;
  project: string;
  title: string;
  status: string;
  progress: number;
  dueDate: string;
  assignees: string[];
  comments: number;
}

const tasks: Task[] = [
  {
    id: 1,
    project: "Dinner party",
    title: "Table arrangement",
    status: "Completed",
    progress: 100,
    dueDate: "4 days left",
    assignees: ["/avatar1.png", "/avatar2.png", "/avatar3.png"],
    comments: 4,
  },
  {
    id: 2,
    project: "Wedding event",
    title: "Seating plan",
    status: "Completed",
    progress: 100,
    dueDate: "3 days left",
    assignees: ["/avatar4.png", "/avatar5.png"],
    comments: 2,
  },
];

export default function RecentTasks() {
  return (
    <div className="bg-white py-4">
      <h2 className="md:text-lg text-gray-600 mb-3">Recent Tasks</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="p-4 rounded-lg shadow-md relative">
            <div className="flex justify-between items-center mb-2 mr-12">
              <span className="text-[#42CEF2] text-sm">{task.project}</span>
              <span className="text-green-500 bg-gray-50 px-2 py-1 rounded text-xs font-medium">
                {task.status}
              </span>
            </div>
            <h3 className="text-md mb-4">{task.title}</h3>
            <div className="flex w-4/5 justify-center items-center gap-4 rounded-full h-2 mt-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${task.progress}%` }}
              ></div>
              <span className="text-green-500 text-sm font-medium">
                {task.progress}%
              </span>
            </div>
            <div className="flex justify-between items-center mt-8 text-gray-600 text-sm">
              <div className="flex items-center bg-gray-50 px-2 py-1 text-gray-500 space-x-1">
                <Calendar size={16} />
                <span>{task.dueDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2 mr-8">
                  {task.assignees.map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt="Profile"
                      width={24}
                      height={24}
                      className="rounded-full w-6 h-6 border-2 border-white"
                    />
                  ))}
                </div>
                <div className="flex items-center space-x-1 text-gray-500">
                  <MessageSquare size={24} />
                  <span>{task.comments}</span>
                </div>
              </div>
            </div>
            <button className="absolute top-4 right-4">
              <MoreVertical size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
