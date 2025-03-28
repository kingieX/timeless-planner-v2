import DashboardLayout from "@/app/(app)/dashboard/layout";
import { projectData } from "@/data/data"; // Importing centralized data
import RSVPOverviewPage from "../_components/RSVPOverviewPage";

export default async function RSVPOverview({
  params,
}: {
  // params: { id: string };
  params: Promise<{ tagId: string }>;
}) {
  const resolvedParams = await params; // Await if params is async
  console.log("Param", resolvedParams.tagId);

  // Loop through projects and find the guestTag by ID
  const guestTag = projectData.projects
    .flatMap((project) => project.events)
    .flatMap((event) => event.guestTag) // Get all guestTag from all events
    .find((tag) => tag.id === resolvedParams.tagId); // Find the matching guestTag

  //   console.log("guestTag", guestTag);

  if (!guestTag) {
    return <p>Guest Tag not found</p>;
  }

  return (
    <DashboardLayout>
      <RSVPOverviewPage guestTag={guestTag} />
    </DashboardLayout>
  );
}
