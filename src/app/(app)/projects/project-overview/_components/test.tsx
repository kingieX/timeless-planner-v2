import DashboardLayout from "@/app/(app)/dashboard/layout";
import { EllipsisVertical } from "lucide-react";
import { notFound } from "next/navigation";
import EmptyEvents from "../_components/EmptyEvents";

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
        name: "Dinner party",
        dueDate: "20th of Sep, 2002",
        eventTime: "10:00 AM - 5:00 PM",
        location: "33, Park Road Cos..",
        team: ["User1", "User2", "User3"], // Simulated team members
      },
      {
        name: "Bridal shower",
        dueDate: "20th of Sep, 2002",
        eventTime: "10:00 AM - 5:00 PM",
        location: "33, Park Road Cos..",
        team: ["User4", "User5", "User6"],
      },
      {
        name: "Get together",
        dueDate: "20th of Sep, 2002",
        eventTime: "10:00 AM - 5:00 PM",
        location: "33, Park Road Cos..",
        team: ["User7", "User8", "User9"],
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
    events: [], // No events available
  },
];

export default async function ProjectOverview({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const project = projectData.find(
    (proj) => proj.id === Number(resolvedParams.id)
  );

  if (!project) {
    return notFound();
  }

  return (
    <DashboardLayout>
      <div className="py-6 md:px-6 px-4 bg-white">
        <div className="flex flex-col w-full py-4 md:max-w-5xl bg-white mb-4 fixed z-10">
          <h2 className="md:text-2xl text-xl text-gray-500 font-semibold">
            Project overview
          </h2>
        </div>

        <div className="flex justify-between items-center mb-4 mt-20">
          <h2 className="md:text-xl font-semibold">{project.title}</h2>
          <EllipsisVertical size={24} className="md:mr-8" />
        </div>
        <div className="flex justify-between gap-4 mb-4 md:max-w-md">
          <div className="space-y-2">
            <p className="text-gray-500">Created time </p>
            <p className="text-gray-500">Project date </p>
            <p className="text-gray-500">Events</p>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800">{project.createdTime}</p>
            <p className="text-gray-800">{project.projectDate}</p>
            <div className="flex flex-wrap gap-2">
              {project.events.length > 0 ? (
                project.events.map((event, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-sm bg-gray-100 rounded"
                  >
                    {event.name}
                  </span>
                ))
              ) : (
                <div className="flex justify-center items-center w-6 h-6 bg-gray-100 rounded">
                  -
                </div>
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

        {/* event */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center mt-8 border-b">
            <div className="px-2 py-1 bg-gray-100 rounded mb-2">
              <p>Events</p>
            </div>
          </div>

          {project.events.length > 0 ? (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse border rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Event Name</th>
                    <th className="px-4 py-2 text-left">Due Date</th>
                    <th className="px-4 py-2 text-left">Event Time</th>
                    <th className="px-4 py-2 text-left">Event Location</th>
                    <th className="px-4 py-2 text-left">Team</th>
                  </tr>
                </thead>
                <tbody>
                  {project.events.map((event, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-2 text-blue-500">{event.name}</td>
                      <td className="px-4 py-2">{event.dueDate}</td>
                      <td className="px-4 py-2">{event.eventTime}</td>
                      <td className="px-4 py-2 text-blue-500">
                        {event.location}
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex">
                          {event.team.slice(0, 3).map((member, i) => (
                            <span
                              key={i}
                              className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold text-white mr-1"
                            >
                              {member[0]}
                            </span>
                          ))}
                          {event.team.length > 3 && (
                            <span className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                              +{event.team.length - 3}
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex justify-center items-center py-8">
              <EmptyEvents project={project} projectData={projectData} />
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
