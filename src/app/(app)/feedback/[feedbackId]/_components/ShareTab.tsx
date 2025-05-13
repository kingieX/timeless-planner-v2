import React, { useRef } from "react";
import FormInteraction from "./FormInteraction";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const ShareTab = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const link = "https://myformapp.com/form/123456";

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value).then(() => {
        alert("Link copied to clipboard!");
      });
    }
  };

  return (
    <div className="flex md:flex-row flex-col gap-4 overflow-y-none">
      {/* Left Column */}
      <div className="md:w-1/4 w-full flex flex-col justify-start md:gap-4 bg-white border-r pt-2 px-4 overflow-y-auto">
        <div className="flex flex-col gap-2 mb-4">
          <Label className="text-sm font-semibold">Your Link</Label>
          <Input
            type="text"
            value={link}
            disabled
            ref={inputRef}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <Button
            variant="outline"
            onClick={handleCopy}
            className="border-none text-primary bg-gray-100"
          >
            Copy link
          </Button>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <h1 className="text-sm font-semibold">Share in</h1>
          <p className="text-gray-600 text-sm">
            Share your form link on any social media platform of your choice.
          </p>
          {/* socials */}
          <div className="flex gap-2 text-gray-600 p-2">
            <FaFacebookF size={24} />
            <BsTwitterX size={24} />
            <AiFillInstagram size={26} />
            <FaLinkedinIn size={26} />
          </div>
        </div>
      </div>
      {/* Right Column */}
      <FormInteraction />
    </div>
  );
};

export default ShareTab;
