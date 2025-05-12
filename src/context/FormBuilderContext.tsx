import { createContext, useContext, useState } from "react";

type Question = {
  id: string;
  text: string;
};

type Theme = {
  brandLogo?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  layoutColor?: string;
  textColor: string;
  buttonColor: string;
  buttonTextColor: string;
  background: string;
  typeFace: string;
  textAnimation: string;
  textSize: string;
  buttonRadius: string;
  backgroundOpacity: string;
};

type FormBuilderContextType = {
  formTitle: string;
  setFormTitle: (title: string) => void;
  questions: Question[];
  setQuestions: (q: Question[]) => void;
  theme: Theme;
  setTheme: (theme: Partial<Theme>) => void;
};

const FormBuilderContext = createContext<FormBuilderContextType | undefined>(
  undefined
);

export const FormBuilderProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [formTitle, setFormTitle] = useState("Untitled Form");

  const [questions, setQuestions] = useState<Question[]>([]);

  const [theme, setTheme] = useState<Theme>({
    brandLogo: "/feedbackLogo.png",
    backgroundImage: "",
    backgroundColor: "#42CEF2",
    layoutColor: "#ffffff",
    textColor: "#FFFFFF",
    buttonColor: "#1877f2",
    buttonTextColor: "#ffffff",
    background: "#ffffff",
    typeFace: "Inter",
    textAnimation: "none",
    textSize: "16px",
    buttonRadius: "0.5rem",
    backgroundOpacity: "100%",
  });

  const updateTheme = (newTheme: Partial<Theme>) => {
    setTheme((prev) => ({ ...prev, ...newTheme }));
  };

  return (
    <FormBuilderContext.Provider
      value={{
        formTitle,
        setFormTitle,
        questions,
        setQuestions,
        theme,
        setTheme: updateTheme,
      }}
    >
      {children}
    </FormBuilderContext.Provider>
  );
};

export const useFormBuilder = () => {
  const context = useContext(FormBuilderContext);
  if (!context)
    throw new Error("useFormBuilder must be used within FormBuilderProvider");
  return context;
};
