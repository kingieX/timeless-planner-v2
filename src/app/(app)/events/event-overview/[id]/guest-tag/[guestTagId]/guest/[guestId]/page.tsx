import DashboardLayout from "@/app/(app)/dashboard/layout";
import { notFound } from "next/navigation";
import { projectData } from "@/data/data"; // Importing centralized data
import { GuestOverviewPage } from "../_components/GuestOverviewPage";

export default async function GuestTagOverview({
  params,
}: {
  // params: { id: string };
  params: Promise<{ guestId: string }>;
}) {
  const resolvedParams = await params; // Await if params is async
  // console.log("Param", resolvedParams.guestTagId);

  const guest = projectData.projects
    .flatMap((project) => project.events) // Get all events from all projects
    .flatMap((event) => event.guestTag) // Get all guests from all events
    .flatMap((tag) => tag.guests)
    .find((guest) => guest.id === resolvedParams.guestId); // Find the matching guest by ID

  // console.log("guestId", guestId);

  if (!guest) {
    return notFound(); // Show 404 page if project ID doesn't exist
  }

  return (
    <DashboardLayout>
      <GuestOverviewPage guest={guest} />
    </DashboardLayout>
  );
}
