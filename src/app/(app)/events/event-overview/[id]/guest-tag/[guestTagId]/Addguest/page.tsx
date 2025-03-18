"use client";

import DashboardLayout from "@/app/(app)/dashboard/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams, useRouter } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { AddGuestManually } from "./_components/AddGuestManually";

import { projectData } from "@/data/data";
import UploadCSV from "./_components/UploadCSV";

function AddGuestForm() {
  const [activeTab, setActiveTab] = useState("add-guest-manually");
  const params = useParams();
  const router = useRouter();

  const eventId = params?.id as string;
  const guestTagId = params?.guestTagId as string;

  // Updated event and guest tag lookup
  const { eventName, guestTagName } = useMemo(() => {
    let eventName = "";
    let guestTagName = "";

    // Search through all projects and their events
    for (const project of projectData.projects) {
      const event = project.events.find((ev) => ev.id === eventId);
      if (event) {
        eventName = event.name;
        const guestTag = event.guestTag.find((tag) => tag.id === guestTagId);
        if (guestTag) {
          guestTagName = guestTag.name;
        }
        break; // Stop once found
      }
    }

    return { eventName, guestTagName };
  }, [eventId, guestTagId]);

  const handleBack = () => {
    router.push(`/events/event-overview/${eventId}/guest-tag/${guestTagId}`);
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
              {eventName || "Event"}
            </span>{" "}
            &gt; <span>{guestTagName || "Guest Tag"}</span>
          </h2>
        </div>

        <div className="w-full flex flex-col justify-center">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="w-full max-w-6xl bg-white pb-4 fixed z-10 flex items-center mt-8">
              <TabsList className="flex space-x-6 border-b">
                <TabsTrigger
                  value="add-guest-manually"
                  className={`pb-2 text-gray-600 rounded-none ${
                    activeTab === "add-guest-manually"
                      ? "border-b-2 border-primary text-primary"
                      : ""
                  }`}
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
                >
                  Get form link
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="py-4 mt-16">
              <TabsContent value="add-guest-manually">
                <AddGuestManually />
              </TabsContent>
              <TabsContent value="upload-csv">
                {/* Upload CSV Section */}
                <UploadCSV />
              </TabsContent>
              <TabsContent value="get-form-link">
                {/* Form link section */}
                {/* <FormLink /> */}
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default function AddGuestPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddGuestForm />
    </Suspense>
  );
}
