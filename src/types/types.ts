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
