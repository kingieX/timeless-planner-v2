/* eslint-disable react/no-unescaped-entities */
"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function AIFormBuilder() {
  const [formTitle, setFormTitle] = useState("Customer feedback from");

  return (
    <div className="flex h-screen p-4 gap-4">
      {/* Left Column */}
      <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">
          Dinner party <span className="font-bold">Event survey</span>
        </h2>

        <Tabs defaultValue="builder">
          <TabsList className="grid grid-cols-4 bg-gray-200 p-1 rounded-md my-3">
            <TabsTrigger value="builder">Builder</TabsTrigger>
            <TabsTrigger value="theme">Theme</TabsTrigger>
            <TabsTrigger value="logic">Logic</TabsTrigger>
            <TabsTrigger value="share">Share</TabsTrigger>
          </TabsList>

          <TabsContent value="builder">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Form Title</label>
                <Input
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold">Forms</h3>
                <p className="text-xs text-gray-500">
                  The forms user will give feedback to
                </p>
                <div className="mt-2 space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    Start - {formTitle}
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Q1 - Did you attend the event
                  </Button>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                + Add Interaction
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <Button className="mt-4 w-full bg-blue-600 text-white">
          Create feedback
        </Button>
      </div>

      {/* Right Column */}
      <div className="w-2/3 flex flex-col items-center justify-center">
        <div className="bg-blue-400 text-white p-10 rounded-lg shadow-lg text-center w-full max-w-lg">
          <h1 className="text-xl font-bold">Event Survey Form</h1>
          <p className="text-sm">Share your thoughts and help us improve</p>
          <Button className="mt-4 bg-red-500 text-white">Get Started</Button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Customize your form's appearance: Change the background, add your
          logo, and more in the Theme tab.
        </p>
      </div>
    </div>
  );
}
