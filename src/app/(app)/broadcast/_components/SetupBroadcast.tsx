import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { projectData } from "@/data/data";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function SetupBroadcast() {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [guestTags, setGuestTags] = useState<string[]>([]);
  const [messageSubject, setMessageSubject] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [broadcastOptions, setBroadcastOptions] = useState({
    text: false,
    email: false,
    whatsapp: false,
  });

  // Get all events from projectData
  const events = projectData.projects.flatMap((project) => project.events);

  // Get all unique guest tags from events
  const allGuestTags = Array.from(
    new Set(events.flatMap((event) => event.guestTag.map((tag) => tag.name)))
  );

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-4">Messaging</h2>
      <p className="text-gray-500 text-sm md:max-w-3xl mb-6">
        Easily create and send broadcast messages to your selected guest tags or
        list. Keep your guest informed about event updates, reminders, and
        important details in just a few steps.
      </p>

      <div className="md:w-1/2 w-full">
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-2">
            Select Event
          </label>
          <Select value={selectedEvent} onValueChange={setSelectedEvent}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an event" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {events.map((event) => (
                  <SelectItem key={event.id} value={event.name}>
                    {event.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-2">
            Select Guest Tag
          </label>
          <Select
            value=""
            onValueChange={(selected) => {
              if (!guestTags.includes(selected)) {
                setGuestTags([...guestTags, selected]);
              }
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select guest tag" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {allGuestTags.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Display selected tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {guestTags.map((tag) => (
              <div
                key={tag}
                className="flex items-center bg-gray-100 text-gray-600 px-2 py-1 rounded-lg"
              >
                <span className="mr-2">{tag}</span>
                <button
                  onClick={() =>
                    setGuestTags(guestTags.filter((t) => t !== tag))
                  }
                  className="text-gray-600 hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-2">
            Message Subject
          </label>
          <Input
            type="text"
            value={messageSubject}
            onChange={(e) => setMessageSubject(e.target.value)}
            placeholder="message subject"
          />
        </div>

        <div className="mb-6">
          {/* <label className="block text-gray-600 text-sm mb-2">
          Type Your Message
        </label> */}
          <Textarea
            value={messageBody}
            onChange={(e) => setMessageBody(e.target.value)}
            placeholder="type a message"
            className="min-h-[80px]"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 text-sm mb-2">
            Broadcast Options
          </label>
          <div className="flex flex-col gap-2">
            <div className="flex items-center space-x-2">
              <Switch
                id="text-message"
                checked={broadcastOptions.text}
                onCheckedChange={(checked) =>
                  setBroadcastOptions({ ...broadcastOptions, text: checked })
                }
              />
              <Label htmlFor="text-message">Text Message</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="email"
                checked={broadcastOptions.email}
                onCheckedChange={(checked) =>
                  setBroadcastOptions({ ...broadcastOptions, email: checked })
                }
              />
              <Label htmlFor="email">Email</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="whatsapp"
                checked={broadcastOptions.whatsapp}
                onCheckedChange={(checked) =>
                  setBroadcastOptions({
                    ...broadcastOptions,
                    whatsapp: checked,
                  })
                }
              />
              <Label htmlFor="whatsapp">Whatsapp</Label>
            </div>
          </div>
        </div>

        <Button
          disabled={
            !selectedEvent ||
            !guestTags ||
            !messageSubject ||
            !messageBody ||
            !broadcastOptions
          }
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Send Broadcast
        </Button>
      </div>
    </div>
  );
}
