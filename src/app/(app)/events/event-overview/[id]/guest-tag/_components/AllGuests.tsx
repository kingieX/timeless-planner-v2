export default function AllGuests() {
  return (
    <div className="mt-4 overflow-x-auto md:mr-8">
      <table className="w-full border-collapse border-b rounded-lg overflow-x-auto whitespace-nowrap">
        <thead className="bg-gray-100">
          <tr>
            <td className="px-4 text-gray-600 py-4 text-left">Guest Tag</td>
            <td className="px-4 text-gray-600 py-4 text-left">Event</td>
            <td className="md:table-cell hidden px-4 text-gray-600 py-4 text-left">
              Guest name
            </td>
            <td className="md:table-cell hidden px-4 text-gray-600 py-4 text-left">
              External ID
            </td>
            <td className="px-4 text-gray-600 py-4 text-left">RSVP</td>
            <td className="px-4 text-gray-600 py-4 text-left">Check in</td>
            <td className="px-4 text-gray-600 py-4 text-left"></td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
