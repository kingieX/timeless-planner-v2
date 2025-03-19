"use client";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import DashboardLayout from "../../dashboard/layout";
import { Button } from "@/components/ui/button";

function SendTextForm() {
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone");
  const [message, setMessage] = useState("");

  return (
    <div className="md:p-6 p-4 mt-12 md:max-w-2xl">
      <div className="flex items-center mb-4 gap-8">
        <h2 className="text-lg">Vendor Phone</h2>
        <p className="text-red-500">{phone}</p>
      </div>
      <div className="mb-4 space-y-2">
        <label htmlFor="message">Message</label>
        <textarea
          className="w-full border p-2 mb-4 rounded"
          rows={4}
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button
        className="w-full"
        onClick={() => alert(`Message sent to ${phone}`)}
      >
        Send message
      </Button>
    </div>
  );
}

export default function SendText() {
  return (
    <DashboardLayout>
      <Suspense fallback={<p className="p-4">Loading text form...</p>}>
        <SendTextForm />
      </Suspense>
    </DashboardLayout>
  );
}
