import { useState } from "react";
import { ArrowRight, Paperclip } from "lucide-react";
import Image from "next/image";
import { Task } from "@/types/types";

interface ChatMessage {
  id: number;
  sender: string;
  senderAvatar: string;
  time: string;
  message?: string;
  attachment?: {
    name: string;
    size: string;
  };
  isCurrentUser?: boolean;
}

interface TeamChatTabProps {
  task: Task;
}

const TeamChatTab: React.FC<TeamChatTabProps> = ({ task }) => {
  const [message, setMessage] = useState("");

  const messages: ChatMessage[] = [
    {
      id: 1,
      sender: "Orlando Diggs",
      senderAvatar: "/avatars/orlando.png",
      time: "Thursday 10:06am",
      message: "Thanks everyone! Almost there.",
    },
    {
      id: 2,
      sender: "Lana Steiner",
      senderAvatar: "/avatars/lana.png",
      time: "Thursday 11:40am",
      attachment: {
        name: "Tech requirements.pdf",
        size: "1.2 MB",
      },
    },
    {
      id: 3,
      sender: "Demi Wilkinson",
      senderAvatar: "/avatars/demi.png",
      time: "Thursday 11:46am",
      message: "Good timing — was just looking at this.",
    },
    {
      id: 4,
      sender: "You",
      senderAvatar: "/avatars/you.png",
      time: "Thursday 11:48am",
      message: "Awesome! Thanks.",
      isCurrentUser: true,
    },
  ];

  return (
    <div className="flex flex-col gap-4 pt-4">
      <div className="bg-primary text-white rounded-xl p-4">
        <h2 className="text-lg md:text-xl font-">{task.taskName}</h2>

        <div className="flex -space-x-2 py-2">
          {task.team.slice(0, 3).map((member) => (
            <span
              key={member.id}
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-600"
            >
              {member.email[0].toUpperCase()}
            </span>
          ))}
          {task.team.length > 3 && (
            <span className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
              +{task.team.length - 3}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-6 py-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`w-full flex gap-3 items-start ${
              msg.isCurrentUser ? "flex-row-reverse text-right" : "text-left"
            }`}
          >
            <div
              className={`relative ${msg.isCurrentUser ? "hidden" : "block"}`}
            >
              <Image
                src={msg.senderAvatar}
                alt={msg.sender}
                width={40}
                height={40}
                className="rounded-full w-12 h-12 bg-blue-100 border"
              />
              <div className="absolute bottom-2 right-0.5 w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
            <div
            // className={`flex flex-col rounded-xl p-3 w-full ${
            //   msg.isCurrentUser ? "bg-gray-600 text-white" : "bg-gray-100"
            // }`}
            >
              <div
                className={`flex justify-between items-center text-sm mb-1 ${
                  msg.isCurrentUser ? "text-gray-500" : "text-gray-500"
                }`}
              >
                <span className="font-medium text-gray-800">{msg.sender}</span>
                <span className="text-xs">{msg.time}</span>
              </div>
              <div
                className={`flex justify-between rounded-xl shadow-md text-sm mb-1 ${
                  msg.isCurrentUser
                    ? "text-white bg-gray-800 rounded-tr-none"
                    : "text-gray-800 bg-gray-100 rounded-tl-none"
                }`}
              >
                {msg.message && <p className="p-3">{msg.message}</p>}
                {msg.attachment && (
                  <div className="p-2 border rounded-xl rounded-tl-none bg-white flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">
                        {msg.attachment.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {msg.attachment.size}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="text-center text-gray-500 text-sm border-t pt-4">
          Today
        </div>

        <div className="flex items-center gap-2 ">
          <div className="flex gap-2 items-center border rounded-xl p-2 w-full">
            <input
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 border-none outline-none px-2 text-gray-700"
            />
            <button>
              <Paperclip className="text-gray-500" />
            </button>
          </div>
          <button className="bg-primary p-2 rounded text-white">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamChatTab;
