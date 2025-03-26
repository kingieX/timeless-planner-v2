import Image from "next/image";
import { Download, ImageIcon } from "lucide-react";
import { Task } from "@/types/types";

interface Attachment {
  id: number;
  sender: string;
  senderAvatar: string;
  fileName: string;
  fileSize: string;
  time: string;
}

interface AttachmentsTabProps {
  task: Task;
}

const AttachmentsTab: React.FC<AttachmentsTabProps> = ({ task }) => {
  const attachments: Attachment[] = [
    {
      id: 1,
      sender: "Phoenix Baker",
      senderAvatar: "/avatars/phoenix.png",
      fileName: "Latest design screenshot.jpg",
      fileSize: "1.2 MB",
      time: "Friday 2:20pm",
    },
    {
      id: 2,
      sender: "Phoenix Baker",
      senderAvatar: "/avatars/phoenix.png",
      fileName: "Latest design screenshot.jpg",
      fileSize: "1.2 MB",
      time: "Friday 2:20pm",
    },
    {
      id: 3,
      sender: "Phoenix Baker",
      senderAvatar: "/avatars/phoenix.png",
      fileName: "Latest design screenshot.jpg",
      fileSize: "1.2 MB",
      time: "Friday 2:20pm",
    },
  ];

  return (
    <div className="flex flex-col gap-4 pt-4">
      <div className="bg-primary text-white rounded-xl p-4">
        <h2 className="text-lg md:text-xl">{task.taskName}</h2>
        <div className="flex -space-x-2 py-2">
          {task.team.slice(0, 5).map((member) => (
            <span
              key={member.id}
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-600"
            >
              {member.email[0].toUpperCase()}
            </span>
          ))}
          {task.team.length > 5 && (
            <span className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
              +{task.team.length - 5}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-6 py-4">
        {attachments.map((attachment) => (
          <div
            key={attachment.id}
            className="flex flex-col gap-2  p-3 bg-white"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-800">
                {attachment.sender}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">{attachment.time}</span>
                <button>
                  <Download size={18} className="text-gray-600" />
                </button>
              </div>
            </div>

            <div className="border-2 rounded-xl p-3 flex items-start gap-2 bg-gray-50">
              <div className="flex justify-center items-center p-1 w-8 h-8 bg-gray-200 rounded-full">
                <ImageIcon size={20} className="text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-medium">{attachment.fileName}</p>
                <p className="text-xs text-gray-500">{attachment.fileSize}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="text-center text-gray-500 text-sm border-t pt-4">
          Today
        </div>
      </div>
    </div>
  );
};

export default AttachmentsTab;
