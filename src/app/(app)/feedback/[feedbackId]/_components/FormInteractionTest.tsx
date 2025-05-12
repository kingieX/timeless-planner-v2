/* eslint-disable react/no-unescaped-entities */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import Image from "next/image";
import { useState } from "react";
import Image from "next/image";

interface FormInteractionProps {
  questions: { id: number; text: string }[];
  theme: {
    backgroundColor: string;
    fontColor: string;
    fontSize: string;
    backgroundImage?: string;
  };
}

export default function FormInteraction({
  questions,
  theme,
}: FormInteractionProps) {
  // interaction states
  const [showQuestions, setShowQuestions] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );

  const handleStart = () => setShowQuestions(true);
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Form submitted! Answers: " + JSON.stringify(answers));
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = e.target.value;
    setAnswers(newAnswers);
  };

  return (
    // <div className="flex flex-col justify-center items-center text-center w-full max-w-7xl md:h-96 h-60 p-10 rounded-lg shadow-lg">
    <div className="md:w-2/3 w-full px-4 md:mt-0 mt-4 flex flex-col items- justify-center">
      {!showQuestions ? (
        // Landing Page View
        <>
          <h2 className="mb-2">Your form landing page</h2>
          <div
            className="flex flex-col justify-center items-center p-10 rounded-lg shadow-lg text-center w-full max-w-7xl md:h-96 h-60"
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.fontColor,
              fontSize: theme.fontSize,
              backgroundImage: theme.backgroundImage
                ? `url(${theme.backgroundImage})`
                : "none",
            }}
          >
            <Image
              src="/feedbackLogo.png"
              width={60}
              height={60}
              alt="feedback"
            />
            <h1 className="text-xl md:text-4xl font-bold mb-2">
              Event Survey Form
            </h1>
            <p className="text-sm">Share your thoughts and help us improve</p>
            <Button
              onClick={handleStart}
              className="mt-4 md:mt-8 bg-red-500 hover:bg-red-400 text-white"
            >
              Get Started
            </Button>
          </div>
          <p className="text-xs md:text-left text-center text-gray-500 mt-2">
            Customize your form's appearance: Change the background, add your
            logo, and more in the Theme tab.
          </p>
        </>
      ) : (
        // Question Interaction View
        <>
          <h2 className="mb-4 text-lg font-semibold">Event feedback</h2>
          <div className="bg-[#42CEF2] flex flex-col justify-center items-center text-white p-10 rounded-lg shadow-lg text-center w-full max-w-7xl md:h-96 h-60">
            <h1 className="text-xl text-gray-800 font-bold mb-2">
              {questions[currentQuestionIndex].text}
            </h1>
            {/* User Input Field */}
            <Input
              type="text"
              placeholder="Type your answer..."
              value={answers[currentQuestionIndex]}
              onChange={handleInputChange}
              className="md:w-1/2 w-full p-2 border border-primary outline-none rounded-md mt-3 text-gray-700"
            />
            {/* Next or Submit Button */}
            <Button
              onClick={handleNext}
              className="mt-4 bg-blue-600 text-white hover:bg-blue-500 px-6 py-2"
            >
              {currentQuestionIndex < questions.length - 1 ? "Next" : "Submit"}
            </Button>
          </div>
          <p className="text-xs md:text-left text-center text-gray-500 mt-2">
            Customize your form's appearance: Change the background, add your
            logo, and more in the Theme tab.
          </p>
        </>
      )}
    </div>
    // </div>
  );
}
