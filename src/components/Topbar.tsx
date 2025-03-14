"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bell, UserRound } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import CreateProjectDialog from "@/app/(app)/_components/dialogs/CreateProjectDialog";

export default function Topbar() {
  const pathname = usePathname();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Define button actions per page
  const buttonConfig: Record<string, { label: string; action: () => void }> = {
    "/dashboard": {
      label: "Create Project",
      action: () => setIsDialogOpen(true),
    },
    "/guests": {
      label: "Add Guest",
      action: () => console.log("Add Guest Clicked"),
    },
    "/check-in": {
      label: "Check-in Guest",
      action: () => console.log("Check-in Clicked"),
    },
  };

  // Get button details
  const buttonDetails = buttonConfig[pathname] || {
    label: "Action",
    action: () => {},
  };

  return (
    <div className="bg-white w-full flex fixed z-40 justify-between items-center px-6 py-2">
      <div className="ml-8 md:ml-0 mt-1 flex-shrink-0 flex items-center">
        <Image
          src="/logo.png"
          alt="TimelessPlanner Logo"
          width={32}
          height={32}
          className="mr-2"
        />
        <span className="md:text-lg font-semibold">Timeless Planner</span>
      </div>

      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          className="md:mr-8 px-4"
          onClick={buttonDetails.action}
        >
          {buttonDetails.label}
        </Button>

        <button className="relative">
          <Bell size={24} className="text-secondary hover:text-primary" />
          <span className="absolute -top-2 -right-1 bg-primary text-white text-xs w-4 rounded-full">
            3
          </span>
        </button>

        <div className="flex justify-center items-center bg-gray-100 rounded-full p-2">
          <UserRound size={16} className="text-secondary" />
        </div>
      </div>

      {/* Create Project Dialog */}
      <CreateProjectDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />
    </div>
  );
}
