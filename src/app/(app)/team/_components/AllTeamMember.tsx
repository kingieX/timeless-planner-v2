"use client";

import React from "react";
import { Mail, Ellipsis, Trash } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AddTeamMember from "./AddTeamMember";

// Sample mock data (You can later replace this with API data)
const teamMembers = [
  {
    id: 1,
    profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
    fullName: "Ola Mhoore",
    email: "olamhoore@gmail.com",
    jobTitle: "Project Manager",
    teamRole: "Team lead",
    addedDate: "7/27/2024",
  },
  {
    id: 2,
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
    fullName: "John Doe",
    email: "john.doe@gmail.com",
    jobTitle: "UI Designer",
    teamRole: "Team member",
    addedDate: "6/15/2024",
  },
  {
    id: 3,
    profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
    fullName: "Jane Smith",
    email: "janesmith@gmail.com",
    jobTitle: "Backend Engineer",
    teamRole: "Team member",
    addedDate: "5/10/2024",
  },
  // Add more as needed
];

interface AllTeamMemberProps {
  filter: string;
}

const AllTeamMember: React.FC<AllTeamMemberProps> = ({ filter }) => {
  const filteredMembers =
    filter === "All"
      ? teamMembers
      : teamMembers.filter(
          (member) => member.teamRole.toLowerCase() === filter.toLowerCase()
        );

  return (
    <div className="mt-4">
      {filteredMembers.length !== 0 ? (
        <div className="md:mt-20 mt-12 flex flex-col justify-center items-center">
          <AddTeamMember />
        </div>
      ) : (
        <div className="md:mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-4">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className=" rounded-xl shadow-sm p-4 bg-gray-100 relative group hover:shadow-md transition"
            >
              <div className="flex flex-col items-start gap-4 mb-6">
                <Image
                  src={member.profileImage}
                  alt={member.fullName}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="text-gray-900 font-semibold text-base">
                    {member.fullName}
                  </h4>
                  <p className="text-sm text-gray-500">{member.jobTitle}</p>
                </div>
              </div>

              <div className="flex flex-col bg-white py-4 px-4 rounded justify-between mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500 font-medium">
                      Team Role
                    </p>
                    <p className="font-semibold text-gray-700">
                      {member.teamRole}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">
                      Added Date
                    </p>
                    <p className="font-semibold text-gray-700">
                      {member.addedDate}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Mail className="text-blue-500" size={18} />
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-500 text-sm hover:underline"
                  >
                    {member.email}
                  </a>
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger className="absolute top-4 right-4 p-1">
                  <Ellipsis size={20} className="text-gray-600" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className="text-gray-600 hover:text-gray-400">
                    <span>Edit member</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-600 hover:text-gray-400">
                    <span>Add to task</span>
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

export default AllTeamMember;
