import { ProjectData } from "@/types/types";

export const projectData: ProjectData = {
  projects: [
    {
      id: "28cab013-9644-4257-a0a3-b908385e99be",
      title: "Smart Waste Bin",
      description: "IoT-based waste management system",
      createdTime: "March 1, 2025",
      projectDate: "March 10, 2025 - March 20, 2025",
      createdBy: "me",
      events: [
        {
          id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
          name: "System Deployment",
          createdAt: "March 1, 2025",
          eventDate: "March 12, 2025",
          eventTime: "10:00 AM",
          eventType: "Physical",
          location: "Central City Park",
          industry: "Environmental Tech",
          teamMembers: [
            { id: "team-001", name: "Alice" },
            { id: "team-002", name: "Bob" },
            { id: "team-003", name: "Charlie" },
            { id: "team-004", name: "David" },
          ],
          teamLead: [
            { id: "lead-001", name: "Alice", email: "alice@example.com" },
          ],
          guestTag: [
            {
              id: "tag-001",
              name: "VIP Guests",
              guests: [
                {
                  id: "guest-001",
                  salutation: "Mr.",
                  name: "John Doe",
                  email: "john.doe@example.com",
                  phoneNo: "123-456-7890",
                  seatingStyle: "Round Table",
                  color: "#FF5733",
                  externalLink: "http://example.com",
                  RSVP: true,
                  checkedIn: true,
                  imageUrl: "http://example.com/image.jpg",
                  affiliation: "Tech Corp",
                  secondaryEmail: "johndoe@work.com",
                  note: "VIP Seat required",
                },
              ],
            },
          ],
        },
        {
          id: "b2c3d4e5-f6a1-7890-abcd-ef2234567891",
          name: "Testing & Calibration",
          createdAt: "March 5, 2025",
          eventDate: "March 15, 2025",
          eventTime: "2:00 PM",
          eventType: "Virtual",
          location: "Tech Lab",
          industry: "Environmental Tech",
          teamMembers: [
            { id: "team-005", name: "Emily" },
            { id: "team-006", name: "Frank" },
            { id: "team-007", name: "Grace" },
          ],
          teamLead: [
            { id: "lead-002", name: "Emily", email: "emily@example.com" },
          ],
          guestTag: [
            {
              id: "tag-002",
              name: "Developers",
              guests: [],
            },
          ],
        },
      ],
    },
    {
      id: "5fd9fa4b-31f5-4e6f-8a34-2bcf9c6d7e8a",
      title: "Recycling Awareness App",
      description: "An app to educate users on recycling techniques.",
      createdTime: "March 5, 2025",
      projectDate: "March 15, 2025 - March 25, 2025",
      createdBy: "shared",
      events: [
        {
          id: "c3d4e5f6-a1b2-7890-abcd-ef3234567892",
          name: "App Launch",
          createdAt: "March 10, 2025",
          eventDate: "March 16, 2025",
          eventTime: "11:00 AM",
          eventType: "Physical",
          location: "City Hall",
          industry: "Tech",
          teamMembers: [
            { id: "team-008", name: "Hannah" },
            { id: "team-009", name: "Isaac" },
            { id: "team-010", name: "Jack" },
          ],
          teamLead: [
            { id: "lead-003", name: "Hannah", email: "hannah@example.com" },
          ],
          guestTag: [
            {
              id: "tag-003",
              name: "Developers",
              guests: [
                {
                  id: "guest-002",
                  salutation: "Miss.",
                  name: "Hannah Mills",
                  email: "hannah@example.com",
                  phoneNo: "123-456-7890",
                  seatingStyle: "Round Table",
                  color: "#FF5733",
                  externalLink: "http://example.com",
                  RSVP: true,
                  checkedIn: false,
                  imageUrl: "http://example.com/image.jpg",
                  affiliation: "Tech Corp",
                  secondaryEmail: "hannahmills@work.com",
                  note: "VIP Seat required",
                },
              ],
            },
          ],
        },
        {
          id: "d4e5f6a1-b2c3-7890-abcd-ef4234567893",
          name: "Community Engagement Session",
          createdAt: "March 12, 2025",
          eventDate: "March 20, 2025",
          eventTime: "4:00 PM",
          eventType: "Virtual",
          location: "Green Park",
          industry: "Environmental Awareness",
          teamMembers: [
            { id: "team-011", name: "Liam" },
            { id: "team-012", name: "Mia" },
            { id: "team-013", name: "Noah" },
            { id: "team-014", name: "Olivia" },
          ],
          teamLead: [
            { id: "lead-003", name: "Hannah", email: "hannah@example.com" },
          ],
          guestTag: [
            {
              id: "tag-004",
              name: "Designers",
              guests: [
                {
                  id: "guest-002",
                  salutation: "Mr.",
                  name: "Liam west",
                  email: "laim@example.com",
                  phoneNo: "123-456-7890",
                  seatingStyle: "Round Table",
                  color: "#FF5733",
                  externalLink: "http://example.com",
                  RSVP: true,
                  checkedIn: false,
                  imageUrl: "http://example.com/image.jpg",
                  affiliation: "Tech Corp",
                  secondaryEmail: "liam.west@work.com",
                  note: "VIP Seat required",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "7e8a5fd9-4b31-f52b-6f8a-34c6d7e8a9b0",
      title: "Green Spaces App",
      description:
        "An app to help users find and discover green spaces near them.",
      createdTime: "March 25, 2025",
      projectDate: "March 30, 2025 - April 10, 2025",
      createdBy: "me",
      events: [],
    },
  ],
};
