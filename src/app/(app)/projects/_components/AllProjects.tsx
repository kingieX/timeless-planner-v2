import { useState } from "react";
import EmptyProjects from "./EmptyProjects";
import { Calendar, Eye, PenLine, Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const AllProjects = ({ filter }: { filter: string }) => {
  const router = useRouter(); // Initialize router

  const [projects] = useState([
    {
      id: 1,
      title: "Smart Waste Bin",
      description: "IoT-based waste management system",
      date: "March 1, 2025",
      createdBy: "me", // Used for filtering
    },
    {
      id: 2,
      title: "Recycling Awareness App",
      description:
        "An app to educate users on recycling techniques and how to have a clean environment.",
      date: "March 10, 2025",
      createdBy: "shared", // Used for filtering
    },
    {
      id: 3,
      title: "Green Spaces App",
      description:
        "An app to help users find and discover green spaces near them.",
      date: "March 25, 2025",
      createdBy: "me", // Used for filtering
    },
  ]);

  // **Filter projects based on selected filter**
  const filteredProjects = projects.filter((project) => {
    if (filter === "Created by me") return project.createdBy === "me";
    if (filter === "Shared with me") return project.createdBy === "shared";
    return true; // "All Projects" - Show everything
  });

  return (
    <div className="mt-4">
      {filteredProjects.length === 0 ? (
        <div className="md:mt-20 mt-12 flex flex-col justify-center items-center">
          <EmptyProjects />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="w-full md:w-3/4 flex justify-between items-center gap-2 bg-white p-4 border-l-4 border-l-[#42CEF2] shadow-md rounded-b-lg rounded-t-none "
            >
              <div>
                <h3
                  className="text-lg text-gray-900 hover:underline cursor-pointer"
                  onClick={() =>
                    router.push(`/projects/project-overview/${project.id}`)
                  }
                >
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm max-w-md font-light mt-1">
                  {project.description}
                </p>
                <div className="flex gap-1 items-center text-primary text-xs mt-4">
                  <Calendar size={16} /> <span>{project.date}</span>
                </div>
              </div>
              <div className="flex gap-4 mt-3 text-gray-500">
                <Eye
                  onClick={() =>
                    router.push(`/projects/project-overview/${project.id}`)
                  }
                  size={20}
                  className="cursor-pointer hover:text-blue-500"
                />
                <Plus
                  size={20}
                  className="cursor-pointer hover:text-green-500"
                />
                <Trash2
                  size={20}
                  className="cursor-pointer hover:text-red-500"
                />
                <PenLine
                  size={20}
                  className="cursor-pointer hover:text-yellow-500"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProjects;
