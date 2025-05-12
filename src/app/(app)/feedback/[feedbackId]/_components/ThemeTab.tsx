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
import { useRef } from "react";
import { useFormBuilder } from "@/context/FormBuilderContext";
import FormInteraction from "./FormInteraction";

export default function ThemeTab() {
  const { theme, setTheme } = useFormBuilder();

  const brandLogoInputRef = useRef<HTMLInputElement>(null);
  const backgroundImageInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: "brandLogo" | "backgroundImage"
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setTheme({ ...theme, [field]: fileUrl });
    }
  };

  return (
    <div className="flex md:flex-row flex-col items-start gap-4">
      {/* Left Column */}
      <div className="md:w-1/4 w-full flex flex-col justify-start gap-3 bg-white border-r pt-2 px-4 h-scree overflow-y-auto">
        {/* Theme color preview */}
        <div className="px-2 py-1.5 rounded-md border border-gray-300 bg-gray-100 flex justify-between items-center">
          <h2 className="text-gray-800">Theme color</h2>
          <div className="flex items-center gap-2">
            <div
              className="w-5 h-5 rounded-md"
              style={{ backgroundColor: theme.layoutColor }}
            ></div>
            <div
              className="w-5 h-5 rounded-md"
              style={{ backgroundColor: theme.textColor }}
            ></div>
          </div>
        </div>

        {/* Brand logo */}
        <div
          className="px-2 py-1.5 rounded-md border flex justify-between items-center cursor-pointer"
          onClick={() => brandLogoInputRef.current?.click()}
        >
          <h2 className="text-gray-600 text-sm">Brand Logo</h2>
          <Upload size={16} />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={brandLogoInputRef}
            onChange={(e) => handleFileUpload(e, "brandLogo")}
          />
        </div>

        {/* Background choice */}
        <div className="pl-2 rounded-md border flex justify-between items-center">
          <h2 className="text-gray-600 text-sm shrink-0">Background</h2>
          <Select
            value={theme.background}
            onValueChange={(value) => setTheme({ ...theme, background: value })}
          >
            <SelectTrigger className="relative md:w-40 w-full shadow-none border-none focus:outline-none focus:ring-0">
              <SelectValue placeholder="Background option" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select background</SelectLabel>
                <SelectItem value="color">Color</SelectItem>
                <SelectItem value="image">Image</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Background color */}
        {theme.background === "color" && (
          <div className="pl-2 rounded-md border flex justify-between items-center">
            <h2 className="text-gray-600 text-sm shrink-0">Background Color</h2>
            <input
              type="color"
              value={theme.backgroundColor || "#ffffff"}
              onChange={(e) =>
                setTheme({ ...theme, backgroundColor: e.target.value })
              }
              className="w-10 h-6 rounded"
            />
          </div>
        )}

        {/* Background image */}
        {theme.background === "image" && (
          <div
            className="px-2 py-1.5 rounded-md border flex justify-between items-center cursor-pointer"
            onClick={() => backgroundImageInputRef.current?.click()}
          >
            <h2 className="text-gray-600 text-sm">Background image</h2>
            <Upload size={16} />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={backgroundImageInputRef}
              onChange={(e) => handleFileUpload(e, "backgroundImage")}
            />
          </div>
        )}

        {/* Layout Color */}
        <div className="pl-2 rounded-md border flex justify-between items-center">
          <h2 className="text-gray-600 text-sm shrink-0">Layout color</h2>
          <input
            type="color"
            value={theme.layoutColor || "#facc15"}
            onChange={(e) =>
              setTheme({ ...theme, layoutColor: e.target.value })
            }
            className="w-10 h-6 rounded"
          />
        </div>

        {/* Text color */}
        <div className="pl-2 rounded-md border flex justify-between items-center">
          <h2 className="text-gray-600 text-sm shrink-0">Text color</h2>
          <input
            type="color"
            value={theme.textColor || "#000000"}
            onChange={(e) => setTheme({ ...theme, textColor: e.target.value })}
            className="w-10 h-6 rounded"
          />
        </div>

        {/* Button color */}
        <div className="pl-2 rounded-md border flex justify-between items-center">
          <h2 className="text-gray-600 text-sm shrink-0">Button color</h2>
          <input
            type="color"
            value={theme.buttonColor || "#facc15"}
            onChange={(e) =>
              setTheme({ ...theme, buttonColor: e.target.value })
            }
            className="w-10 h-6 rounded"
          />
        </div>

        {/* Button text color */}
        <div className="pl-2 rounded-md border flex justify-between items-center">
          <h2 className="text-gray-600 text-sm shrink-0">Button text color</h2>
          <input
            type="color"
            value={theme.buttonTextColor || "#000000"}
            onChange={(e) =>
              setTheme({ ...theme, buttonTextColor: e.target.value })
            }
            className="w-10 h-6 rounded"
          />
        </div>

        {/* Type face */}
        <div className="pl-2 rounded-md border flex justify-between items-center">
          <h2 className="text-gray-600 text-sm shrink-0">Type face</h2>
          <Select
            value={theme.typeFace}
            onValueChange={(value) => setTheme({ ...theme, typeFace: value })}
          >
            <SelectTrigger className="relative md:w-40 w-full shadow-none border-none focus:outline-none focus:ring-0">
              <SelectValue placeholder="Select type face" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Type Face</SelectLabel>
                <SelectItem value="Inter">Inter</SelectItem>
                <SelectItem value="Roboto">Roboto</SelectItem>
                <SelectItem value="Poppins">Poppins</SelectItem>
                <SelectItem value="Open Sans">Open Sans</SelectItem>
                <SelectItem value="Lato">Lato</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Text animation */}
        <div className="pl-2 rounded-md border flex justify-between items-center">
          <h2 className="text-gray-600 text-sm shrink-0">Text animation</h2>
          <Select
            value={theme.textAnimation}
            onValueChange={(value) =>
              setTheme({ ...theme, textAnimation: value })
            }
          >
            <SelectTrigger className="relative md:w-40 w-full shadow-none border-none focus:outline-none focus:ring-0">
              <SelectValue placeholder="Animation option" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select animation</SelectLabel>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="fade">Fade In</SelectItem>
                <SelectItem value="slide">Slide In</SelectItem>
                <SelectItem value="bounce">Bounce</SelectItem>
                <SelectItem value="zoom">Zoom In</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Text size */}
        <div className="pl-2 rounded-md border flex justify-between items-center">
          <h2 className="text-gray-600 text-sm shrink-0">Text size</h2>
          <Select
            value={theme.textSize}
            onValueChange={(value) => setTheme({ ...theme, textSize: value })}
          >
            <SelectTrigger className="relative md:w-40 w-full shadow-none border-none focus:outline-none focus:ring-0">
              <SelectValue placeholder="Select text size" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Text Size</SelectLabel>
                <SelectItem value="12px">Small</SelectItem>
                <SelectItem value="16px">Default</SelectItem>
                <SelectItem value="20px">Large</SelectItem>
                <SelectItem value="24px">Extra Large</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Button radius */}
        <div className="pl-2 rounded-md border flex justify-between items-center">
          <h2 className="text-gray-600 text-sm shrink-0">Button radius</h2>
          <Select
            value={theme.buttonRadius}
            onValueChange={(value) =>
              setTheme({ ...theme, buttonRadius: value })
            }
          >
            <SelectTrigger className="relative md:w-40 w-full shadow-none border-none focus:outline-none focus:ring-0">
              <SelectValue placeholder="Select button radius" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Button Radius</SelectLabel>
                <SelectItem value="0rem">None</SelectItem>
                <SelectItem value="0.25rem">Small</SelectItem>
                <SelectItem value="0.5rem">Medium</SelectItem>
                <SelectItem value="1rem">Large</SelectItem>
                <SelectItem value="9999px">Pill</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Background opacity */}
        <div className="pl-2 rounded-md border flex justify-between items-center">
          <h2 className="text-gray-600 text-sm shrink-0">Background opacity</h2>
          <Select
            value={theme.backgroundOpacity}
            onValueChange={(value) =>
              setTheme({ ...theme, backgroundOpacity: value })
            }
          >
            <SelectTrigger className="relative md:w-40 w-full shadow-none border-none focus:outline-none focus:ring-0">
              <SelectValue placeholder="Select opacity" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Opacity</SelectLabel>
                <SelectItem value="100%">100%</SelectItem>
                <SelectItem value="90%">90%</SelectItem>
                <SelectItem value="80%">80%</SelectItem>
                <SelectItem value="70%">70%</SelectItem>
                <SelectItem value="60%">60%</SelectItem>
                <SelectItem value="50%">50%</SelectItem>
                <SelectItem value="40%">40%</SelectItem>
                <SelectItem value="30%">30%</SelectItem>
                <SelectItem value="20%">20%</SelectItem>
                <SelectItem value="10%">10%</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Right Column (Live Preview) */}
      <FormInteraction />
    </div>
  );
}
