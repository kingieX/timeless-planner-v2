// import { useState } from "react";

// export default function CreateProjectModal({ isOpen, onClose, onSuccess }) {
//   const [projectName, setProjectName] = useState("");

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-lg font-semibold mb-4">Create New Project</h2>
//         <input
//           type="text"
//           value={projectName}
//           onChange={(e) => setProjectName(e.target.value)}
//           className="w-full border p-2 rounded-lg mb-4"
//           placeholder="Project Name"
//         />
//         <div className="flex justify-end space-x-2">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={onSuccess}
//             className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-80"
//           >
//             Create
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
