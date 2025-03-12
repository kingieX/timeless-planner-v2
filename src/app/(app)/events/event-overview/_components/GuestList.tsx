import React from "react";

const GuestList = () => {
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
        {/* {filteredProjects.map((guestTag) => (
              <tbody key={project.id}>
                
              </tbody>
            ))} */}
      </table>
    </div>
  );
};

export default GuestList;
