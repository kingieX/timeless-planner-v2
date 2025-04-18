"use client";
import DashboardLayout from "@/app/(app)/dashboard/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import AvailableTask from "./_components/AvailableTask";
import CompletedTask from "./_components/CompletedTask";

export default function Tasks() {
  const [activeTab, setActiveTab] = useState("available-task");
  const [filter, setFilter] = useState("All tasks");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // const filterOptions = ["All Events", "Created by me", "Shared with me"];
  const filterOptions = ["Last 7 days", "Last 30 days", "All tasks"] as const;

  return (
    <DashboardLayout>
      <div className="py-6 space-y-8 bg-white">
        <div className="flex flex-col w-full p-4 bg-white mb-4 fixed z-10">
          <h2 className="md:text-2xl text-xl text-gray-900 font-semibold">
            Task
          </h2>
        </div>

        <div>
          {/* Tabs Navigation */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="">
            <div className="flex justify-between w-full max-w-5xl bg-white pb-4 fixed z-10 items-center mt-8 ">
              <TabsList className="flex space-x-6 border-b">
                <TabsTrigger
                  value="available-task"
                  className={`pb-2 text-gray-600 rounded-none ${
                    activeTab === "available-task"
                      ? "border-b-2 border-primary text-primary"
                      : ""
                  }`}
                  onClick={() => setActiveTab("available-task")}
                >
                  Available task
                </TabsTrigger>

                <TabsTrigger
                  value="completed-task"
                  className={`pb-2 text-gray-600 rounded-none ${
                    activeTab === "completed-task"
                      ? "border-b-2 border-primary text-primary"
                      : ""
                  }`}
                  onClick={() => setActiveTab("completed-task")}
                >
                  Completed task
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
            <div className="pt-12">
              <TabsContent value="available-task">
                <AvailableTask filter={filter} />
              </TabsContent>
              <TabsContent value="completed-task">
                <CompletedTask />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
}
