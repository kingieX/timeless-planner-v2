import { useRouter } from "next/navigation";
import { Check, ChevronRight, CircleHelp } from "lucide-react";
import { projectData } from "@/data/data";
import { Project } from "@/types/types";

interface AllRSVPProps {
  filter: string;
}

const AllRSVP: React.FC<AllRSVPProps> = ({ filter }) => {
  const router = useRouter();
  const projects: Project[] = projectData.projects;

  // Filter projects based on the selected date range
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

  // const handleViewClick = () => {
  //   router.push(
  //     `/events/event-overview/${eventId}/guest-tag/${tagId}`
  //   );
  // };

  return (
    <div className="mt-4">
      {filteredProjects.length === 0 ? (
        <div className="md:mt-20 mt-12 flex flex-col justify-center items-center">
          {/* <AddEvents /> */}
        </div>
      ) : (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse border-b rounded-lg overflow-x-auto whitespace-nowrap">
            <thead className="bg-gray-100">
              <tr>
                {/* <td className="px-4 text-gray-600 py-4 text-left">
                  Event Name
                </td> */}
                <td className="px-4 text-gray-600 py-4 text-left">Tag</td>
                <td className="px-4 text-gray-600 py-4 text-left">
                  Total Guests
                </td>
                <td className="px-4 text-gray-600 py-4 text-left">
                  RSVP Status
                </td>
                <td className="px-4 text-gray-600 py-4 text-left"></td>
                <td className="px-4 text-gray-600 py-4 text-left"></td>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.flatMap((project) =>
                project.events.flatMap((event) =>
                  event.guestTag.map((tag) => {
                    // Check if RSVP is configured
                    const isConfigured = tag.guests.some((guest) => guest.RSVP);
                    return (
                      <tr
                        key={`${event.id}-${tag.name}`}
                        onClick={() => router.push(`/rsvp/${tag.id}`)}
                        className="border-t text-sm hover:bg-gray-50 cursor-pointer"
                      >
                        <td className="flex justify-start flex-col p-4">
                          <span className="">{tag.name}</span>
                          <span
                            onClick={() =>
                              router.push(`/events/event-overview/${event.id}`)
                            }
                            className="text-sm font-light cursor-pointer hover:underline hover:text-primary"
                          >
                            {event.name}
                          </span>
                        </td>

                        {/* Total Guests */}
                        <td className="p-4">{tag.guests.length}</td>

                        {/* RSVP Status */}
                        <td
                          className={`p-4 font-medium text-gray-600 ${
                            isConfigured ? "text" : "text"
                          }`}
                        >
                          {isConfigured ? (
                            <div className="flex items-center gap-2">
                              <Check className="p-1 bg-green-600 text-white rounded" />
                              <span>Configured</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <CircleHelp className="p-1 bg-yellow-500 text-white rounded" />
                              <span>Not Configured</span>
                            </div>
                          )}
                        </td>

                        {/* View Button */}
                        <td className="p-4">
                          <button
                            onClick={() =>
                              router.push(
                                `/events/event-overview/${event.id}/guest-tag/${tag.id}`
                              )
                            }
                            className="block text-center border border-primary text-gray-800 py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition"
                          >
                            View
                          </button>
                        </td>

                        {/* Chevron Icon */}
                        <td className="table-cell">
                          <div className="flex justify-center">
                            <ChevronRight size={20} />
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllRSVP;
