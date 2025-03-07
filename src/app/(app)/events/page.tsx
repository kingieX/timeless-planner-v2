"use client";
import React, { useState } from "react";
import DashboardLayout from "../dashboard/layout";
// import AllProjects from "./_components/AllProjects";
import { ChevronDown } from "lucide-react";
import AllEvents from "./_components/AllEvents";

const EventPage = () => {
  const [selectedTab, setSelectedTab] = useState("events");
  const [filter, setFilter] = useState("All Events");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // const filterOptions = ["All Events", "Created by me", "Shared with me"];
  const filterOptions = ["Last 7 days", "Last 30 days", "All events"] as const;

  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="flex flex-col w-full py-4 max-w-5xl bg-white mb-4 fixed z-10">
          <h2 className="md:text-2xl font-semibold mb-4">Events</h2>

          <div className="flex items-center justify-between border-b">
            {/* Tab Navigation */}
            <div className="flex gap-6">
              <button
                className={`pb-2 ${
                  selectedTab === "events"
                    ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setSelectedTab("events")}
              >
                All Events
              </button>

              <button
                className={`pb-2 ${
                  selectedTab === "upcoming-events"
                    ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setSelectedTab("upcoming-events")}
              >
                Upcoming Events
              </button>

              <button
                className={`pb-2 ${
                  selectedTab === "past-events"
                    ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setSelectedTab("past-events")}
              >
                Past Events
              </button>
            </div>

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
        </div>

        {/* Page Content */}
        <div className="mt-24 px-1">
          <div className="md:pt-4 pt-2">
            {selectedTab === "events" ? (
              <AllEvents filter={filter} />
            ) : (
              "<UpcomingEvents />"
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EventPage;
