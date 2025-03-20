"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { Star } from "lucide-react";

interface AddVendorDialogProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function AddVendorDialog({
  isOpen,
  setIsOpen,
}: AddVendorDialogProps) {
  const [serviceName, setServiceName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [rating, setRating] = useState(3); // Default star rating
  const router = useRouter();

  const handleSave = () => {
    setIsOpen(false);
    router.push("/vendor");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Vendor</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <label>Service Name</label>
          <Input
            placeholder="Service Name"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Phone</label>
          <Input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Office Address</label>
          <Input
            placeholder="Office address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="flex border py-2 px-4 gap-2 mt-2 rounded">
          <label>Star rating</label>
          <div className="flex items-center gap-1 md:ml-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                size={8}
                key={star}
                className={`w-4 h-4 cursor-pointer transition-colors ${
                  star <= rating
                    ? "text-yellow-500 fill-yellow-500"
                    : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between gap-2 mt-6">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button
            disabled={!serviceName || !email || !phone || !address}
            onClick={handleSave}
          >
            Add vendor
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
