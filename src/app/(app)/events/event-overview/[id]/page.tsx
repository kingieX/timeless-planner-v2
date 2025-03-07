import DashboardLayout from "@/app/(app)/dashboard/layout";
import { EllipsisVertical } from "lucide-react";
import { notFound } from "next/navigation";

const projectData = [
  {
    id: 1,
    title: "Smart Waste Bin",
    description:
      "Formal dinner following the wedding ceremony. Includes speeches, toasts, and a live band.",
    createdTime: "March 1, 2025",
    projectDate: "March 10, 2025 - March 20, 2025",
    events: [
      {
        id: 1,
        name: "System Deployment",
        dueDate: "March 12, 2025",
        eventTime: "10:00 AM",
        location: "Central City Park",
        team: ["Alice", "Bob", "Charlie", "David"],
      },
      {
        id: 2,
        name: "Testing & Calibration",
        dueDate: "March 15, 2025",
        eventTime: "2:00 PM",
        location: "Tech Lab",
        team: ["Emily", "Frank", "Grace"],
      },
    ],
  },
  {
    id: 2,
    title: "Recycling Awareness App",
    description:
      "An app to educate users on recycling techniques and how to have a clean environment.",
    createdTime: "March 5, 2025",
    projectDate: "March 15, 2025 - March 25, 2025",
    events: [
      {
        id: 3,
        name: "App Launch",
        dueDate: "March 16, 2025",
        eventTime: "11:00 AM",
        location: "City Hall",
        team: ["Hannah", "Isaac", "Jack"],
      },
      {
        id: 4,
        name: "Community Engagement Session",
        dueDate: "March 20, 2025",
        eventTime: "4:00 PM",
        location: "Green Park",
        team: ["Liam", "Mia", "Noah", "Olivia"],
      },
    ],
  },
];

export default async function EventOverview({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params; // Await if params is async
  const event = projectData.events.find(
    (proj) => proj.id === Number(resolvedParams.id)
  );

  if (!event) {
    return notFound(); // Show 404 page if project ID doesn't exist
  }

  return (
    <DashboardLayout>
      <div className="py-6 md:px-6 px-4 bg-white">
        <div className="flex flex-col w-full py-4 md:max-w-5xl bg-white mb-4 fixed z-10">
          <h2 className="md:text-2xl text-xl text-gray-500 font-semibold">
            Event overview
          </h2>
        </div>

        <div className="flex justify-between items-center mb-4 mt-20">
          <h2 className="md:text-xl font-semibold">{event.title}</h2>
          <EllipsisVertical size={24} className="md:mr-8" />
        </div>
        <div className="flex justify-between gap-4 mb-4 md:max-w-md">
          <div className="space-y-2">
            <p className="text-gray-500">Created time </p>
            <p className="text-gray-500">Project date </p>
            <p className="text-gray-500">Events</p>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800">{event.createdTime}</p>
            <p className="text-gray-800">{event.projectDate}</p>
            <div className="flex justify-center items-center w-6 h-6 bg-gray-100 rounded">
              -
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold mb-2 text-gray-700">
            Project Description
          </h3>
          <p className="text-gray-600 border rounded-md px-2 py-2 md:mr-8">
            {event.description}
          </p>
        </div>

        {/* event */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center mt-8 border-b">
            <div className="px-2 py-1 bg-gray-100 rounded mb-2">
              <p>Events</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
