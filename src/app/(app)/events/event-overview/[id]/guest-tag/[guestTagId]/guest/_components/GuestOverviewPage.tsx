"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Camera } from "lucide-react";
import { Guest } from "@/types/types";

interface GuestProps {
  guest: Guest;
}

export const GuestOverviewPage = ({ guest }: GuestProps) => {
  const [salutation, setSalutation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [seatingStyle, setSeatingStyle] = useState("");
  const [color, setColor] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [secondaryEmail, setSecondaryEmail] = useState("");
  const [note, setNote] = useState("");
  const [externalId, setExternalId] = useState("");
  const [guestList, setGuestList] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  useEffect(() => {
    if (guest) {
      const nameParts = guest.name.split(" ");
      setSalutation(guest.salutation || "");
      setFirstName(nameParts[0] || "");
      setLastName(nameParts.slice(1).join(" ") || "");
      setEmail(guest.email || "");
      setSeatingStyle(guest.seatingStyle || "");
      setColor(guest.color || "");
      setAffiliation(guest.affiliation || "");
      setSecondaryEmail(guest.secondaryEmail || "");
      setNote(guest.note || "");
      setExternalId(guest.externalLink || "");
      setGuestList(guest.affiliation || "");
      setPhoneNo(guest.phoneNo || "");
    }
  }, [guest]);

  return (
    <div className="py-6 space-y-8 bg-white">
      <div className="flex flex-col w-full p-4 bg-white mb-4 fixed z-10">
        <h2 className="md:text-2xl text-xl text-gray-900 font-semibold">
          Guest overview
        </h2>
      </div>
      <div className="w-full py-12 mt-8 px-4 bg-gray-50 rounded">
        <div className="flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          <div className="md:col-span-2 space-y-4">
            <div>
              <label className="uppercase text-sm text-gray-600 mb-1">
                Salutation
              </label>
              <Select
                value={salutation.toLowerCase()}
                onValueChange={setSalutation}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Salutation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mr">Mr</SelectItem>
                  <SelectItem value="mrs">Mrs</SelectItem>
                  <SelectItem value="miss">Miss</SelectItem>
                  <SelectItem value="dr">Dr</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="uppercase text-sm text-gray-600 mb-1">
                  First name
                </label>
                <Input
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label className="uppercase text-sm text-gray-600 mb-1">
                  Last name
                </label>
                <Input
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="uppercase text-sm text-gray-600 mb-1">
                Email
              </label>
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="uppercase text-sm text-gray-600 mb-1">
                  Seating Style
                </label>
                <Select value={seatingStyle} onValueChange={setSeatingStyle}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seating Style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Single">Single</SelectItem>
                    <SelectItem value="Couple">Couple</SelectItem>
                    <SelectItem value="Group">Group</SelectItem>
                    <SelectItem value="Color Coded Seating">
                      Color Coded Seating
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="uppercase text-sm text-gray-600 mb-1">
                  Colour
                </label>
                <Input
                  placeholder="Color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="uppercase text-sm text-gray-600 mb-1">
                Guest List
              </label>
              <Select value={guestList} onValueChange={setGuestList}>
                <SelectTrigger>
                  <SelectValue placeholder="Guest List" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vip">VIP</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
                  <SelectItem value="business-partner">
                    Business Partner
                  </SelectItem>
                  <SelectItem value="guest-speaker">Guest Speaker</SelectItem>
                  <SelectItem value="other-attendees">
                    Other Attendees
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="uppercase text-sm text-gray-600 mb-1">
                External ID
              </label>
              <Input
                placeholder="External ID"
                value={externalId}
                onChange={(e) => setExternalId(e.target.value)}
              />
            </div>

            <h3 className="text-lg font-medium">Additional Information</h3>
            <div>
              <label className="uppercase text-sm text-gray-600 mb-1">
                Affiliation
              </label>
              <Input
                placeholder="Affiliation"
                value={affiliation}
                onChange={(e) => setAffiliation(e.target.value)}
              />
            </div>
            <div>
              <label className="uppercase text-sm text-gray-600 mb-1">
                Secondary Email
              </label>
              <Input
                placeholder="Secondary Email"
                value={secondaryEmail}
                onChange={(e) => setSecondaryEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="uppercase text-sm text-gray-600 mb-1">
                Note
              </label>
              <Input
                placeholder="Note (Optional)"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>

            <h3 className="text-lg font-medium">Notification Settings</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="uppercase text-sm text-gray-600 mb-1">
                  Email Recipient
                </label>
                <Input value={email} disabled />
              </div>
              <div>
                <label className="uppercase text-sm text-gray-600 mb-1">
                  Whatsapp
                </label>
                <Input
                  placeholder="Phone Number"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-between space-x-4">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-blue-600 text-white">Update Guest</Button>
            </div>
          </div>

          <div className="flex flex-col w-full md:h-72 bg-white items-center justify-center border rounded-lg p-6">
            <div className="p-6 bg-gray-200 rounded-full border-4 border-white shadow-md mb-4">
              <Camera className="h-8 w-8 text-gray-600" />
            </div>
            <Button variant="outline" className="mt-4">
              Check in Guest
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
