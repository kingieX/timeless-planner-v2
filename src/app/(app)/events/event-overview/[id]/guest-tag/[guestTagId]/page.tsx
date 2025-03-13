import DashboardLayout from "@/app/(app)/dashboard/layout";
import { notFound } from "next/navigation";
import { projectData } from "@/data/data"; // Importing centralized data

export default async function GuestTagOverview({
  params,
}: {
  // params: { id: string };
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params; // Await if params is async
  //   console.log("Param", resolvedParams.id);

  // Loop through projects and find the event by ID
  const event = projectData.projects
    .flatMap((project) => project.events) // Get all events from all projects
    .find((event) => event.id === resolvedParams.id); // Find the matching event

  //   console.log("event", event);

  if (!event) {
    return notFound(); // Show 404 page if project ID doesn't exist
  }

  return (
    <DashboardLayout>
      {/* < /> */}
      <h1 className="py-8">Hello</h1>
    </DashboardLayout>
  );
}
