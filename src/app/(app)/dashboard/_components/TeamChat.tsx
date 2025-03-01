import { MessageCircle } from "lucide-react";
import Image from "next/image";

// Sample data for Team Chat
const teamChatData = [
  {
    task: "Table arrangement",
    leads: 3,
    members: 23,
    avatars: ["/avatar1.png", "/avatar2.png", "/avatar3.png", "/avatar4.png"],
  },
  {
    task: "Event planning",
    leads: 2,
    members: 18,
    avatars: ["/avatar5.png", "/avatar6.png", "/avatar7.png"],
  },
];

export function TeamChat() {
  return (
    <div className="py-4 bg-white">
      <h3 className="md:text-lg text-gray-600 mb-3">Team Chat</h3>
      {teamChatData.map((chat, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-3 hover:border rounded-lg mb-2"
        >
          <div>
            <p className="">{chat.task}</p>
            <p className="text-sm text-gray-500 mt-2">
              <span className="font-semibold">{chat.leads}</span> Leads{" "}
              <span className="font-semibold">{chat.members}</span> Members
            </p>
          </div>
          <div className="flex items-center gap-3 mr-4">
            <div className="flex -space-x-2 mr-12">
              {chat.avatars.map((avatar, idx) => (
                <Image
                  key={idx}
                  src={avatar}
                  alt="avatar"
                  width={24}
                  height={24}
                  className="rounded-full w-6 h-6 border-2 border-white"
                />
              ))}
            </div>
            <MessageCircle size={20} className="text-gray-600" />
          </div>
        </div>
      ))}
    </div>
  );
}
