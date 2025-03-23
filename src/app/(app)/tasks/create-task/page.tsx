"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
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
import { projectData } from "@/data/data";
import { Info, Mail, Paperclip, Save, Settings, User } from "lucide-react";

const TiptapEditor = dynamic(() => import("./_components/TiptapEditor"), {
  ssr: false,
});
// import TiptapEditor from "./_components/TiptapEditor";

interface TeamMember {
  email: string;
  role: string;
}

const CreateTaskPage = () => {
  const [eventEnabled, setEventEnabled] = useState(false);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { email: "", role: "" },
  ]);

  const handleEmailChange = (index: number, value: string) => {
    const updated = [...teamMembers];
    updated[index].email = value;
    setTeamMembers(updated);

    // Add a new row if this is the last input and the user is filling it
    if (index === teamMembers.length - 1 && value.trim() !== "") {
      setTeamMembers([...updated, { email: "", role: "" }]);
    }
  };

  const handleRoleChange = (index: number, value: string) => {
    const updated = [...teamMembers];
    updated[index].role = value;
    setTeamMembers(updated);
  };

  return (
    <div>
      <Topbar />
      <div className="w-full bg-white flex justify-end items-center px-8  fixed z-30 pt-16">
        <div className="flex justify-center items-center space-x-2 md:mr-24">
          <Button className="text-gray-500 border-none bg-transparent shadow-none hover:bg-gray-100">
            <Save /> Save as Draft
          </Button>
          <Button>Save task</Button>
        </div>
      </div>
      <div className="container mx-auto p-4 pt-24 px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start md:gap-12">
          <div className="flex-1 space-y-6 md:ml-20">
            <Accordion
              type="multiple"
              defaultValue={[
                "table-arrangement",
                "file-attachment",
                "task-settings",
                "team",
              ]}
            >
              <AccordionItem value="table-arrangement">
                <AccordionTrigger className="border-b mb-4">
                  Table Arrangement
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2">
                    <label>Task Description</label>
                    <Textarea placeholder="Task Description" className="mb-4" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Task Instruction</label>
                    <TiptapEditor />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="file-attachment">
                <AccordionTrigger className="border-b mb-4">
                  File Attachment
                </AccordionTrigger>
                <AccordionContent>
                  <Button
                    variant="outline"
                    className="border-gray-800 hover:border-primary"
                  >
                    <Paperclip />
                    Upload Attachment
                  </Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="task-settings">
                <AccordionTrigger>Task Settings</AccordionTrigger>
                <AccordionContent>
                  <Card>
                    <CardTitle className="flex space-x-2 items-center border-l-2 border-l-primary p-2 text-gray-600 mt-1">
                      <Settings size={16} /> <span>General</span>
                    </CardTitle>
                    <CardContent className="flex md:gap-8 gap-4 md:-pl-4 pl-0">
                      <div className="md:w-1/4 w-0 bg-gray-100"></div>
                      <div className="w-full flex flex-col md:gap-8 gap-4 mt-2">
                        {/* Maximum Team */}
                        <div className="flex justify-between gap-2">
                          <label className="text-sm font-medium shrink-0">
                            Maximum Team
                          </label>
                          <div className="md:w-1/2 w-3/4">
                            <Input type="number" placeholder="0" />
                            <div className="flex items- gap-1 mt-2">
                              <Info size={16} className="text-gray-500" />
                              <p className="text-xs max-w-xs text-gray-500">
                                Number of Team that can be added to this task.
                                Set 0 for no limits.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Priority Level */}
                        <div className="flex justify-between gap-2">
                          <label className="text-sm font-medium shrink-0">
                            Priority Level
                          </label>
                          <div className="md:w-1/2 w-3/4">
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
                            <div className="flex items- gap-1 mt-2">
                              <Info size={16} className="text-gray-500" />
                              <p className="text-xs max-w-xs text-gray-500">
                                Task priority level
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Event toggle */}
                        <div className="flex justify-between gap-2 mt-4">
                          <label
                            htmlFor="event-toggle"
                            className="text-sm font-medium shrink-0"
                          >
                            Event
                          </label>
                          <div className="md:w-1/2 w-3/4">
                            <Switch
                              id="event-toggle"
                              checked={eventEnabled}
                              onCheckedChange={setEventEnabled}
                            />
                            <div className="flex items-start gap-1 mt-2">
                              <Info size={16} className="text-gray-500" />
                              <p className="text-xs max-w-xs text-gray-500">
                                Link Event to Task
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Event selection */}
                        <div className="flex justify-between gap-2 mt-4">
                          <label className="text-sm font-medium shrink-0">
                            Event
                          </label>
                          <div className="md:w-1/2 w-3/4">
                            <Select disabled={!eventEnabled}>
                              <SelectTrigger
                                className={
                                  !eventEnabled
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                                }
                              >
                                <SelectValue placeholder="None" />
                              </SelectTrigger>
                              <SelectContent>
                                {projectData.projects &&
                                projectData.projects.length > 0 ? (
                                  projectData.projects
                                    .flatMap((project) => project.events)
                                    .map((event) => (
                                      <SelectItem
                                        key={event.id}
                                        value={event.id.toString()}
                                      >
                                        {event.name}
                                      </SelectItem>
                                    ))
                                ) : (
                                  <p className="px-2 py-1 text-gray-500">
                                    No projects available
                                  </p>
                                )}
                              </SelectContent>
                            </Select>
                            <div className="flex items-start gap-1 mt-2">
                              <Info size={16} className="text-gray-500" />
                              <p className="text-xs max-w-xs text-gray-500">
                                Add Event
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="team">
                <AccordionTrigger className="border-b mb-4">
                  Team
                </AccordionTrigger>
                <AccordionContent className="flex md:gap-8 gap-4 -pl-4">
                  <div className="w-1/4 md:block hidden">Team</div>
                  <div className="px-2 w-full">
                    {teamMembers.map((member, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
                      >
                        <div className="flex flex-col gap-2">
                          <label>Add Team Email</label>
                          <div className="relative">
                            <Mail
                              size={16}
                              className="absolute top-2.5 left-2 text-gray-600"
                            />
                            <Input
                              placeholder="Add Team Email"
                              className="pl-8"
                              value={member.email}
                              onChange={(e) =>
                                handleEmailChange(index, e.target.value)
                              }
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <label>Add Team Role</label>
                          <div className="relative">
                            <User
                              size={16}
                              className="absolute top-2.5 left-2 text-gray-600"
                            />
                            <Select
                              value={member.role}
                              onValueChange={(value) =>
                                handleRoleChange(index, value)
                              }
                            >
                              <SelectTrigger className="pl-7">
                                <SelectValue placeholder="Select Role" />
                              </SelectTrigger>
                              <SelectContent className="pl-8">
                                <SelectItem value="team-lead">
                                  Team Lead
                                </SelectItem>
                                <SelectItem value="team">
                                  Team Member
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="w-full md:w-1/4 mt-6 md:mt-20">
            <Card className="border-none shadow-none">
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
