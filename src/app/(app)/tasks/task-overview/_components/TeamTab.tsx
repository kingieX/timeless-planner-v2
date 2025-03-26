import React from "react";
import { Task } from "@/types/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, SquareCheckBig, Trash } from "lucide-react";

type TeamTabProps = {
  task: Task;
};

const TeamTab: React.FC<TeamTabProps> = ({ task }) => {
  return (
    <div className="bg-white p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {task.team.map((member) => {
              const name = member.email.split("@")[0];
              const firstLetter = name.charAt(0).toUpperCase();
              const status =
                member.role.toLowerCase() === "team lead"
                  ? "Active"
                  : "Inactive";

              return (
                <tr key={member.id} className="border-t border-gray-200">
                  <td className="px-4 py-3 flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                      {firstLetter}
                    </div>
                    <div>
                      <p className="font-medium capitalize">
                        {name.replace(".", " ")}
                      </p>
                      <p className="text-gray-500 text-sm">{member.email}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-700">{member.role}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-sm font-medium ${
                        status === "Active"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="p-1 rounded">
                        <EllipsisVertical size={20} className="text-gray-600" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem className="text-gray-600 hover:text-gray-400">
                          <SquareCheckBig className="text-green-600" />
                          <span>Assign lead</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600 hover:text-red-400">
                          <Trash />
                          <span>Delete member</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamTab;
