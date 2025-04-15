"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import Image from "next/image";

const BillingTab = () => {
  return (
    <div className="space-y-6 p-6">
      {/* Plan Summary */}
      <Card className="flex items-center justify-between p-4">
        <div>
          <p className="text-sm text-muted-foreground">Plan</p>
          <p className="font-semibold">Standard</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Payment</p>
          <p className="font-semibold">
            $29.99 <span className="font-normal text-sm">per month</span>
          </p>
        </div>
        <div className="flex items-center gap-">
          <Button variant="ghost" className="text-gray-500 hover:text-red-400">
            Cancel subscription
          </Button>
          <Button variant="link" className="text-primary">
            Upgrade
          </Button>
        </div>
      </Card>

      {/* Payment Method Section */}
      <Card className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">Payment method</p>
            <p className="text-sm text-muted-foreground">
              Update your plan payment details.
            </p>
          </div>
          <Button variant="link" className="text-muted-foreground">
            ✕
          </Button>
        </div>

        {/* Payment Option 1 */}
        <div className="border rounded-md p-4 flex justify-between items-center bg-muted/20">
          <div className="flex items-center gap-4">
            <Image src="/billing/visa.png" alt="Visa" width={40} height={30} />
            <div>
              <p className="font-medium">Visa ending in 1234</p>
              <p className="text-sm text-muted-foreground">
                Up to 10 users and 20GB individual data.
              </p>
              <div className="text-sm text-muted-foreground mt-1 space-x-4">
                <button className="hover:underline">Set as default</button>
                <button className="hover:underline">Edit</button>
              </div>
            </div>
          </div>
          <div className="w-4 h-4 rounded-full border border-gray-400 bg-primary"></div>
        </div>

        {/* Payment Option 2 */}
        <div className="border rounded-md p-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/billing/mastercard.png"
              alt="Mastercard"
              width={40}
              height={30}
            />
            <div>
              <p className="font-medium">Mastercard ending in 1234</p>
              <p className="text-sm text-muted-foreground">
                Up to 20 users and 40GB individual data.
              </p>
              <div className="text-sm text-muted-foreground mt-1 space-x-4">
                <button className="hover:underline">Set as default</button>
                <button className="hover:underline">Edit</button>
              </div>
            </div>
          </div>
          <div className="w-4 h-4 rounded-full border border-gray-400"></div>
        </div>

        {/* Add Method */}
        <div className="text-sm text-muted-foreground text-right">
          <button className="hover:underline">+ Add payment method</button>
        </div>
      </Card>

      {/* Billing Contact */}
      <Card className="p-4 space-y-2">
        <p className="font-semibold">Billing contact</p>
        <p className="text-sm text-muted-foreground">
          Add a second billing contact email.
        </p>

        <div className="flex items-center gap-2 mt-2">
          <div className="bg-muted rounded-md p-2">
            <Mail className="w-5 h-5 text-muted-foreground" />
          </div>
          <Input
            type="email"
            value="accounts@untitledui.com"
            readOnly
            className="bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
          />
        </div>
      </Card>
    </div>
  );
};

export default BillingTab;
