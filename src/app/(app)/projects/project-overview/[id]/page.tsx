// import DashboardLayout from "@/app/(app)/dashboard/layout";
// import { notFound } from "next/navigation";
import { projectData } from "@/data/data"; // Import centralized data
import { Project } from "@/types/types"; // Import the correct type
import ProjectOverviewPage from "../_components/ProjectOverviewPage";

export default async function ProjectOverview({
  params,
}: {
  // params: { id: string };
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params; // Await if params is async
  console.log("Param", resolvedParams.id);

  const project: Project | undefined = projectData.projects.find(
    (proj) => proj.id === resolvedParams.id
  );
  // console.log("project", project);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <>
      <ProjectOverviewPage project={project} />
    </>
  );
}
