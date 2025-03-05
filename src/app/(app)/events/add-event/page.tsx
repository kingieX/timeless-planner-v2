"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import DashboardLayout from "../../dashboard/layout";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { RefreshCcw } from "lucide-react";
import Image from "next/image";

export default function AddEventPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [eventName, setEventName] = useState(
    searchParams.get("eventName") || ""
  );
  // const [eventType, setEventType] = useState("");
  const [eventLocation, setEventLocation] = useState(
    searchParams.get("eventLocation") || ""
  );
  const [streetAddress, setStreetAddress] = useState("");
  const [state, setState] = useState("");
  const [stateInitial, setStateInitial] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eventLogo, setEventLogo] = useState("");

  const handleCreateEvent = () => {
    // Submit event details logic here
  };

  return (
    <DashboardLayout>
      <div className="p-6 bg-white">
        <div className="flex flex-col w-full py-4 md:max-w-5xl bg-white mb-4 fixed z-10">
          <h2 className="md:text-2xl text-gray-500 font-semibold">Add Event</h2>
        </div>

        <div className="flex flex-col gap-2 max-w-2xl mt-20">
          {/* Event Name */}
          <div className="flex flex-col gap-2">
            <label className="font-light">Event Name</label>
            <Input
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="Event name"
            />
          </div>

          {/* Event Type */}
          <div className="flex flex-col gap-2 mt-4">
            <label className="font-light">Event Type</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select event type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="hospitality">Hospitality</SelectItem>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="birthday">Birthday</SelectItem>
                  <SelectItem value="burial">Burial</SelectItem>
                  <SelectItem value="board-meeting">Board meeting</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Event Location Type */}
          <div className="flex flex-col md:gap-4 gap-2 mt-4">
            <label className="font-light">Event Location Type</label>
            <RadioGroup
              defaultValue="in-person"
              className="md:space-y-4 space-y-2 md:ml-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="in-person" id="in-person" />
                <Label htmlFor="in-person">In-Person</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="virtual" id="virtual" />
                <Label htmlFor="virtual">Virtual</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Event Location */}
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex justify-between items-center">
              <label className="font-light">Event Location</label>
              <div className="flex items-center gap-2 text-primary text-sm cursor-pointer hover:text-primary/70">
                <RefreshCcw size={16} />
                <span>Reset Location</span>
              </div>
            </div>

            {/* location inputs */}
            <div className="md:space-y-4 space-y-2 mb-4">
              <Input
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
                placeholder="Event location"
              />
              <Input
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                placeholder="Street address"
              />
              <Input
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="State"
              />
              <Input
                value={stateInitial}
                onChange={(e) => setStateInitial(e.target.value)}
                placeholder="State initial"
              />
              <Input
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Zip code"
              />
              <Input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Country"
              />
              <div className="">
                <Image
                  src="/events/map.png"
                  alt="map.png"
                  width={400}
                  height={400}
                />
              </div>
            </div>

            {/* Time zone */}
            <div className="flex flex-col gap-2">
              <label className="font-light">Time zone</label>
              <Input
                value={timeZone}
                onChange={(e) => setTimeZone(e.target.value)}
                placeholder="time zone"
              />
            </div>
          </div>

          {/* Start date & Start time */}
          <div className="w-full flex md:flex-row flex-col md:justify-between items-center md:gap-8 gap-4 mt-2">
            {/* Start date */}
            <div className="w-full flex flex-col gap-2">
              <label className="font-light uppercase">Start Date</label>
              <Input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className=" w-full flex flex-col gap-2">
              <label className="font-light uppercase">Start Time</label>
              <Input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
          </div>

          {/* End date & End time */}
          <div className="w-full flex md:flex-row flex-col md:justify-between items-center md:gap-8 gap-4 mt-2">
            {/* End date */}
            <div className="w-full flex flex-col gap-2">
              <label className="font-light uppercase">End Date</label>
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div className=" w-full flex flex-col gap-2">
              <label className="font-light uppercase">End Time</label>
              <Input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>

          {/* EVENT LOGO OR THUMBNAIL (OPTIONAL) */}
          <div className="w-full flex flex-col gap-2 mt-2">
            <label className="font-light uppercase">
              EVENT LOGO OR THUMBNAIL (OPTIONAL)
            </label>
            <div className="flex justify-center items-center h-48 border rounded">
              <Input
                type="file"
                value={eventLogo}
                onChange={(e) => setEventLogo(e.target.value)}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button onClick={handleCreateEvent}>Create Event</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
