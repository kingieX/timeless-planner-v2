"use client";
import { GuestTag } from "@/types/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import AllGuests from "./AllGuests";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import CheckedIn from "./CheckedIn";
import PendingCheckedIn from "./PendingCheckedIn";
import { useProject } from "@/context/ProjectContext";

interface GuestTagProps {
  guestTag: GuestTag;
}

export default function GuestTagOverviewPage({ guestTag }: GuestTagProps) {
  const [activeTab, setActiveTab] = useState("all-guests");
  const [searchQuery, setSearchQuery] = useState("");

  console.log("Guest Tag: ", guestTag);

  const { setGuestTag } = useProject();

  // Function to filter guests based on search query
  const filteredGuests = guestTag.guests.filter((guest) =>
    [guest.name, guest.id, guest.affiliation].some(
      (field) =>
        field && field.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  useEffect(() => {
    setGuestTag(guestTag); // Set project in context
  }, [guestTag, setGuestTag]);

  return (
    <div className="py-6 space-y-8 bg-white">
      <div className="flex flex-col w-full p-4 bg-white mb-4 fixed z-10">
        <h2 className="md:text-2xl text-xl text-gray-900 font-semibold">
          <span>{guestTag.name}</span> overview
        </h2>
      </div>

      <div className="w-full flex flex-col justify-center">
        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="">
          <div className="w-full max-w-6xl bg-white pb-4 fixed z-10 flex items-center mt-8 ">
            <TabsList className="flex space-x-6 border-b">
              <TabsTrigger
                value="all-guests"
                className={`pb-2 text-gray-600 rounded-none ${
                  activeTab === "all-guests"
                    ? "border-b-2 border-primary text-primary"
                    : ""
                }`}
                onClick={() => setActiveTab("all-guests")}
              >
                All guests
              </TabsTrigger>

              <TabsTrigger
                value="check-in"
                className={`pb-2 text-gray-600 rounded-none ${
                  activeTab === "check-in"
                    ? "border-b-2 border-primary text-primary"
                    : ""
                }`}
                onClick={() => setActiveTab("check-in")}
              >
                Check in
              </TabsTrigger>

              <TabsTrigger
                value="pending-check-ins"
                className={`pb-2 text-gray-600 rounded-none ${
                  activeTab === "pending-check-ins"
                    ? "border-b-2 border-primary text-primary"
                    : ""
                }`}
                onClick={() => setActiveTab("pending-check-ins")}
              >
                Pending check-ins
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Search bar */}
          <div className="relative mt-24 mb-2 md:mr-8">
            <Search size={20} className="absolute top-2 left-2" />
            <Input
              type="text"
              placeholder="Search name, ID, or affiliation"
              className="text-gray-800 pl-8 py-3"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Tabs Content */}
          <div className="py-">
            <TabsContent value="all-guests">
              <AllGuests guestTag={{ ...guestTag, guests: filteredGuests }} />
            </TabsContent>
            <TabsContent value="check-in">
              <CheckedIn guestTag={{ ...guestTag, guests: filteredGuests }} />
            </TabsContent>
            <TabsContent value="pending-check-ins">
              <PendingCheckedIn
                guestTag={{ ...guestTag, guests: filteredGuests }}
              />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
