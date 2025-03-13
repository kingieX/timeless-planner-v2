import React from "react";
import { Event } from "@/types/types";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

interface GuestListProps {
  event: Event;
}

const GuestList = ({ event }: GuestListProps) => {
  // console.log("Event: ", event);
  const router = useRouter();

  const checkedInCount = event.guestTag
    ?.flatMap((tag) => tag.guests) // Get all guests from all guestTags
    .reduce((count, guest) => count + (guest.checkedIn ? 1 : 0), 0);

  // const eventId = String(event.id);
  // const guestListTag = event.guestTag.map((tag) => tag.name).join(", ");
  // const selectedEvent = event.name;

  // const handleAddGuest = () => {
  //   const queryParams = new URLSearchParams({
  //     guestListTag,
  //     selectedEvent,
  //     eventId,
  //   }).toString();
  //   router.push(`/events/event-overview/AddguestTag?${queryParams}`);
  // };

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full border-collapse border-b rounded-lg overflow-x-auto whitespace-nowrap">
        <thead className="bg-gray-100">
          <tr>
            <td className="px-4 text-gray-600 py-4 text-left">Tag</td>
            <td className="md:table-cell hidden px-4 text-gray-600 py-4 text-left">
              Total Guest
            </td>
            <td className="md:table-cell hidden px-4 text-gray-600 py-4 text-left">
              Checked in
            </td>
            <td className="px-4 text-gray-600 py-4 text-left"></td>
          </tr>
        </thead>
        {event.guestTag.map((guestTag) => (
          <tbody
            key={guestTag.id}
            className="hover:bg-gray-50 cursor-pointer"
            onClick={() =>
              router.push(
                `/events/event-overview/${event.id}/guest-tag/${guestTag.id}`
              )
            }
            // onClick={handleAddGuest}
          >
            {guestTag.guests.map((guest) => (
              <tr key={guest.id} className="border-t text-sm hover:bg-gray-50">
                <td className="flex flex-col p-4">
                  <span
                    onClick={() =>
                      router.push(
                        `/events/event-overview/${event.id}guest-tag/${guestTag.id}`
                      )
                    }
                    className="cursor-pointer hover:underline hover:text-primary"
                  >
                    {guestTag.name}
                  </span>
                  <span className="text-sm font-light">{event.name}</span>
                </td>
                <td className="md:table-cell hidden p-4">
                  {guestTag.guests.length}
                </td>
                <td className="md:table-cell hidden p-4">{checkedInCount}</td>
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
  );
};

export default GuestList;
