"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Topbar from "@/components/Topbar";
import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Feedbackpage() {
  const [activeTab, setActiveTab] = useState("builder");
  const router = useRouter();

  const searchParams = useSearchParams();
  // const formTitle = searchParams.get("formTitle") || "Default Title";
  const selectedEvent = searchParams.get("selectedEvent") || "Default Event";

  return (
    <div>
      <Topbar />
      <div className="py-12 px-4">
        <div className="w-1/4 flex items-center gap-1 border-r">
          <div
            onClick={() => router.push("/feedback")}
            className="p-2 cursor-pointer rounded-full hover:bg-gray-100"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </div>
          <h2 className="text-lg font-semibold space-x-2">
            <span className="text-sm font-light text-gray-600">
              {selectedEvent}
            </span>
            <span className="font-semibold">Event survey</span>
            {/* {formTitle} */}
          </h2>
        </div>

        {/* Tabs Navigation */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="border-r w-1/4"
        >
          <div className="w-full flex items-center">
            <TabsList className="w-full grid grid-cols-4 bg-gray-200 p-1 rounded-md my-3 mr-3">
              <TabsTrigger
                value="builder"
                className={`text-gray-600 rounded-none ${
                  activeTab === "builder" ? "  text-primary" : ""
                }`}
              >
                Builder
              </TabsTrigger>
              <TabsTrigger
                value="theme"
                className={`text-gray-600 rounded-none ${
                  activeTab === "theme" ? " text-primary" : ""
                }`}
              >
                Theme
              </TabsTrigger>
              <TabsTrigger
                value="logic"
                className={`text-gray-600 rounded-none ${
                  activeTab === "logic" ? "text-primary" : ""
                }`}
              >
                Logic
              </TabsTrigger>
              <TabsTrigger
                value="share"
                className={`text-gray-600 rounded-none ${
                  activeTab === "share" ? "text-primary" : ""
                }`}
              >
                Share
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tag Content */}
          <TabsContent value="builder">{/* <AIFormBuilder /> */}</TabsContent>
          <TabsContent value="theme">{/* <Theme /> */}</TabsContent>
          <TabsContent value="logic">{/* <Logic /> */}</TabsContent>
          <TabsContent value="share">{/* <Share /> */}</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
