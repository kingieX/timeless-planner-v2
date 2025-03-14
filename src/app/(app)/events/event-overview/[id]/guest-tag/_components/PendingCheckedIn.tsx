import { ChevronRight } from "lucide-react";

export default function PendingCheckedIn({ guestTag }) {
  //   console.log("guestTag: ", guestTag);

  // Filter guests who have NOT checked in
  const pendingGuests = guestTag.guests.filter(
    (guest) => guest.checkedIn === false
  );

  return (
    <div className="mt-4 overflow-x-auto md:mr-8">
      {/* Show message if no guests are pending check-in */}
      {pendingGuests.length === 0 ? (
        <p className="italic text-gray-600 text-center py-6">
          pending check-ins...
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
            {pendingGuests.map((guest) => (
              <tr key={guest.id} className="border-t text-sm hover:bg-gray-50">
                <td className="md:table-cell hidden p-4">{guestTag.name}</td>
                <td className="flex flex-col p-4">
                  <span className="cursor-pointer hover:underline hover:text-primary">
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
                  <span className="p-1 bg-gray-100 text-gray-600">-</span>
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
