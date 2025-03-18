import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AllGuests({ guestTag, eventId }) {
  // console.log("guestTag: ", guestTag);
  const router = useRouter();

  return (
    <div className="mt-4 overflow-x-auto md:mr-8">
      {guestTag.guests.length === 0 ? (
        <p className="italic text-gray-600 text-center py-6">
          Guest not found...
        </p>
      ) : (
        <table className="w-full border-collapse border-b rounded-lg overflow-x-auto whitespace-nowrap">
          <thead className="bg-gray-100">
            <tr>
              <td className="md:table-cell hidden px-4 text-gray-800 py-4 text-left">
                Guest Tag
              </td>
              <td className="px-4 text-gray-800 py-4 text-left">Guest name</td>
              <td className="md:table-cell hidden px-4 text-gray-800 py-4 text-left">
                External ID
              </td>
              <td className="px-4 text-gray-800 py-4 text-left">RSVP</td>
              <td className="px-4 text-gray-800 py-4 text-left">Check in</td>
              <td className="md:table-cell hidden px-4 text-gray-800 py-4 text-left"></td>
            </tr>
          </thead>
          <tbody>
            {guestTag.guests.map((guest) => (
              <tr
                key={guest.id}
                className="border-t text-sm hover:bg-gray-50 cursor-pointer"
                onClick={() =>
                  router.push(
                    `/events/event-overview/${eventId}/guest-tag/${guestTag.id}/guest/${guest.id}`
                  )
                }
              >
                <td className="md:table-cell hidden p-4">{guestTag.name}</td>
                <td className="flex flex-col p-4">
                  <span
                    className="cursor-pointer hover:underline hover:text-primary"
                    onClick={() =>
                      router.push(
                        `/events/event-overview/${eventId}/guest-tag/${guestTag.id}/guest/${guest.id}`
                      )
                    }
                  >
                    {guest.name}
                  </span>
                  <span className="text-xs text-gray-600 font-light">
                    {guest.affiliation}
                  </span>
                </td>
                <td className="md:table-cell hidden p-4">
                  {guest.externalLink}
                </td>
                <td className="p-4">
                  {guest.RSVP === true ? "Attending" : "Not attending"}
                </td>
                <td>
                  {guest.checkedIn === true ? (
                    <span className="p-1 bg-green-100 text-green-600">
                      Checked in
                    </span>
                  ) : (
                    <span className="px-1 bg-gray-100 rounded-sm ml-4 text-lg">
                      -
                    </span>
                  )}
                </td>
                <td className="md:table-cell hidden">
                  <div className="flex justify-center">
                    <ChevronRight size={20} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
