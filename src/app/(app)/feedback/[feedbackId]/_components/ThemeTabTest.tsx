"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload } from "lucide-react";
import { useState } from "react";
import FormInteraction from "./FormInteraction";
// import FormInteraction from "./FormInteraction";

// interface ThemeTabProps {
//   theme: { backgroundColor: string; fontColor: string; fontSize: string };
//   setTheme: (theme: any) => void;
// }

export default function ThemeTab() {
  // { theme, setTheme }: ThemeTabProps
  const [selectedLayoutColor, setSelectedLayoutColor] = useState("");
  const [selectedTextColor, setSelectedTextColor] = useState("");
  const [selectedButtonColor, setSelectedButtonColor] = useState("");
  const [selectedButtonTextColor, setSelectedButtonTextColor] = useState("");

  return (
    <div className="flex md:flex-row flex-col gap-4">
      {/* Left Column */}
      <div className="md:w-1/4 w-full flex flex-col justify-between gap-3 bg-white border-r pt-2 px-4 h-scree overflow-y-auto">
        {/* title */}
        <div className="px-2 py-1.5 rounded-md border border-gray-300 bg-gray-100 flex justify-between items-center">
          <h2 className="text-gray-800">Theme color</h2>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-green-600 rounded-md"></div>
            <div className="w-5 h-5 bg-red-600 rounded-md"></div>
          </div>
        </div>

        {/* Brand logo */}
        <div className="px-2 py-1.5 rounded-md border flex justify-between items-center">
          <h2 className="text-gray-600 text-sm">Brand Logo</h2>
          <Upload size={16} />
        </div>

        {/* Background image */}
        <div className="px-2 py-1.5 rounded-md border flex justify-between items-center">
          <h2 className="text-gray-600 text-sm">Background image</h2>
          <Upload size={16} />
        </div>

        {/* Layout color */}
        <div className="pl-2 rounded-md border flex justify-between items-center">
          <h2 className="text-gray-600 text-sm shrink-0">Layout color</h2>
          <Select
            value={selectedLayoutColor}
            onValueChange={setSelectedLayoutColor}
          >
            <SelectTrigger className="relative w-16 shadow-none border-none focus:outline-none focus:ring-0">
              {/* <SelectValue
                className="text-gray-800"
                placeholder="Layout color"
              /> */}
              <div className=" top-2 right-8 w-5 h-5 bg-yellow-400 rounded-md"></div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select layout color</SelectLabel>
                <SelectItem value="yellow">
                  <div className=" top-2 right-8 w-5 h-5 bg-yellow-400 rounded-md"></div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Text color */}
        <div className="pl-2 rounded-md border flex justify-between items-center">
          <h2 className="text-gray-600 text-sm shrink-0">Text color</h2>
          <Select
            value={selectedTextColor}
            onValueChange={setSelectedTextColor}
          >
            <SelectTrigger className="relative w-16 shadow-none border-none focus:outline-none focus:ring-0">
              {/* <SelectValue className="text-gray-800" placeholder="Text color" /> */}
              <div className=" top-2 right-8 w-5 h-5 bg-yellow-400 rounded-md"></div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select text color</SelectLabel>
                <SelectItem value="yellow">
                  <div className=" top-2 right-8 w-5 h-5 bg-yellow-400 rounded-md"></div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Button color */}
        <div className="pl-2 rounded-md border flex justify-between items-center">
          <h2 className="text-gray-600 text-sm shrink-0">Button color</h2>
          <Select
            value={selectedButtonColor}
            onValueChange={setSelectedButtonColor}
          >
            <SelectTrigger className="relative w-16 shadow-none border-none focus:outline-none focus:ring-0">
              {/* <SelectValue
                className="text-gray-800"
                placeholder="Button color"
              /> */}
              <div className=" top-2 right-8 w-5 h-5 bg-yellow-400 rounded-md"></div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select button color</SelectLabel>
                <SelectItem value="yellow">Yellow</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Button text color */}
        <div className="pl-2 rounded-md border flex justify-between items-center">
          <h2 className="text-gray-600 text-sm shrink-0">Button text color</h2>
          <Select
            value={selectedButtonTextColor}
            onValueChange={setSelectedButtonTextColor}
          >
            <SelectTrigger className="relative w-16 shadow-none border-none focus:outline-none focus:ring-0">
              {/* <SelectValue
                className="text-gray-800"
                placeholder="Button text color"
              /> */}
              <div className=" top-2 right-8 w-5 h-5 bg-yellow-400 rounded-md"></div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select button text color</SelectLabel>
                <SelectItem value="yellow">Yellow</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Background choice color */}
        <div className="pl-2 rounded-md border flex justify-between items-center">
          <h2 className="text-gray-600 text-sm shrink-0">Background</h2>
          <Select
            value={selectedButtonTextColor}
            onValueChange={setSelectedButtonTextColor}
          >
            <SelectTrigger className="relative md:w-40 w-full shadow-none border-none focus:outline-none focus:ring-0">
              <SelectValue className="text-gray-800" placeholder="Color" />
              {/* <div className="absolute top-2 right-8 w-5 h-5 bg-yellow-400 rounded-md"></div> */}
            </SelectTrigger>
            <SelectContent className="">
              <SelectGroup>
                <SelectLabel>Select background</SelectLabel>
                <SelectItem value="color">Color</SelectItem>
                <SelectItem value="image">Image</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Right Column */}
      <FormInteraction />
    </div>
  );
}
