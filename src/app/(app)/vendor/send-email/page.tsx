"use client";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import DashboardLayout from "../../dashboard/layout";
import { Button } from "@/components/ui/button";

function SendEmailForm() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [message, setMessage] = useState("");

  return (
    <div className="md:p-6 p-4 mt-12 md:max-w-2xl">
      <div className="flex items-center mb-4 gap-8">
        <h2 className="text-lg">Vendor Email</h2>
        <div className="flex items-center gap-2">
          <span className="bg-gray-100 text-xs font-semibold text-gray-600 rounded p-1">
            {email?.slice(0, 2).toUpperCase()}
          </span>
          <p className="text-red-500">{email}</p>
        </div>
      </div>
      <div className="mb-4 space-y-2">
        <label htmlFor="message">Message</label>
        <textarea
          className="w-full border p-2 mb-4 rounded"
          rows={4}
          placeholder="enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button
        className="w-full"
        onClick={() => alert(`Email sent to ${email}`)}
      >
        Send message
      </Button>
    </div>
  );
}

export default function SendEmail() {
  return (
    <DashboardLayout>
      <Suspense fallback={<p className="p-4">Loading email form...</p>}>
        <SendEmailForm />
      </Suspense>
    </DashboardLayout>
  );
}
