import DashboardLayout from "@/app/(app)/dashboard/layout";
import { notFound } from "next/navigation";
import { projectData } from "@/data/data"; // Importing centralized data
import GuestTagOverviewPage from "../_components/GuestTagOverviewPage";

export default async function GuestTagOverview({
  params,
}: {
  // params: { id: string };
  params: Promise<{ guestTagId: string }>;
}) {
  const resolvedParams = await params; // Await if params is async
  // console.log("Param", resolvedParams.guestTagId);

  // // Loop through projects and find the event by ID
  // const guest = projectData.projects
  //   .flatMap((project) => project.events) // Get all events from all projects
  //   .find((event) => event.id === resolvedParams.id); // Find the matching event

  const guestTag = projectData.projects
    .flatMap((project) => project.events) // Get all events from all projects
    .flatMap((event) => event.guestTag) // Get all guests from all events
    .find((tag) => tag.id === resolvedParams.guestTagId); // Find the matching guest by ID

  // console.log("guestTag", guestTag);

  if (!guestTag) {
    return notFound(); // Show 404 page if project ID doesn't exist
  }

  return (
    <DashboardLayout>
      <GuestTagOverviewPage guestTag={guestTag} />
    </DashboardLayout>
  );
}
