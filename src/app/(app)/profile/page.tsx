"use client";
import React, { useState } from "react";
import DashboardLayout from "../dashboard/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileTab from "./_components/ProfileTab";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <DashboardLayout>
      <div className="py-6 space-y-8 bg-white">
        <div>
          {/* Tabs Navigation */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="">
            <div className="flex justify-between w-full max-w-5xl bg-gray-50 p-4 fixed z-10 items-center mt-2 border-b">
              <TabsList className="flex space-x-6 bg-gray-50">
                <TabsTrigger
                  value="profile"
                  className={`text-gray-500 rounded-none ${
                    activeTab === "profile" ? " text-gray-800" : ""
                  }`}
                  onClick={() => setActiveTab("profile")}
                >
                  Profile
                </TabsTrigger>

                <TabsTrigger
                  value="password"
                  className={`text-gray-500 rounded-none ${
                    activeTab === "password" ? "text-gray-800" : ""
                  }`}
                  onClick={() => setActiveTab("password")}
                >
                  Password
                </TabsTrigger>

                <TabsTrigger
                  value="integration"
                  className={` text-gray-500 rounded-none ${
                    activeTab === "integration" ? "text-gray-800" : ""
                  }`}
                  onClick={() => setActiveTab("integration")}
                >
                  Integration
                </TabsTrigger>

                <TabsTrigger
                  value="billing"
                  className={`text-gray-500 rounded-none ${
                    activeTab === "billing" ? "text-gray-800" : ""
                  }`}
                  onClick={() => setActiveTab("billing")}
                >
                  Billing
                </TabsTrigger>

                <TabsTrigger
                  value="notification"
                  className={`text-gray-500 rounded-none ${
                    activeTab === "notification" ? "text-gray-800" : ""
                  }`}
                  onClick={() => setActiveTab("notification")}
                >
                  Notifications
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tabs Content */}
            <div className="pt-16">
              <TabsContent value="profile">
                <ProfileTab />
              </TabsContent>
              <TabsContent value="password">
                <ProfileTab />
              </TabsContent>
              <TabsContent value="integration">
                {/* <NotificationPreferenceTab /> */}
              </TabsContent>
              <TabsContent value="billing">
                {/* <NotificationPreferenceTab /> */}
              </TabsContent>
              <TabsContent value="notification">
                {/* <NotificationPreferenceTab /> */}
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
