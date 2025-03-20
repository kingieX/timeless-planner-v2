export interface TeamMember {
  id: string;
  name: string;
}

export interface TeamLead {
  id: string;
  name: string;
  email: string;
}

export interface Guest {
  id: string;
  salutation: string;
  name: string;
  email: string;
  phoneNo: string;
  seatingStyle: string;
  color: string;
  externalLink?: string;
  RSVP: boolean;
  checkedIn: boolean;
  imageUrl?: string;
  affiliation?: string;
  secondaryEmail?: string;
  note?: string;
}

export interface GuestTag {
  id: string;
  name: string;
  guests: Guest[];
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
  teamLead: TeamLead[]; // Now an array of TeamLead objects
  guestTag: GuestTag[]; // Now an array of GuestTag objects
}

export interface Project {
  id: string;
  title: string;
  description: string;
  createdTime: string;
  projectDate: string;
  createdBy: "me" | "shared";
  events: Event[];
}

export interface ProjectData {
  projects: Project[];
}

export interface Vendor {
  id: number;
  serviceName: string;
  email: string;
  phone: string;
  officeAddress: string;
  rating: number;
  reviews: number;
}

// /types for tasks
export type TeamRole = "Team Lead" | "Team Member";

export interface TaskTeamMember {
  id: string;
  email: string;
  role: TeamRole;
}

export interface TaskEvent {
  id: string;
  name: string;
}

export interface Task {
  id: string;
  taskName: string;
  taskDescription: string;
  startDate: string;
  endDate: string;
  status: "Pending" | "In Progress" | "Completed";
  taskInstruction: string;
  uploadAttachment: string;
  maximumTeam: number;
  priorityLevel: "Low" | "Medium" | "High";
  Event: boolean;
  event?: TaskEvent; // optional if Event is false
  team: TaskTeamMember[];
}
