"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AddTeamMemberDialogProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function CreateWorkspaceDialog({
  isOpen,
  setIsOpen,
}: AddTeamMemberDialogProps) {
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
          <Button disabled={!workspaceName || !email} onClick={handleContinue}>
            Add space
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
