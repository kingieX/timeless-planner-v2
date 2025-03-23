import DashboardLayout from "@/app/(app)/dashboard/layout";
// import { notFound } from "next/navigation";
import EventOverviewPage from "../_components/EventOverviewPage";
import { projectData } from "@/data/data"; // Importing centralized data

export default async function EventOverview({
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
    return <p>event not found</p>;
  }

  return (
    <DashboardLayout>
      <EventOverviewPage event={event} />
    </DashboardLayout>
  );
}
