import React from "react";
import DashboardLayout from "../dashboard/layout";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Clipboard, Info, Repeat } from "lucide-react";

const page = () => {
  return (
    <DashboardLayout>
      <div className="py-8 mt-4 bg-white">
        <div className="mb-8">
          <h2 className="md:text-2xl text-xl text-gray-900 font-semibold">
            Custom domain
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Hey there! Want to customize the updates you get? Just tweak your
            domain settings to match your preferences.
          </p>
        </div>

        <div className="md:pt-8 pt-4">
          <RadioGroup>
            <div className="mb-4">
              <div className="flex items-start space-x-2 mb-2">
                <RadioGroupItem value="timeless-subdomain" id="r1" />
                <div>
                  <Label htmlFor="r1">Timeless subdomain</Label>
                  <p className="text-gray-600 text-sm max-w-5xl">
                    Elevate your online presence with a personalized Mygripaform
                    subdomain. Customize your URL to reflect your brand and
                    ensure it sticks with your audience.
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-center md:items-center gap-4">
                <Input placeholder="company name" />
                <Button>Save</Button>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="custom-domain" id="r2" />
                <div>
                  <Label htmlFor="r2">Custom domain</Label>
                  <p className="text-gray-600 text-sm max-w-5xl">
                    Use your own web address to host forms, giving your brand a
                    more professional and personalized touch.
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-center md:items-center gap-4">
                <Input placeholder="custom domain" />
                <Button>Update</Button>
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* Verification */}
        <div className="flex flex-col justify-start gap-2 bg-[#ECECEC] rounded p-4">
          <div className="w-fit bg-white p-2 rounded border border-gray-300 flex items-center text-yellow-600 space-x-2">
            <Info size={20} />
            <p>Pending Verification</p>
            <span className="text-gray-300">|</span>
            <Repeat size={20} />
          </div>
          <p className="text-sm">
            Please set the following TXT on{" "}
            <a
              className="text-primary hover:underline"
              href="http://praveenjuge.com"
            >
              praveenjuge.com
            </a>
          </p>
          <div className="flex md:flex-row flex-col md:items-center gap-4 py-2">
            <div className="flex flex-col">
              <p className="text-gray-600">Type</p>
              <p className="text-sm">TXT</p>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-600">Name</p>
              <div className="flex items-center gap-2">
                <p className="text-sm">Gripaform</p>
                <Clipboard size={20} className="text-gray-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-600">Value</p>
              <div className="flex items-center gap-2">
                <p className="text-sm">
                  domain-verify=praveenjuge.com,968578a4c
                </p>
                <Clipboard size={20} className="text-gray-500" />
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            To verify domain ownership, please add the following DNS record to
            your domain’s configuration. This TXT record is crucial for
            completing the setup process and does not affect your current email
            or website services
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default page;
