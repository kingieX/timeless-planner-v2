import { User, Chat } from "@/types/mockChats";

const mockUser: User = {
  id: 1,
  name: "Alison Eyo",
  email: "alison.e@rayna.ui",
  profileImage: "/images/user1.jpg",
};

const mockChats: Chat[] = [
  {
    id: "chat1",
    taskName: "Dinner night team",
    members: [
      { id: 2, name: "John Green", profileImage: "/images/user2.jpg" },
      { id: 3, name: "Jane Doe", profileImage: "/images/user3.jpg" },
      { id: 4, name: "Mike Ross", profileImage: "/images/user4.jpg" },
      { id: 5, name: "Sara Paul", profileImage: "/images/user5.jpg" },
      { id: 6, name: "Emma Watson", profileImage: "/images/user6.jpg" },
    ],
    messages: [
      {
        id: "msg1",
        sender: {
          id: 2,
          name: "Orlando Diggs",
          profileImage: "/images/user2.jpg",
        },
        timestamp: "Thursday 10:16am",
        text: "Thanks everyone! Almost there.",
        type: "text",
      },
      {
        id: "msg2",
        sender: {
          id: 3,
          name: "Lana Steiner",
          profileImage: "/images/user3.jpg",
        },
        timestamp: "Thursday 11:40am",
        text: "Tech requirements.pdf",
        attachment: { name: "Tech requirements.pdf", size: "1.2 MB" },
        type: "file",
      },
      {
        id: "msg3",
        sender: {
          id: 4,
          name: "Demi Wilkinson",
          profileImage: "/images/user4.jpg",
        },
        timestamp: "Thursday 11:44am",
        text: "Good timing — was just looking at this.",
        type: "text",
      },
      {
        id: "msg4",
        sender: mockUser,
        timestamp: "Thursday 11:41am",
        text: "Awesome! Thanks.",
        type: "text",
      },
    ],
  },
  {
    id: "chat2",
    taskName: "Project update",
    members: [
      { id: 1, name: "Alison Eyo", profileImage: "/images/user1.jpg" },
      { id: 5, name: "Sara Paul", profileImage: "/images/user5.jpg" },
      { id: 6, name: "Emma Watson", profileImage: "/images/user6.jpg" },
    ],
    messages: [
      {
        id: "msg5",
        sender: {
          id: 1,
          name: "Alison Eyo",
          profileImage: "/images/user1.jpg",
        },
        timestamp: "Thursday 12:00pm",
        text: "Hey everyone! I've made some progress on the project.",
        type: "text",
      },
      {
        id: "msg6",
        sender: {
          id: 5,
          name: "Sara Paul",
          profileImage: "/images/user5.jpg",
        },
        timestamp: "Thursday 12:02pm",
        text: "Great work! I'm looking forward to seeing the final result.",
        type: "text",
      },
      {
        id: "msg7",
        sender: {
          id: 6,
          name: "Emma Watson",
          profileImage: "/images/user6.jpg",
        },
        timestamp: "Thursday 12:05pm",
        text: "Thanks for keeping me updated. I'm excited to see the result.",
        type: "text",
      },
    ],
  },
];

export { mockUser, mockChats };
