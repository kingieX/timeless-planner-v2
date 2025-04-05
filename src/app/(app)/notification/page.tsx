"use client";
import React, { useState } from "react";
import DashboardLayout from "../dashboard/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NotificationsTab from "./_components/NotificationsTab";
import NotificationPreferenceTab from "./_components/NotificationPreferenceTab";

const NotificationPage = () => {
  const [activeTab, setActiveTab] = useState("notifications");

  return (
    <DashboardLayout>
      <div className="py-6 space-y-8 bg-white">
        <div className="flex flex-col w-full p-4 bg-white mb-4 fixed z-10">
          <h2 className="md:text-2xl text-xl text-gray-900 font-semibold">
            Notifications
          </h2>
        </div>

        <div>
          {/* Tabs Navigation */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="">
            <div className="flex justify-between w-full max-w-5xl bg-white pb-4 fixed z-10 items-center mt-8 ">
              <TabsList className="flex space-x-6 border-b">
                <TabsTrigger
                  value="notifications"
                  className={`pb-2 text-gray-600 rounded-none ${
                    activeTab === "notifications"
                      ? "border-b-2 border-primary text-primary"
                      : ""
                  }`}
                  onClick={() => setActiveTab("notifications")}
                >
                  Notifications
                </TabsTrigger>

                <TabsTrigger
                  value="notification-preference"
                  className={`pb-2 text-gray-600 rounded-none ${
                    activeTab === "notification-preference"
                      ? "border-b-2 border-primary text-primary"
                      : ""
                  }`}
                  onClick={() => setActiveTab("notification-preference")}
                >
                  Notification preference
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tabs Content */}
            <div className="pt-16">
              <TabsContent value="notifications">
                <NotificationsTab />
              </TabsContent>
              <TabsContent value="notification-preference">
                <NotificationPreferenceTab />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NotificationPage;
