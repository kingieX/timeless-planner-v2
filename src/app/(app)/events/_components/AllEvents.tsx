import { useRouter } from "next/navigation";
import AddEvents from "./AddEvents";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronRight, Plus, Printer } from "lucide-react";
import { projectData } from "@/data/data";
import { Project } from "@/types/types";

interface AllEventsProps {
  filter: string;
}

const AllEvents: React.FC<AllEventsProps> = ({ filter }) => {
  const router = useRouter();
  const projects: Project[] = projectData.projects;

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
          <AddEvents />
        </div>
      ) : (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse border-b rounded-lg overflow-x-auto whitespace-nowrap">
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
                {project.events.map((event) => (
                  <tr
                    key={event.id}
                    className="border-t text-sm hover:bg-gray-50"
                  >
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
                            <p>Add guest tag</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="ml-2 md:table-cell hidden">
                              <Printer className="text-gray-600 hover:text-gray-500" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Print guest list</p>
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
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default AllEvents;
