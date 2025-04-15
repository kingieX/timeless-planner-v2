"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Chrome } from "lucide-react";
import Image from "next/image";

type IntegrationItem = {
  name: string;
  logo: string;
  label: string;
};

const integrations: IntegrationItem[] = [
  {
    name: "MailChimp",
    logo: "/integrations/mailchimp.png",
    label: "Recommended",
  },
  {
    name: "Email Marketing",
    logo: "/integrations/email-marketing.png",
    label: "Recommended",
  },
  {
    name: "CRM System",
    logo: "/integrations/crm.png",
    label: "Recommended",
  },
  {
    name: "Aweber",
    logo: "/integrations/aweber.png",
    label: "Recommended",
  },
];

export default function IntegrationTab() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="text-xl font-semibold">Integration</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Connect your event with apps to automate workflows and enhance
          functionality.
        </p>
      </div>

      <div className="space-y-4">
        {integrations.map((integration, index) => (
          <Card
            key={index}
            className="flex items-center justify-between px-4 py-3"
          >
            <div className="flex items-center gap-4">
              <Image
                src={integration.logo}
                alt={integration.name}
                width={50}
                height={50}
                className="rounded-md"
              />
              <div>
                <p className="font-semibold">{integration.name}</p>
                <p className="text-sm text-muted-foreground">
                  {integration.label}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="text-sm border-none text-muted-foreground flex items-center gap-1"
              >
                Learnmore <ChevronDown className="w-4 h-4" />
              </Button>
              <Button className="bg-primary text-white">
                <Chrome /> Connect
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
