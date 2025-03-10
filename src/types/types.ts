export interface TeamMember {
  id: string;
  name: string;
}

export interface Event {
  id: string;
  name: string;
  createdAt?: string;
  eventDate: string;
  eventTime: string;
  eventType: string;
  location: string;
  industry?: string;
  teamMembers: TeamMember[];
  teamLead?: string;
  guestTag?: number;
  totalGuest?: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  createdTime: string;
  projectDate: string;
  //   createdBy?: string;
  createdBy: "me" | "shared"; // Ensure this property exists
  events: Event[];
}

export interface ProjectData {
  projects: Project[];
}
