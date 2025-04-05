"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function NotificationPreferenceTab() {
  const [categories, setCategories] = useState({
    general: false,
    task: false,
    event: false,
    system: false,
  });

  const [methods, setMethods] = useState({
    email: false,
    push: false,
    sms: false,
  });

  const [frequency, setFrequency] = useState("instant");

  return (
    <div className="md:p-6 pt-6 space-y-8">
      {/* Notifications Categories */}
      <div className="space-y-4 border-b pb-6">
        <h3 className="text-lg font-semibold">Notifications Categories</h3>
        {[
          {
            key: "general",
            label: "General Notifications",
            desc: "Updates on app features, maintenance, etc",
          },
          {
            key: "task",
            label: "Task Completion",
            desc: "Alerts for new submissions, changes or issues",
          },
          {
            key: "event",
            label: "Event Creation and Completion",
            desc: "Alerts for new submissions, changes or issues",
          },
          {
            key: "system",
            label: "System Alert",
            desc: "Critical updates or errors related to the app’s performance",
          },
        ].map((item) => (
          <div
            key={item.key}
            className="flex items-start justify- gap-4 border rounded-lg px-4 py-3 hover:shadow-sm transition"
          >
            <Switch
              checked={categories[item.key as keyof typeof categories]}
              onCheckedChange={(val) =>
                setCategories((prev) => ({ ...prev, [item.key]: val }))
              }
            />
            <div>
              <p className="font-medium">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Notifications Method */}
      <div className="space-y-4 border-b pb-6">
        <h3 className="text-lg font-semibold">Notifications Method</h3>
        <div className="space-y-3 pl-1">
          {["Email", "Push Notifications", "SMS"].map((method) => (
            <div key={method} className="flex items-center space-x-3">
              <Checkbox
                id={method}
                checked={
                  methods[
                    method
                      .toLowerCase()
                      .replace(" ", "") as keyof typeof methods
                  ]
                }
                onCheckedChange={(val) =>
                  setMethods((prev) => ({
                    ...prev,
                    [method.toLowerCase().replace(" ", "")]: val,
                  }))
                }
              />
              <label htmlFor={method} className="text-sm font-medium">
                {method}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Frequency Options */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Frequency Options</h3>
        <RadioGroup
          value={frequency}
          onValueChange={(val) => setFrequency(val)}
          className="space-y-3"
        >
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="instant" id="instant" />
            <Label htmlFor="instant" className="flex flex-col">
              <span>Instant</span>
              <span className="text-sm font-normal text-muted-foreground">
                Notifications are sent immediately
              </span>
            </Label>
          </div>

          <div className="flex items-center space-x-3">
            <RadioGroupItem value="daily" id="daily" />
            <Label htmlFor="daily" className="flex flex-col">
              <span>Daily</span>
              <span className="text-sm font-normal text-muted-foreground">
                Summary of notifications once a day
              </span>
            </Label>
          </div>

          <div className="flex items-center space-x-3">
            <RadioGroupItem value="weekly" id="weekly" />
            <Label htmlFor="weekly" className="flex flex-col">
              <span>Weekly</span>
              <span className="text-sm font-normal text-muted-foreground">
                Summary notifications once a week
              </span>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
