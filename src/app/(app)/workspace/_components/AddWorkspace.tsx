/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function AddWorkspace() {
  const [isOpen, setIsOpen] = useState(false);
  const [workspaceName, setWorkspaceName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleContinue = () => {
    const queryParams = new URLSearchParams({
      workspaceName,
      email,
    }).toString();
    router.push(`/events/add-event?${queryParams}`);
  };

  return (
    <div className="flex flex-col md:px-4 px-2 items-center max-w-sm justify-center h-full text-center">
      <div className="bg-gray-100 p-6 rounded-full">
        <Image
          src="/projects/Illustration.png"
          alt="Illustration"
          width={150}
          height={150}
        />
      </div>
      <h2 className="text-lg font-semibold mt-4">No Workspace Found</h2>
      <p className="text-gray-500 mt-2 max-w-md">
        It looks like you haven't created any workspace yet. Click below to
        create your workspace.
      </p>
      <Button
        className="w-full block text-center bg-primary text-white py-2 mx-4 rounded-lg hover:bg-opacity-80 transition mt-4"
        onClick={() => setIsOpen(true)}
      >
        Create Workspace
      </Button>

      {/* Create Event Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>My Workspace</DialogTitle>
          </DialogHeader>

          {/* workspace Name */}
          <div className="flex flex-col gap-2">
            <label>Workspace Name</label>
            <Input
              placeholder="enter workspace name"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label>Mail</label>
            <Input
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex justify-between gap-2 mt-4 md:mt-6">
            <Button
              className="text-primary"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button
              disabled={!workspaceName || !email}
              onClick={handleContinue}
            >
              Add space
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
