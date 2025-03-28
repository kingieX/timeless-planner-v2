/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GuestTag } from "@/types/types";
import { Battery, Signal, Wifi } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface RSVPProps {
  guestTag: GuestTag;
}

const RSVPOverviewPage = ({ guestTag }: RSVPProps) => {
  const [title, setTitle] = useState("You Are Invited");
  const [subMessage, setSubMessage] = useState("");
  const [awareness, setAwareness] = useState("Default");
  const [timerType, setTimerType] = useState("Circle");
  const [isResponsive, setIsResponsive] = useState(true);

  return (
    <div className="w-full flex justify-between gap-8 py-10 px-4 bg-white">
      {/* Left Panel - RSVP Settings */}
      <div className="md:w-1/2 w-full flex flex-col gap-4">
        <div>
          <h2 className="mb-1">RSVP TITLE</h2>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div>
          <h2 className="mb-1">RSVP sub message</h2>
          <Input
            value={subMessage}
            onChange={(e) => setSubMessage(e.target.value)}
            placeholder="Enter your message"
          />
        </div>

        <div>
          <h2 className="mb-1">Event awareness</h2>
          <Select value={awareness} onValueChange={setAwareness}>
            <SelectTrigger className="w-full">
              <SelectValue
                className="text-gray-600"
                placeholder="Select event awareness"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Default">Default</SelectItem>
              <SelectItem value="Public">Public</SelectItem>
              <SelectItem value="Private">Private</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <h2 className="mb-1">Timer button type</h2>
          <Select value={timerType} onValueChange={setTimerType}>
            <SelectTrigger className="w-full">
              <SelectValue
                className="text-gray-600"
                placeholder="Select timer button type"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Circle">Circle</SelectItem>
              <SelectItem value="Square">Square</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <h2 className="mb-1">Sender email</h2>
          <Input placeholder="Enter email" />
        </div>

        <div>
          <h2 className="mb-1">Reply to email</h2>
          <Input placeholder="Enter email" />
        </div>

        <div className="flex items-center space-x-2 mt-6">
          <Switch checked={isResponsive} onCheckedChange={setIsResponsive} />
          <span>Responsive across all devices</span>
        </div>

        <Button
          disabled={
            !title || !subMessage || !awareness || !timerType || !isResponsive
          }
          className="mt-6 w-full bg-primary text-white"
        >
          Set up now
        </Button>
      </div>

      {/* Right Panel - RSVP Mobile Preview */}
      {guestTag.guests.map((guest) => (
        <div
          key={guest.id}
          className="md:w-1/2 w-full border-[20px] border-gray-600 rounded-2xl px-6 py-4 flex flex-col items-cente max-w-md mx-auto md:mr-8"
        >
          <div className="w-full flex items-center justify-between gap-10 px-4 mb-8">
            <p>9:41</p>
            <div className="w-1/2 h-8 bg-gray-800 rounded-3xl"></div>
            <div className="flex items-start gap-1">
              <Signal size={16} />
              <Wifi size={16} />
              <Battery size={16} />
            </div>
          </div>
          <h2 className="md:text-3xl text-lg text-center font-semibold">
            {title}!
          </h2>
          <p className="text-gray-600 text-sm text-center mt-1 max-w-sm">
            {subMessage}{" "}
          </p>
          <div className="mt-4 py-2 rounded w-full bg-primary text-white text-center">
            <span>{guestTag.name}</span>
          </div>

          <div className="mt-4 flex space-x-2 py-4 justify-center items-center">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-12 h-12 flex items-center justify-center border rounded-full text-gray-600 font-semibold shadow-2xl"
              >
                04
              </div>
            ))}
          </div>

          <Button variant="outline" className="border-none my-4 w-full">
            Add to Calendar
          </Button>

          <p className="mt-4 text-sm text-center text-gray-600">
            VISIT OUR WEBSITE
          </p>
          <Link
            href="www.timelessplanner.com"
            className="text-primary text-center hover:underline"
          >
            www.timelessplanner.com
          </Link>

          <div className="mt-6 text-center">
            <div className="flex flex-col justify-center items-center gap-2 py-4">
              <Image src="/rsvp.png" width={40} height={40} alt="RSVP" />
              <p className="font-semibold text-xl text-gray-600">RSVP</p>
            </div>
            <p className="text-xs text-gray-500">
              Please let us know if you will be able to make it. Kindly RSVP by
              <span> "Date"</span>
            </p>
          </div>

          <div className="flex flex-col justify-start mt-4 py-4 space-y-2">
            <p>Will you attend</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <input type="radio" name="rsvp" /> <span>Happily Accept</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" name="rsvp" /> <span>Sorry to decline</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RSVPOverviewPage;
