"use client";

import { vendorData } from "@/data/data";
import { Vendor } from "@/types/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dot,
  EllipsisVertical,
  Mail,
  MessageSquare,
  Star,
  Trash,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function AllVendors() {
  const router = useRouter();

  const handleSendEmail = (vendor: Vendor) => {
    router.push(
      `/vendor/send-email?serviceName=${encodeURIComponent(
        vendor.serviceName
      )}&email=${vendor.email}&address=${encodeURIComponent(
        vendor.officeAddress
      )}`
    );
  };

  const handleSendText = (vendor: Vendor) => {
    router.push(
      `/vendor/send-text?serviceName=${encodeURIComponent(
        vendor.serviceName
      )}&phone=${vendor.phone}&address=${encodeURIComponent(
        vendor.officeAddress
      )}`
    );
  };

  return (
    <div className="p-2 md:p-6">
      {vendorData.length === 0 ? (
        <p className="text-center mt-20 text-gray-500 italic">
          No vendors found.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {vendorData.map((vendor: Vendor) => (
            <Card
              key={vendor.id}
              className="p-4 shadow-md max-w-2xl md:w-1/2 w-full border rounded-xl"
            >
              <CardContent className="w-full p-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-gray-800 font-semibold mb-1">
                      {vendor.serviceName}
                    </h2>
                    <div className="flex items-center gap-1 mb-2">
                      <span className="text-gray-400">{vendor.rating}</span>
                      <span>
                        <Star
                          size={20}
                          className="text-yellow-400 fill-yellow-400"
                        />
                      </span>
                      <span className="text-gray-400">({vendor.reviews})</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      {vendor.officeAddress}
                    </p>
                    <div className="flex gap-0 items-center mb-4">
                      <p className="text-sm text-gray-600">{vendor.email}</p>
                      <Dot className="text-gray-600" />
                      <p className="text-sm text-gray-600">{vendor.phone}</p>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger className="p-1 border rounded">
                      <EllipsisVertical size={20} className="text-gray-600" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit vendor</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash />
                        <span>Delete vendor</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex gap-3 w-full">
                  <Button
                    variant="outline"
                    className="w-full text-primary flex gap-1 items-center"
                    onClick={() => handleSendEmail(vendor)}
                  >
                    <Mail size={16} /> Mail vendor
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full flex gap-1 text-primary items-center"
                    onClick={() => handleSendText(vendor)}
                  >
                    <MessageSquare size={16} /> Text vendor
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
