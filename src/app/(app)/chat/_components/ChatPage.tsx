"use client";
import { useState } from "react";
import { mockUser, mockChats } from "@/data/mockChats";
import Image from "next/image";
import { Message } from "@/types/mockChats";
import { ArrowRight, Menu, Paperclip, Search, X, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ChatPage() {
  const [activeChat, setActiveChat] = useState(mockChats[0]);
  const [newMessage, setNewMessage] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    const newMsg: Message = {
      id: `msg${Date.now()}`,
      sender: mockUser,
      timestamp: "Just now",
      text: newMessage,
      type: "text", // Explicitly assigning the correct type
    };

    setActiveChat({
      ...activeChat,
      messages: [...activeChat.messages, newMsg], // Now matches the expected type
    });

    setNewMessage("");
  };
  return (
    <div className="flex h-screen md:mr-12">
      {/* Hamburger Menu Button */}
      <button
        className="md:hidden absolute top-4 left-4 z-20 p-2 bg-gray-100 rounded shadow"
        onClick={() => setIsSidebarOpen(true)}
      >
        <Menu size={24} />
      </button>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-72 bg-white p-4 border-r transform transition-transform md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button (Mobile Only) */}
        <button
          className="md:hidden absolute top-4 right-4 p-2 bg-gray-100 rounded"
          onClick={() => setIsSidebarOpen(false)}
        >
          <X size={24} />
        </button>

        <div className="flex items-center mb-4 bg-gray-50 p-2">
          <div className="relative">
            <div className="absolute bottom-2 right-3 w-2 h-2 rounded-full bg-green-600"></div>
            <Image
              src={mockUser.profileImage}
              alt={mockUser.name}
              width={40}
              height={40}
              className="w-10 h-10 border rounded-full mr-3"
            />
          </div>
          <div>
            <h2 className="text-gray-600 font-semibold">{mockUser.name}</h2>
            <p className="text-sm text-gray-500">{mockUser.email}</p>
          </div>
        </div>
        <div className="relative mb-4">
          <Search size={20} className="absolute top-2 left-2" />
          <Input
            type="text"
            placeholder="Search"
            className="w-full px-8 py-2 border bg-gray-300 rounded"
          />
        </div>
        <ul className="py-4">
          {mockChats.map((chat) => (
            <li
              key={chat.id}
              className={`p-3 cursor-pointer flex justify-between items-center ${
                activeChat.id === chat.id ? "bg-blue-100" : ""
              }`}
              onClick={() => setActiveChat(chat)}
            >
              <p className="text-gray-600">
                {chat.taskName.length > 15
                  ? chat.taskName.slice(0, 15) + "..."
                  : chat.taskName}
              </p>
              <div className="flex -space-x-2">
                {chat.members.slice(0, 5).map((member) => (
                  <Image
                    key={member.id}
                    src={member.profileImage}
                    width={40}
                    height={40}
                    className="w-6 h-6 rounded-full border"
                    alt={member.name}
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </aside>

      {/* Chat Window */}
      <main className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 bg-blue-600 text-white md:rounded-xl flex flex-col justify-between items-start">
          <h2 className="text-lg md:text-xl font- md:ml-0 ml-12">
            {activeChat.taskName}
          </h2>
          <div className="flex -space-x-2 py-2 md:ml-0 ml-12">
            {activeChat.members.slice(0, 5).map((member) => (
              <Image
                key={member.id}
                src={member.profileImage}
                width={40}
                height={40}
                className="w-6 h-6 rounded-full border"
                alt={member.name}
              />
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 gap-6 overflow-y-auto">
          {activeChat.messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender.id === mockUser.id ? "justify-end" : ""
              } mb-6 py-4 px-2`}
            >
              {msg.sender.id !== mockUser.id && (
                <div className="relative">
                  <Image
                    src={msg.sender.profileImage}
                    width={40}
                    height={40}
                    alt={msg.sender.name}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div className="absolute bottom-2 right-3 w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
              )}
              <div className="max-w-xs w-full">
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="font-medium text-gray-800">
                    {msg.sender.name}
                  </span>
                  <span className="text-xs">{msg.timestamp}</span>
                </div>
                <div
                  className="max-w-sm p-3 rounded-lg shadow text-sm"
                  style={{
                    backgroundColor:
                      msg.sender.id === mockUser.id ? "#333" : "#f3f3f3",
                    color: msg.sender.id === mockUser.id ? "#fff" : "#000",
                  }}
                >
                  {msg.type === "text" ? (
                    msg.text
                  ) : msg.type === "file" && msg.attachment ? (
                    <div className="p-2 border rounded-xl rounded-tl-none bg-white flex justify-start gap-1 items-start">
                      <div className="border p-1 bg-gray-100 rounded-full">
                        <Zap size={14} className=" text-gray-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          {msg.attachment.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {msg.attachment.size}
                        </p>
                      </div>
                    </div>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="text-center text-gray-500 text-sm border-t pt-4">
            Today
          </div>
        </div>

        {/* Message Input */}
        <div className="flex items-center gap-2 px-6 py-4">
          <div className="flex gap-2 items-center border rounded-xl p-2 w-full">
            <Input
              type="text"
              className="flex-1 p-2 border rounded mr-2"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button>
              <Paperclip className="text-gray-500" />
            </button>
          </div>
          <button
            className="bg-primary p-2 rounded text-white"
            onClick={handleSendMessage}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
