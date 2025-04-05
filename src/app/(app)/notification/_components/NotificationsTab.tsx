"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
// import { BellIcon } from "lucide-react";

const mockNotifications = [
  {
    id: 1,
    date: "Sep 8",
    time: "10:20",
    title: "Your Form Has Been Viewed",
    message: `Hi Jimoh,  
Exciting update! Your form, “ANNUAL FEEDBACK SURVEY”, has just been completed and submitted by a participant. You can now check out the submission and access comprehensive insights in your account.  
Warm regards,  
The Zephyr Team`,
    linkText: "Go to My forms",
  },
  {
    id: 2,
    date: "Sep 8",
    time: "10:20",
    title: "Your Form Has Been Viewed",
    message: `Hi Jimoh,  
Exciting update! Your form, “ANNUAL FEEDBACK SURVEY”, has just been completed and submitted by a participant. You can now check out the submission and access comprehensive insights in your account.  
Warm regards,  
The Zephyr Team`,
    linkText: "Go to My forms",
  },
  {
    id: 3,
    date: "Sep 8",
    time: "10:20",
    title: "Your Form Has Been Viewed",
    message: `Hi Jimoh,  
Exciting update! Your form, “ANNUAL FEEDBACK SURVEY”, has just been completed and submitted by a participant. You can now check out the submission and access comprehensive insights in your account.  
Warm regards,  
The Zephyr Team`,
    linkText: "Go to My forms",
  },
];

export default function NotificationsTab() {
  return (
    <div className="md:p-6 pt-6">
      <div className="space-y-6">
        {mockNotifications.map((notif) => (
          <div
            key={notif.id}
            className="bg-white p-5 border rounded-lg shadow-sm"
          >
            <p className="text-sm text-gray-500 mb-2">{notif.date}</p>
            <h3 className="font-medium text-gray-800 mb-2">{notif.title}</h3>
            <p className="text-sm text-gray-700 whitespace-pre-line mb-2">
              {notif.message}
            </p>
            <div className="flex flex-col gap-4 text-sm text-gray-500 mt-3 cursor-pointer">
              <span>{notif.time}</span>
              <div className="group text-primary font-medium flex items-center space-x-1 hover:underline">
                <span>{notif.linkText}</span>
                <ArrowRight
                  size={20}
                  className="transform transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
