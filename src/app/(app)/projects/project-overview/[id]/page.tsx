import DashboardLayout from "@/app/(app)/dashboard/layout";
import { notFound } from "next/navigation";

const projectData = [
  {
    id: 1,
    title: "Smart Waste Bin",
    description: "IoT-based waste management system",
    createdTime: "March 1, 2025",
    projectDate: "March 10, 2025 - March 20, 2025",
  },
  {
    id: 2,
    title: "Recycling Awareness App",
    description:
      "An app to educate users on recycling techniques and how to have a clean environment.",
    createdTime: "March 5, 2025",
    projectDate: "March 15, 2025 - March 25, 2025",
  },
];

export default function ProjectOverview({
  params,
}: {
  params: { id: string };
}) {
  const project = projectData.find((proj) => proj.id === Number(params.id));

  if (!project) {
    return notFound(); // Show 404 page if project ID doesn't exist
  }

  return (
    <DashboardLayout>
      <div className="p-6 bg-white">
        <h2 className="text-2xl font-semibold">{project.title}</h2>
        <p className="text-gray-500">Created time: {project.createdTime}</p>
        <p className="text-gray-500">Project date: {project.projectDate}</p>
        <div className="mt-4">
          <h3 className="font-semibold">Project Description</h3>
          <p className="text-gray-700">{project.description}</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
