"use client";

import { JSX, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Bell, UserRound } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import CreateProjectDialog from "@/app/(app)/_components/dialogs/CreateProjectDialog";
import AddEventDialog from "@/app/(app)/_components/dialogs/AddEventDialog";
import AddGuestTagDialog from "@/app/(app)/_components/dialogs/AddGuestTagDialog";
import { useProject } from "@/context/ProjectContext";
import { Project, Event } from "@/types/types";

export default function Topbar() {
  const { project, event, guestTag } = useProject();
  const pathname = usePathname();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  // Define default button actions per page
  const buttonConfig: Record<
    string,
    { label: string; action: () => void; dialog?: JSX.Element }
  > = {
    "/dashboard": {
      label: "Create Project",
      action: () => setIsDialogOpen(true),
      dialog: (
        <CreateProjectDialog
          isOpen={isDialogOpen}
          setIsOpen={setIsDialogOpen}
        />
      ),
    },
    "/projects": {
      label: "Create Project",
      action: () => setIsDialogOpen(true),
      dialog: (
        <CreateProjectDialog
          isOpen={isDialogOpen}
          setIsOpen={setIsDialogOpen}
        />
      ),
    },
    "/check-in": {
      label: "Check-in Guest",
      action: () => console.log("Check-in Clicked"),
    },
  };

  // Project Overview Page Button
  if (pathname.startsWith("/projects/project-overview/") && project) {
    buttonConfig[pathname] = {
      label: "Add Event",
      action: () => setIsDialogOpen(true),
      dialog: (
        <AddEventDialog
          isOpen={isDialogOpen}
          setIsOpen={setIsDialogOpen}
          project={project as Project}
        />
      ),
    };
  }

  // Event Overview Page Button
  const eventId = event?.id;
  if (pathname.includes(`/events/event-overview/${eventId}`) && event) {
    buttonConfig[pathname] = {
      label: "Add guest tag",
      action: () => setIsDialogOpen(true),
      dialog: (
        <AddGuestTagDialog
          isOpen={isDialogOpen}
          setIsOpen={setIsDialogOpen}
          event={event as Event}
        />
      ),
    };
  }

  // Guest Tag Page Button
  if (pathname.includes(`/guest-tag/${guestTag?.id}`) && guestTag) {
    buttonConfig[pathname] = {
      label: "Add Guest",
      action: () =>
        router.push(
          `/events/event-overview/${event?.id}/guest-tag/${guestTag.id}/Addguest`
        ),
    };
  }

  // Check-in page override
  if (pathname.startsWith("/check-in/")) {
    buttonConfig[pathname] = {
      label: "Check-in Guest",
      action: () => console.log("Check-in Clicked"),
    };
  }

  const buttonDetails = buttonConfig[pathname] || "";
  // {
  //   label: "Action",
  //   action: () => {},
  // };

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

      {/* Dynamic Dialog Rendering */}
      {buttonDetails.dialog || null}
    </div>
  );
}
