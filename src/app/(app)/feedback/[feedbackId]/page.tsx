"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Topbar from "@/components/Topbar";
import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AIFormBuilder from "./_components/AIFormBuilder";
import ThemeTab from "./_components/ThemeTab";
import { FormBuilderProvider } from "@/context/FormBuilderContext";

export default function Feedbackpage() {
  const [activeTab, setActiveTab] = useState("builder");
  const router = useRouter();

  const searchParams = useSearchParams();
  const formTitle = searchParams.get("formTitle") || "Default Title";
  const selectedEvent = searchParams.get("selectedEvent") || "Default Event";

  return (
    <FormBuilderProvider>
      <div>
        <Topbar />
        <div className="py-12">
          <div className="md:w-1/4 w-full bg-white flex items-center gap- border-r fixed z-20">
            <div
              onClick={() => router.push("/feedback")}
              className="p-1 cursor-pointer rounded-full hover:bg-gray-100"
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
          <Tabs value={activeTab} onValueChange={setActiveTab} className="">
            <div className="md:w-1/4 w-full bg-white flex items-center border-r pt-8 fixed z-10">
              <TabsList className="w-full grid grid-cols-4 bg-gray-200 p-1 rounded-md my-3 mx-3">
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
            <div className="pt-20">
              <div>
                <TabsContent value="builder">
                  <AIFormBuilder formTitle={formTitle} />
                </TabsContent>
                <TabsContent value="theme">
                  <ThemeTab />
                </TabsContent>
                <TabsContent value="logic">{/* <Logic /> */}</TabsContent>
                <TabsContent value="share">{/* <Share /> */}</TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </FormBuilderProvider>
  );
}
