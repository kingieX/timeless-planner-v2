"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pen, X } from "lucide-react";
import { useState } from "react";
import { useFormBuilder } from "@/context/FormBuilderContext";
import FormInteraction from "./FormInteraction";
import { v4 as uuidv4 } from "uuid";

interface AIFormBuilderProps {
  formTitle: string;
}

export default function AIFormBuilder({ formTitle }: AIFormBuilderProps) {
  const { questions, setQuestions } = useFormBuilder();

  const [editableFormTitle, setEditableFormTitle] = useState(formTitle);
  const [isEditing, setIsEditing] = useState(false);

  // Add a new question
  const addQuestion = () => {
    const newQuestion = { id: uuidv4(), text: "" };
    setQuestions([...questions, newQuestion]);
  };

  // Remove a question
  const removeQuestion = (id: string) => {
    const updated = questions.filter((q) => q.id !== id);
    setQuestions(updated);
  };

  // Update a single question
  const updateQuestion = (index: number, newText: string) => {
    const updated = [...questions];
    updated[index].text = newText;
    setQuestions(updated);
  };

  return (
    <div className="flex md:flex-row flex-col gap-4 overflow-y-none">
      {/* Left Column */}
      <div className="md:w-1/4 w-full flex flex-col justify-between bg-white border-r pt-2 px-4 overflow-y-auto">
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
              disabled={!isEditing}
              onBlur={() => setIsEditing(false)}
            />
          </div>

          {/* Forms Section */}
          <div>
            <h3 className="text-sm font-semibold">Forms</h3>
            <p className="text-xs text-gray-500">
              The forms users will give feedback to
            </p>
            <div className="mt-2 space-y-1">
              {/* Display form title */}
              <div className="flex justify-between items-center bg-gray-50 rounded-md border-t border-b border-gray-100 p-1">
                <p className="py-1 px-2 font-light text-sm text-gray-600 bg-slate-100 border rounded">
                  Start
                </p>
                <Input
                  value={formTitle}
                  className="text-gray-700 font-light text-sm text-center border-none"
                  disabled
                />
                <X size={16} className="text-gray-600" />
              </div>

              {/* Form questions */}
              {questions.map((q, index) => (
                <div
                  key={q.id}
                  className="flex justify-between items-center gap-2 bg-gray-50 rounded-md border p-1"
                >
                  <p className="py-1 px-2 font-light text-sm text-gray-600 bg-slate-100 border rounded">
                    Q{index + 1}
                  </p>
                  <Input
                    value={q.text}
                    onChange={(e) => updateQuestion(index, e.target.value)}
                    placeholder="input new question..."
                    className="text-gray-600 font-light text-sm text-center border-none"
                  />
                  {index > 0 && (
                    <button onClick={() => removeQuestion(q.id)}>
                      <X size={16} className="text-gray-600" />
                    </button>
                  )}
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
      <FormInteraction />
    </div>
  );
}
