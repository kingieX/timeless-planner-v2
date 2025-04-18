import EmptyProjects from "./EmptyProjects";
import { Calendar, Eye, PenLine, Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Project } from "@/types/types";
import { projectData } from "@/data/data";

const AllProjects = ({ filter }: { filter: string }) => {
  const router = useRouter(); // Initialize router

  // **Filter projects based on selected filter**
  const filteredProjects = projectData.projects.filter((project: Project) => {
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
          {filteredProjects.map((project: Project) => (
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
                  <Calendar size={16} /> <span>{project.createdTime}</span>
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
