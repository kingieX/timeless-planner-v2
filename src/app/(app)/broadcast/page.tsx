"use client";
import React, { useState } from "react";
import DashboardLayout from "../dashboard/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SetupBroadcast from "./_components/SetupBroadcast";
import BroadcastList from "./_components/BroadcastList";

const BroadcastPage = () => {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <DashboardLayout>
      <div className="py-6 space-y-8 bg-white">
        <div className="flex flex-col w-full p-4 bg-white mb-4 fixed z-10">
          <h2 className="md:text-2xl text-xl text-gray-900 font-semibold">
            Broadcast
          </h2>
        </div>

        <div>
          {/* Tabs Navigation */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="">
            <div className="flex justify-between w-full max-w-5xl bg-white pb-4 fixed z-10 items-center mt-8 ">
              <TabsList className="flex space-x-6 border-b">
                <TabsTrigger
                  value="list"
                  className={`pb-2 text-gray-600 rounded-none ${
                    activeTab === "list"
                      ? "border-b-2 border-primary text-primary"
                      : ""
                  }`}
                  onClick={() => setActiveTab("list")}
                >
                  List
                </TabsTrigger>

                <TabsTrigger
                  value="setup-broadcast"
                  className={`pb-2 text-gray-600 rounded-none ${
                    activeTab === "setup-broadcast"
                      ? "border-b-2 border-primary text-primary"
                      : ""
                  }`}
                  onClick={() => setActiveTab("setup-broadcast")}
                >
                  Setup broadcast
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tabs Content */}
            <div className="pt-16">
              <TabsContent value="list">
                <BroadcastList />
              </TabsContent>
              <TabsContent value="setup-broadcast">
                <SetupBroadcast />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BroadcastPage;
