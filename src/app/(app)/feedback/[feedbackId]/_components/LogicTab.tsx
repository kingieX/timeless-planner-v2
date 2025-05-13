import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const LogicTab = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 overflow-y-none">
      {/* Left Column */}
      <div className="md:w-1/4 w-full flex flex-col justify-between bg-white border-r pt-2 px-4 overflow-y-auto"></div>
      {/* Right Column */}
      <div className="md:w-2/3 w-full flex flex-col justify-between bg-white px-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-2">
          <Label id="mode" className="text-xl md:text-2xl font-medium">
            Email logic
          </Label>
          <Switch id="mode" checked />
        </div>
        <p className="text-s max-w-3xl text-gray-600 mb-2">
          Automate emails based on form responses. Send personalized
          confirmations, follow-ups, or notifications to the right people at the
          right time
        </p>

        {/* form */}
        <div className="py-4 md:max-w-lg w-full">
          <div className="flex flex-col gap-2 mb-4">
            <Label className="text-sm font-semibold">Email subject</Label>
            <Input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter email subject"
            />
            <Textarea
              className="border mt-2 border-gray-300 rounded-md p-2 w-full"
              placeholder="Type your message"
              rows={4}
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <Label className="text-sm font-semibold">Sender name</Label>
            <Input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter sender name"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <Label className="text-sm font-semibold">Sender email</Label>
            <Input
              type="email"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter sender email"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <Label className="text-sm font-semibold">Reply to email</Label>
            <Input
              type="email"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter reply to email"
            />
          </div>

          <Button className="w-full mt-2 bg-primary text-white py-3 px-4 rounded-md hover:bg-opacity-80 transition">
            Set up now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogicTab;
