"use client";
import React, { useState } from "react";
import DashboardLayout from "../dashboard/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown } from "lucide-react";
import AllTeamMember from "./_components/AllTeamMember";
import AssignedTeam from "./_components/AssignedTeam";

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState("team-member");

  const [filter, setFilter] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filterOptions = ["All", "Team lead", "Team member"] as const;

  return (
    <DashboardLayout>
      <div className="py-6 space-y-8 bg-white">
        <div className="flex flex-col w-full p-4 bg-white mb-4 fixed z-10">
          <h2 className="md:text-2xl text-xl text-gray-900 font-semibold">
            Team
          </h2>
        </div>

        <div>
          {/* Tabs Navigation */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="">
            <div className="flex justify-between w-full max-w-5xl bg-white pb-4 fixed z-10 items-center mt-8 ">
              <TabsList className="flex space-x-6 border-b">
                <TabsTrigger
                  value="team-member"
                  className={`pb-2 text-gray-600 rounded-none ${
                    activeTab === "team-member"
                      ? "border-b-2 border-primary text-primary"
                      : ""
                  }`}
                  onClick={() => setActiveTab("team-member")}
                >
                  Team members
                </TabsTrigger>

                <TabsTrigger
                  value="assigned-team"
                  className={`pb-2 text-gray-600 rounded-none ${
                    activeTab === "assigned-team"
                      ? "border-b-2 border-primary text-primary"
                      : ""
                  }`}
                  onClick={() => setActiveTab("assigned-team")}
                >
                  Assigned Team
                </TabsTrigger>
              </TabsList>

              {/* Custom Filter Dropdown */}
              <div className="relative mr-8">
                {/* Toggle Button */}
                <button
                  className="flex items-center gap-2 border px-3 py-1 rounded text-gray-600 bg-white focus:outline-none"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span className="hidden md:block">{filter}</span>
                  <ChevronDown className="text-gray-600" size={20} />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                    {filterOptions.map((option, index) => (
                      <button
                        key={index}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                          filter === option
                            ? "font-semibold text-blue-500"
                            : "text-gray-700"
                        }`}
                        onClick={() => {
                          setFilter(option);
                          setDropdownOpen(false); // Close dropdown on selection
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Tabs Content */}
            <div className="pt-16">
              <TabsContent value="team-member">
                <AllTeamMember filter={filter} />
              </TabsContent>
              <TabsContent value="assigned-team">
                <AssignedTeam />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeamPage;
