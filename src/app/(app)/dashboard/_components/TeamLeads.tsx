import Image from "next/image";

// Sample data for Team Leads
const teamLeadsData = [
  {
    email: "olaminore@gmail.com",
    team: "Design team ",
    event: "",
    avatar: "/avatar10.png",
  },

  {
    email: "olaminore@gmail.com",
    team: "Design team",
    event: "Dinner party",
    avatar: "/avatar8.png",
  },
  {
    email: "janedoe@gmail.com",
    team: "Marketing team",
    event: "Corporate Meeting",
    avatar: "/avatar9.png",
  },
];

export function TeamLeads() {
  return (
    <div className="py-4 bg-white">
      <h3 className="md:text-lg text-gray-600 mb-3">Team Leads</h3>
      {teamLeadsData.map((lead, index) => (
        <div
          key={index}
          className="flex items-center gap-3 mb-2 hover:border rounded-lg p-3"
        >
          <Image
            src={lead.avatar}
            alt="team lead avatar"
            width={40}
            height={40}
            className="rounded-full w-10 h-10 border-2 border-white"
          />
          <div>
            <p className="text-primary text-sm">{lead.email}</p>
            <p className="text-gray-900 text-">
              {lead.team}{" "}
              <span className="text-[#42CEF2] text-xs ml-2">{lead.event}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
