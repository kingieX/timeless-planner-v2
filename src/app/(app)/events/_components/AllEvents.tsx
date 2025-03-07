import { useRouter } from "next/navigation";
import { useState } from "react";
import AddEvents from "./AddEvents";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronRight, Plus, Printer } from "lucide-react";

interface Event {
  id: number;
  name: string;
  dueDate: string;
  eventTime: string;
  location: string;
  team: string[];
  guestTag: number;
  totalGuest: number;
}

interface Project {
  id: number;
  title: string;
  description: string;
  createdTime: string;
  projectDate: string;
  createdBy: "me" | "shared";
  events: Event[];
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Smart Waste Bin",
    description:
      "Formal dinner following the wedding ceremony. Includes speeches, toasts, and a live band.",
    createdTime: "March 1, 2025",
    projectDate: "March 10, 2025 - March 20, 2025",
    createdBy: "me",
    events: [
      {
        id: 1,
        name: "System Deployment",
        dueDate: "March 12, 2025",
        eventTime: "10:00 AM",
        location: "Central City Park",
        team: ["Alice", "Bob", "Charlie", "David"],
        guestTag: 4,
        totalGuest: 100,
      },
      {
        id: 2,
        name: "Testing & Calibration",
        dueDate: "March 15, 2025",
        eventTime: "2:00 PM",
        location: "Tech Lab",
        team: ["Emily", "Frank", "Grace"],
        guestTag: 5,
        totalGuest: 100,
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
    createdBy: "shared",
    events: [
      {
        id: 3,
        name: "App Launch",
        dueDate: "March 16, 2025",
        eventTime: "11:00 AM",
        location: "City Hall",
        team: ["Hannah", "Isaac", "Jack"],
        guestTag: 2,
        totalGuest: 100,
      },
      {
        id: 4,
        name: "Community Engagement Session",
        dueDate: "March 20, 2025",
        eventTime: "4:00 PM",
        location: "Green Park",
        team: ["Liam", "Mia", "Noah", "Olivia"],
        guestTag: 1,
        totalGuest: 120,
      },
    ],
  },
];

const AllEvents = ({ filter }) => {
  const router = useRouter();
  const [projects] = useState<Project[]>(projectData);

  const filteredProjects = projects.filter((project) => {
    const createdDate = new Date(project.createdTime);
    const now = new Date();

    if (filter === "Last 7 days") {
      return now.getTime() - createdDate.getTime() <= 7 * 24 * 60 * 60 * 1000;
    }
    if (filter === "Last 30 days") {
      return now.getTime() - createdDate.getTime() <= 30 * 24 * 60 * 60 * 1000;
    }
    return true;
  });

  return (
    <div className="mt-4">
      {filteredProjects.length === 0 ? (
        <div className="md:mt-20 mt-12 flex flex-col justify-center items-center">
          <AddEvents projectData={projectData} />
        </div>
      ) : (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse border-b rounded-lg overflow-x-aut0 whitespace-nowra">
            <thead className="bg-gray-100">
              <tr>
                <td className="px-4 text-gray-600 py-4 text-left">Event</td>
                <td className="md:table-cell hidden px-4 text-gray-600 py-4 text-left">
                  Guest Tag
                </td>
                <td className="md:table-cell hidden px-4 text-gray-600 py-4 text-left">
                  Total Guests
                </td>
                <td className="md:table-cell hidden px-4 text-gray-600 py-4 text-left"></td>
                <td className="px-4 text-gray-600 py-4 text-left"></td>
                <td className="px-4 text-gray-600 py-4 text-left"></td>
              </tr>
            </thead>
            {filteredProjects.map((project) => (
              <tbody key={project.id}>
                {/* <div key={project.id} className="border rounded-lg p-4 mb-4"> */}
                {/* <h3 className="font-bold">{project.title}</h3> */}

                {project.events.map((event, index) => (
                  <tr key={index} className="border-t text-sm hover:bg-gray-50">
                    <td className="flex flex-col p-4">
                      <span
                        onClick={() =>
                          router.push(`/events/event-overview/${event.id}`)
                        }
                        className="cursor-pointer hover:underline hover:text-primary"
                      >
                        {event.name}
                      </span>
                      <span className="text-sm font-light">
                        {project.title}
                      </span>
                    </td>
                    <td className="md:table-cell hidden p-4">
                      {event.guestTag}
                    </td>
                    <td className="md:table-cell hidden p-4">
                      {event.totalGuest}
                    </td>
                    <td className="md:table-cell hidden p-4">
                      <button className="block text-center border border-primary text-gray-800 py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition">
                        Add Guest
                      </button>
                    </td>
                    <td className="space-x-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="ml-2">
                              <Plus className="text-gray-600 hover:text-gray-500" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>add guest tag</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="ml-2 md:table-cell hidden">
                              <Printer className="text-gray-600 hover:text-gray-500" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>print guest list</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </td>
                    <td className="table-cell">
                      <div className="flex justify-center">
                        <ChevronRight size={20} />
                      </div>
                    </td>
                  </tr>
                ))}
                {/* </div> */}
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default AllEvents;
