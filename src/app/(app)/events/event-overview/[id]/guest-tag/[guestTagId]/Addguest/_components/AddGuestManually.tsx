import React from "react";
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

export const AddGuestManually = () => {
  return (
    <div className="w-full py-6 px-4 bg-gray-50 rounded">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
        <div className="md:col-span-2 space-y-4">
          <div>
            <label className="uppercase text-sm text-gray-600 mb-1">
              Salutation
            </label>
            <Select>
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
              <Input placeholder="First Name" />
            </div>
            <div>
              <label className="uppercase text-sm text-gray-600 mb-1">
                Last name
              </label>
              <Input placeholder="Last Name" />
            </div>
          </div>
          <div>
            <label className="uppercase text-sm text-gray-600 mb-1">
              Email
            </label>
            <Input placeholder="Email" type="email" />
          </div>
          <div>
            <label className="uppercase text-sm text-gray-600 mb-1">
              Start Date
            </label>
            <Input placeholder="Start Date" type="text" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="uppercase text-sm text-gray-600 mb-1">
                Seating Style
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seating Style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="color-coded">
                    Color Coded Seating
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="uppercase text-sm text-gray-600 mb-1">
                Colour
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="red">🔴 Red</SelectItem>
                  <SelectItem value="green">��� Green</SelectItem>
                  <SelectItem value="blue">�� Blue</SelectItem>
                  <SelectItem value="yellow">�� Yellow</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <label className="uppercase text-sm text-gray-600 mb-1">
              Guest List
            </label>
            <Select>
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
                <SelectItem value="other-attendees">Other Attendees</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="uppercase text-sm text-gray-600 mb-1">
              External ID
            </label>
            <Input placeholder="External ID" />
          </div>

          <h3 className="text-lg font-medium">Additional Information</h3>
          <div>
            <label className="uppercase text-sm text-gray-600 mb-1">
              Affiliation
            </label>
            <Input placeholder="Affiliation" />
          </div>
          <div>
            <label className="uppercase text-sm text-gray-600 mb-1">
              Secondary Email
            </label>
            <Input placeholder="Secondary Email" />
          </div>
          <div>
            <label className="uppercase text-sm text-gray-600 mb-1">Note</label>
            <Input placeholder="Note (Optional)" />
          </div>

          <h3 className="text-lg font-medium">Notification Settings</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="uppercase text-sm text-gray-600 mb-1">
                Email Recipient
              </label>
              <Input placeholder="Email Recipients" />
            </div>
            {/* <Input placeholder="Text Recipients" /> */}
            <div>
              <label className="uppercase text-sm text-gray-600 mb-1">
                Whatsapp
              </label>
              <Input placeholder="WhatsApp" />
            </div>
          </div>

          <div className="flex justify-between space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-blue-600 text-white">Add Guest</Button>
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
  );
};
