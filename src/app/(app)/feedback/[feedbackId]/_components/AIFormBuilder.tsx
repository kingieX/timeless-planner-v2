/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pen, X } from "lucide-react";
import { useState } from "react";

interface AIFormBuilderProps {
  formTitle: string;
}

export default function AIFormBuilder({ formTitle }: AIFormBuilderProps) {
  const [editableFormTitle, setEditableFormTitle] = useState(formTitle);
  const [isEditing, setIsEditing] = useState(false);
  const [questions, setQuestions] = useState([
    { id: 1, text: "Did you attend the event?" },
  ]);

  // Function to add a new question
  const addQuestion = () => {
    setQuestions([...questions, { id: questions.length + 1, text: "" }]);
  };

  // Function to remove a question
  const removeQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  return (
    <div className="flex md:flex-row flex-col gap-4">
      {/* Left Column */}
      <div className="md:w-1/4 w-full flex flex-col justify-between bg-white border-r pt-2 px-4 h-scree overflow-y-auto">
        <div className="space-y-4">
          {/* Form Title Section */}
          <div className="border border-gray-50 shadow-sm p-2 rounded">
            <div className="flex justify-between items-center text-gray-600 mb-2">
              <label className="block text-sm font-medium">Form Title</label>
              <button onClick={() => setIsEditing(true)}>
                <Pen size={16} className="cursor-pointer" />
              </button>
            </div>

            <Input
              value={editableFormTitle}
              onChange={(e) => setEditableFormTitle(e.target.value)}
              className="mt-1 border-[#00BFA5] text-center font-light"
              disabled={!isEditing} // Disable input when not editing
              onBlur={() => setIsEditing(false)} // Stop editing when clicking outside
            />
          </div>

          {/* Forms Section */}
          <div>
            <h3 className="text-sm font-semibold">Forms</h3>
            <p className="text-xs text-gray-500">
              The forms user will give feedback to
            </p>
            <div className="mt-2 space-y-1">
              {/* display form title */}
              <div className="flex justify-between items-center bg-gray-50 rounded-md border-t border-b border-gray-100 p-1">
                <p className="py-1 px-2 font-light text-sm text-gray-600 bg-slate-100 border rounded">
                  Start
                </p>
                <Input
                  value={editableFormTitle}
                  className="text-gray-700 font-light text-sm text-center border-none"
                  disabled
                />
                {/* <p className="text-gray-600 font-light text-sm">
                  {editableFormTitle}
                </p> */}
                <X size={16} className="text-gray-600" />
              </div>

              {/* Form questions */}
              <div className="flex justify-between items-center gap-2 bg-gray-50 rounded-md border-t border-b border-gray-100 p-1">
                <p className="py-1 px-2 font-light text-sm text-gray-600 bg-slate-100 border rounded">
                  Q1
                </p>
                <Input
                  value={questions[0].text}
                  onChange={(e) => {
                    const updatedQuestions = [...questions];
                    updatedQuestions[0].text = e.target.value;
                    setQuestions(updatedQuestions);
                  }}
                  className="text-gray-600 font-light text-sm border-none text-center"
                />
                <div>{/* <X size={16} className="text-gray-600" /> */}</div>
              </div>

              {/* Dynamically Added Questions */}
              {questions.slice(1).map((question, index) => (
                <div
                  key={question.id}
                  className="flex justify-between items-center gap-2 bg-gray-50 rounded-md border p-1"
                >
                  <p className="py-1 px-2 font-light text-sm text-gray-600 bg-slate-100 border rounded">
                    Q{index + 2}
                  </p>
                  <Input
                    value={question.text}
                    onChange={(e) => {
                      const updatedQuestions = [...questions];
                      updatedQuestions[index + 1].text = e.target.value;
                      setQuestions(updatedQuestions);
                    }}
                    placeholder="input new question..."
                    className="text-gray-600 font-light text-sm text-center border-none"
                  />
                  <button onClick={() => removeQuestion(question.id)}>
                    <X size={16} className="text-gray-600" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Add Interaction Button */}
          <Button
            variant="outline"
            onClick={addQuestion}
            className="border-gray-200 text-gray-600 font-normal"
          >
            + Add Interaction
          </Button>
        </div>

        {/* Create Feedback Button */}
        <Button className="mt-8 w-full bg-blue-600 text-white">
          Create feedback
        </Button>
      </div>

      {/* Right Column */}
      <div className="md:w-2/3 w-full px-4 md:mt-0 mt-4 flex flex-col items- justify-center">
        <h2 className="mb-2">Your form landing page</h2>
        <div className="bg-[#42CEF2] flex flex-col justify-center items-center text-white p-10 rounded-lg shadow-lg text-center w-full max-w-7xl md:h-96 h-60">
          <h1 className="text-xl md:text-4xl font-bold mb-2">
            Event Survey Form
          </h1>
          <p className="text-sm">Share your thoughts and help us improve</p>
          <Button className="mt-4 md:mt-8 bg-red-500 hover:bg-red-400 text-white">
            Get Started
          </Button>
        </div>
        <p className="text-xs md:text-left text-center text-gray-500 mt-2">
          Customize your form's appearance: Change the background, add your
          logo, and more in the Theme tab.
        </p>
      </div>
    </div>
  );
}
