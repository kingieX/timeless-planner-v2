import Image from "next/image";
import { useState } from "react";
import { MessageCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
const AssignedTeam = () => {
  const [search, setSearch] = useState("");

  const teams = [
    {
      id: 1,
      name: "Venue Setup",
      leads: 2,
      members: 18,
      avatars: [
        "/avatars/user1.jpg",
        "/avatars/user2.jpg",
        "/avatars/user3.jpg",
        "/avatars/user4.jpg",
      ],
    },
    {
      id: 2,
      name: "Catering",
      leads: 3,
      members: 22,
      avatars: [
        "/avatars/user5.jpg",
        "/avatars/user6.jpg",
        "/avatars/user7.jpg",
        "/avatars/user8.jpg",
      ],
    },
  ];

  const cardData = [
    {
      number: "09",
      title: "Total Team Created",
    },
    {
      number: "12",
      title: "Total Team Lead",
    },
    {
      number: "09",
      title: "Total Team Members",
    },
    {
      number: "09",
      title: "Total Tasks",
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      {/* The numbers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full p-6 rounded-lg"
          >
            <h2 className="md:text-3xl text-xl font-">{card.number}</h2>
            <p className="md:text-lg">{card.title}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 border rounded-md p-2">
        <Search className="text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none bg-transparent"
        />
      </div>

      <div className="mt-4 space-y-4">
        {teams.map((team) => (
          <div key={team.id} className="flex flex-col gap-4 p-3 rounded-lg">
            <div className="bg-gray-100 px-3 py-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{team.name}</h3>
                <p className="text-sm text-gray-500">
                  {team.leads} Leads {team.members} Members
                </p>
              </div>
              <div className="flex -space-x-2">
                {team.avatars.map((avatar, index) => (
                  <Image
                    key={index}
                    src={avatar}
                    alt="team member"
                    width={30}
                    height={30}
                    className="w-8 h-8 rounded-full border border-primary"
                  />
                ))}
                <span className="bg-gray-300 w-8 h-8 flex items-center justify-center rounded-full text-xs font-semibold">
                  +{team.members - team.avatars.length}
                </span>
              </div>
              <div>
                <MessageCircle size={24} className="text-gray-600" />
              </div>
            </div>
            <div className="w-full flex items-center gap-2">
              <span className="bg-gray-300 w-8 h-8 flex items-center justify-center rounded-full text-xs font-semibold"></span>
              <Input type="text" placeholder="write a message..." />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignedTeam;
