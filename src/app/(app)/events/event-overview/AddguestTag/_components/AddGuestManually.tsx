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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </div>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Start Date" type="text" />
          <div className="grid grid-cols-2 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seating Style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="color-coded">Color Coded Seating</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="red">🔴 Red</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Guest List" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vip">VIP</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="External ID" />

          <h3 className="text-lg font-medium">Additional Information</h3>
          <Input placeholder="Affiliation" />
          <Input placeholder="Secondary Email" />
          <Input placeholder="Note (Optional)" />

          <h3 className="text-lg font-medium">Notification Settings</h3>
          <Input placeholder="Email Recipients" />
          <Input placeholder="Text Recipients" />
          <Input placeholder="WhatsApp" />

          <div className="flex space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-blue-600 text-white">Add Guest</Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border rounded-lg p-6">
          <Camera className="h-16 w-16 text-gray-400" />
          <Button variant="outline" className="mt-4">
            Check in Guest
          </Button>
        </div>
      </div>
    </div>
  );
};
