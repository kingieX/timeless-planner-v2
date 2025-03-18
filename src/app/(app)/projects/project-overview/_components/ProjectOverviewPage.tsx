"use client";
import { EllipsisVertical } from "lucide-react";
import EmptyEvents from "../_components/EmptyEvents";
import EventList from "../_components/EventList";
import { projectData } from "@/data/data"; // Import centralized data
import { Project } from "@/types/types"; // Import the correct type
import { useProject } from "@/context/ProjectContext";
import { useEffect } from "react";

interface ProjectProps {
  project: Project;
}

export default function ProjectOverviewPage({ project }: ProjectProps) {
  const { setProject } = useProject();

  useEffect(() => {
    setProject(project); // Set project in context
  }, [project, setProject]);

  //   console.log("project", project);

  return (
    <div className="py-6 md:px-6 px-4 bg-white">
      <div className="flex flex-col w-full py-4 md:max-w-5xl bg-white mb-4 fixed z-10">
        <h2 className="md:text-2xl text-xl text-gray-900 font-semibold">
          Project Overview
        </h2>
      </div>

      <div className="flex justify-between items-center mb-4 mt-20">
        <h2 className="md:text-xl font-">{project.title}</h2>
        <EllipsisVertical size={24} className="md:mr-8" />
      </div>

      <div className="flex justify-between gap-4 mb-4 md:max-w-md">
        <div className="space-y-2">
          <p className="text-gray-500">Created Time</p>
          <p className="text-gray-500">Project Date</p>
          <p className="text-gray-500">Events</p>
        </div>
        <div className="space-y-2">
          <p className="text-gray-800">{project.createdTime}</p>
          <p className="text-gray-800">{project.projectDate}</p>
          <div className="flex justify-center items-center w-6 h-6 bg-gray-100 rounded">
            {project.events.length === 0 ? (
              <span>-</span>
            ) : (
              <span>{project.events.length}</span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold mb-2 text-gray-700">
          Project Description
        </h3>
        <p className="text-gray-600 border rounded-md px-2 py-2 md:mr-8">
          {project.description}
        </p>
      </div>

      {/* Events Section */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center mt-8 border-b">
          <div className="px-2 py-1 bg-gray-100 rounded mb-2">
            <p>Events</p>
          </div>
        </div>

        {project.events.length > 0 ? (
          <div className="overflow-x-auto">
            <EventList events={project.events} />
          </div>
        ) : (
          <div className="flex justify-center items-center py-8">
            <EmptyEvents project={project} projectData={projectData} />
          </div>
        )}
      </div>
    </div>
  );
}
