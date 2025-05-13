/* eslint-disable react/no-unescaped-entities */
"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { useFormBuilder } from "@/context/FormBuilderContext";
import { hexToRgba } from "@/lib/utils"; // Make sure to import this

export default function FormInteraction() {
  const { questions, theme } = useFormBuilder();

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

  const backgroundColor = hexToRgba(
    theme.backgroundColor || "#ffffff",
    theme.backgroundOpacity || "100%"
  );

  const sharedStyles = {
    fontFamily: `${theme.typeFace}, sans-serif`,
    fontSize: theme.textSize,
  };

  const cardStyle = {
    ...sharedStyles,
    backgroundColor,
    color: theme.textColor,
    borderRadius: theme.buttonRadius,
    backgroundImage: theme.backgroundImage
      ? `url(${theme.backgroundImage})`
      : "none",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const getAnimationClass = (animation: string) => {
    switch (animation) {
      case "fade":
        return "animate-fadeIn";
      case "slide":
        return "animate-slideIn";
      case "bounce":
        return "animate-bounceIn";
      case "zoom":
        return "animate-zoomIn";
      default:
        return "";
    }
  };

  return (
    <div className="md:w-2/3 w-full px-4 md:-mt-16 mt-4 flex flex-col justify-center">
      {!showQuestions ? (
        <>
          <h2 className="mb-2">Your form landing page</h2>
          <div
            className="flex flex-col justify-center items-center p-10 shadow-lg text-center w-full max-w-7xl md:h-96 h-60"
            style={cardStyle}
          >
            {theme.brandLogo && (
              <Image
                src={theme.brandLogo || "/feedbackLogo.png"}
                width={60}
                height={60}
                alt="Brand Logo"
                className="mb-2"
              />
            )}

            <h1
              className={`text-xl md:text-4xl font-bold mb-2 ${getAnimationClass(
                theme.textAnimation
              )}`}
            >
              Event Survey Form
            </h1>
            <p className="text-sm">Share your thoughts and help us improve</p>
            <Button
              onClick={handleStart}
              className="mt-4 md:mt-8"
              style={{
                backgroundColor: theme.buttonColor,
                color: theme.buttonTextColor,
                borderRadius: theme.buttonRadius,
                ...sharedStyles,
              }}
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
        <>
          <h2 className="mb-4 text-lg font-semibold">Event feedback</h2>
          <div
            className="flex flex-col justify-center items-center p-10 shadow-lg text-center w-full max-w-7xl md:h-96 h-60"
            style={cardStyle}
          >
            <h1
              className={`text-xl text-gray-800 font-bold mb-2 ${getAnimationClass(
                theme.textAnimation
              )}`}
            >
              {questions[currentQuestionIndex]?.text || "No question"}
            </h1>
            <Input
              type="text"
              placeholder="Type your answer..."
              value={answers[currentQuestionIndex] || ""}
              onChange={handleInputChange}
              className="md:w-1/2 w-full mt-3 text-gray-700"
              style={{
                ...sharedStyles,
                borderRadius: theme.buttonRadius,
              }}
            />
            <Button
              onClick={handleNext}
              className="mt-4 px-6 py-2"
              style={{
                backgroundColor: theme.buttonColor,
                color: theme.buttonTextColor,
                borderRadius: theme.buttonRadius,
                ...sharedStyles,
              }}
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
  );
}
