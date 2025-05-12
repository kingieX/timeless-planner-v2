// "use client";
// import { useState } from "react";
// import FormInteraction from "./FormInteraction";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Pen, X } from "lucide-react";

// export default function AIFormBuilder() {
//   const [editableFormTitle, setEditableFormTitle] =
//     useState("Event Survey Form");
//   const [questions, setQuestions] = useState([
//     { id: 1, text: "Did you attend the event?" },
//   ]);
//   const [
//     theme,
//     // setTheme,
//   ] = useState({
//     backgroundColor: "#42CEF2",
//     fontColor: "#FFFFFF",
//     fontSize: "16px",
//     backgroundImage: "",
//   });

//   const addQuestion = () => {
//     setQuestions([...questions, { id: questions.length + 1, text: "" }]);
//   };

//   const removeQuestion = (id: number) => {
//     setQuestions(questions.filter((q) => q.id !== id));
//   };

//   return (
//     <div className="flex md:flex-row flex-col gap-4">
//       {/* Left Column (Builder) */}
//       <div className="md:w-1/4 w-full flex flex-col justify-between bg-white border-r pt-2 px-4 h-screen overflow-y-auto">
//         <div className="space-y-4">
//           {/* Form Title Section */}
//           <div className="border border-gray-50 shadow-sm p-2 rounded">
//             <div className="flex justify-between items-center text-gray-600 mb-2">
//               <label className="block text-sm font-medium">Form Title</label>
//               <button>
//                 <Pen size={16} className="cursor-pointer" />
//               </button>
//             </div>
//             <Input
//               value={editableFormTitle}
//               onChange={(e) => setEditableFormTitle(e.target.value)}
//             />
//           </div>

//           {/* Forms Section */}
//           <div>
//             <h3 className="text-sm font-semibold">Forms</h3>
//             <p className="text-xs text-gray-500">
//               The forms user will give feedback to
//             </p>
//             <div className="mt-2 space-y-1">
//               {questions.map((question, index) => (
//                 <div
//                   key={question.id}
//                   className="flex justify-between items-center bg-gray-50 rounded-md border p-1"
//                 >
//                   <p className="py-1 px-2 font-light text-sm text-gray-600 bg-slate-100 border rounded">
//                     Q{index + 1}
//                   </p>
//                   <Input
//                     value={question.text}
//                     onChange={(e) => {
//                       const updatedQuestions = [...questions];
//                       updatedQuestions[index].text = e.target.value;
//                       setQuestions(updatedQuestions);
//                     }}
//                     className="text-gray-600 font-light text-sm border-none text-center"
//                   />
//                   <button onClick={() => removeQuestion(question.id)}>
//                     <X size={16} className="text-gray-600" />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <Button
//             onClick={addQuestion}
//             className="border-gray-200 text-gray-600 font-normal"
//           >
//             + Add Interaction
//           </Button>
//         </div>
//       </div>

//       {/* Right Column (Form Interaction) */}
//       <div className="md:w-2/3 w-full px-4 md:mt-0 mt-4 flex flex-col items-center">
//         <FormInteraction questions={questions} theme={theme} />
//       </div>
//     </div>
//   );
// }
