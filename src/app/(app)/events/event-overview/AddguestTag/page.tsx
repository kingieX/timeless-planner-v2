"use client";
import DashboardLayout from "@/app/(app)/dashboard/layout";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { AddGuestManually } from "./_components/AddGuestManually";

export default function AddGuestPage() {
  const [activeTab, setActiveTab] = useState("add-guest-manually");
  const searchParams = useSearchParams();
  const router = useRouter();

  const guestTag = searchParams.get("guestListTag");
  const eventName = searchParams.get("selectedEvent");
  const eventId = searchParams.get("eventId");

  const handleBack = () => {
    router.push(`/events/event-overview/${eventId}`);
  };

  return (
    <DashboardLayout>
      <div className="py-6 space-y-8">
        <div className="flex flex-col w-full p-4 bg-white mb-4 fixed z-10">
          <h2 className="md:text-2xl text-xl text-gray-900 font-semibold">
            <span
              onClick={handleBack}
              className="hover:underline hover:text-primary cursor-pointer"
            >
              {eventName}
            </span>{" "}
            &gt; <span>{guestTag}</span>
          </h2>
        </div>

        <div className="w-full flex flex-col justify-center">
          {/* Tabs Navigation */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="">
            <div className="w-full max-w-6xl bg-white pb-4 fixed z-10 flex items-center mt-8 ">
              <TabsList className="flex space-x-6 border-b">
                <TabsTrigger
                  value="add-guest-manually"
                  className={`pb-2 text-gray-600 rounded-none ${
                    activeTab === "add-guest-manually"
                      ? "border-b-2 border-primary text-primary"
                      : ""
                  }`}
                  onClick={() => setActiveTab("add-guest-manually")}
                >
                  Add guest manually
                </TabsTrigger>

                <TabsTrigger
                  value="upload-csv"
                  className={`pb-2 text-gray-600 rounded-none ${
                    activeTab === "upload-csv"
                      ? "border-b-2 border-primary text-primary"
                      : ""
                  }`}
                  onClick={() => setActiveTab("upload-csv")}
                >
                  Upload CSV
                </TabsTrigger>

                <TabsTrigger
                  value="get-form-link"
                  className={`pb-2 text-gray-600 rounded-none ${
                    activeTab === "get-form-link"
                      ? "border-b-2 border-primary text-primary"
                      : ""
                  }`}
                  onClick={() => setActiveTab("get-form-link")}
                >
                  Get form link
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tabs Content */}
            <div className="py-4 mt-16">
              <TabsContent value="add-guest-manually">
                <AddGuestManually />
              </TabsContent>
              <TabsContent value="upload-csv">{/* <Team /> */}</TabsContent>
              <TabsContent value="get-form-link">
                {/* <Vendors /> */}
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
}
