"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import Topbar from "@/components/Topbar";
import dynamic from "next/dynamic";

const TiptapEditor = dynamic(() => import("./_components/TiptapEditor"), {
  ssr: false,
});

// import TiptapEditor from "./_components/TiptapEditor";

const CreateTaskPage = () => {
  return (
    <div>
      <Topbar />
      <div className="container mx-auto p-4 py-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="flex-1 space-y-6">
            <div className="flex justify-end items-center">
              <div className="space-x-2">
                <Button variant="outline">Save as Draft</Button>
                <Button>Save task</Button>
              </div>
            </div>

            <Accordion
              type="multiple"
              defaultValue={["table-arrangement", "team"]}
            >
              <AccordionItem value="table-arrangement">
                <AccordionTrigger>Table Arrangement</AccordionTrigger>
                <AccordionContent>
                  <Textarea placeholder="Task Description" className="mb-4" />
                  <TiptapEditor />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="file-attachment">
                <AccordionTrigger>File Attachment</AccordionTrigger>
                <AccordionContent>
                  <Button variant="outline">Upload Attachment</Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="task-settings">
                <AccordionTrigger>Task Settings</AccordionTrigger>
                <AccordionContent>
                  <Card>
                    <CardContent className="p-4 space-y-4">
                      <div>
                        <label className="text-sm font-medium">
                          Maximum Team
                        </label>
                        <Input type="number" placeholder="0" />
                        <p className="text-xs text-gray-500 mt-1">
                          Set 0 for no limits.
                        </p>
                      </div>

                      <div>
                        <label className="text-sm font-medium">
                          Priority Level
                        </label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="High">High</SelectItem>
                            <SelectItem value="Medium">Medium</SelectItem>
                            <SelectItem value="Low">Low</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center gap-4">
                        <Switch id="event-toggle" />
                        <label
                          htmlFor="event-toggle"
                          className="text-sm font-medium"
                        >
                          Link Event to Task
                        </label>
                      </div>

                      <div>
                        <label className="text-sm font-medium">Event</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="None" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="None">None</SelectItem>
                            <SelectItem value="Event1">Event 1</SelectItem>
                            <SelectItem value="Event2">Event 2</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="team">
                <AccordionTrigger>Team</AccordionTrigger>
                <AccordionContent>
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
                    >
                      <Input placeholder="Add Team Email" />
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="team-lead">Team Lead</SelectItem>
                          <SelectItem value="team">Team</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="w-full md:w-1/4 mt-6 md:mt-0">
            <Card>
              <CardContent className="p-4 text-sm text-gray-600 space-y-2">
                <h4 className="font-semibold mb-2">Task Creation Tips</h4>
                {Array.from({ length: 10 }).map((_, index) => (
                  <p key={index}>Set priority level for awareness</p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskPage;
