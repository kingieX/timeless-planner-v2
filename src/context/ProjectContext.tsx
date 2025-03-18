"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Event, GuestTag, Project } from "@/types/types";

// Define context type
interface ProjectContextType {
  project: Project | null;
  setProject: (project: Project) => void;
  event: Event | null;
  setEvent: (event: Event) => void;
  guestTag: GuestTag | null;
  setGuestTag: (guestTag: GuestTag) => void;
}

// Create Context
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [project, setProject] = useState<Project | null>(null);
  const [event, setEvent] = useState<Event | null>(null);
  const [guestTag, setGuestTag] = useState<GuestTag | null>(null);

  return (
    <ProjectContext.Provider
      value={{ project, setProject, event, setEvent, guestTag, setGuestTag }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

// Custom Hook for using project context
export function useProject() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
}
