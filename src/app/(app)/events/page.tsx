"use client";
import React, { useState } from "react";
import DashboardLayout from "../dashboard/layout";
import { ChevronDown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AllEvents from "./_components/AllEvents";

const EventPage = () => {
  const [activeTab, setActiveTab] = useState("events");

  const [filter, setFilter] = useState("All events");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // const filterOptions = ["All Events", "Created by me", "Shared with me"];
  const filterOptions = ["Last 7 days", "Last 30 days", "All events"] as const;

  return (
    <DashboardLayout>
      <div className="py-6 space-y-8 bg-white">
        <div className="flex flex-col w-full p-4 bg-white mb-4 fixed z-10">
          <h2 className="md:text-2xl text-xl text-gray-900 font-semibold">
            Event
          </h2>
        </div>

        <div>
          {/* Tabs Navigation */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="">
            <div className="flex justify-between w-full max-w-5xl bg-white pb-4 fixed z-10 items-center mt-8 ">
              <TabsList className="flex space-x-6 border-b">
                <TabsTrigger
                  value="events"
                  className={`pb-2 text-gray-600 rounded-none ${
                    activeTab === "events"
                      ? "border-b-2 border-primary text-primary"
                      : ""
                  }`}
                  onClick={() => setActiveTab("events")}
                >
                  All Events
                </TabsTrigger>

                <TabsTrigger
                  value="upcoming-events"
                  className={`pb-2 text-gray-600 rounded-none ${
                    activeTab === "upcoming-events"
                      ? "border-b-2 border-primary text-primary"
                      : ""
                  }`}
                  onClick={() => setActiveTab("upcoming-events")}
                >
                  Upcoming Events
                </TabsTrigger>

                <TabsTrigger
                  value="past-events"
                  className={`pb-2 text-gray-600 rounded-none ${
                    activeTab === "past-events"
                      ? "border-b-2 border-primary text-primary"
                      : ""
                  }`}
                  onClick={() => setActiveTab("past-events")}
                >
                  Past Events
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
              <TabsContent value="events">
                <AllEvents filter={filter} />
              </TabsContent>
              <TabsContent value="upcoming-events">
                {/* <UpcomingEvents /> */}
              </TabsContent>
              <TabsContent value="past-events">
                {/* <PastEvents /> */}
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EventPage;
