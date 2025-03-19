import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dot, EllipsisVertical, Search, Star, Trash } from "lucide-react";
// import dynamic from "next/dynamic";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// const GoogleMap = dynamic(() => import("./GoogleMap"), {
//   ssr: false,
// });

const dummyVendors = [
  {
    name: "Cottage Medicare Hospital",
    rating: 5,
    reviews: 70,
    address: "18 Iwaya Rd, Yaba 101245, Lagos",
    openStatus: "Open 24 hours",
    phone: "0814 609 2019",
    location: { lat: 6.5095, lng: 3.3714 },
  },
  {
    name: "Crystal Specialist Hospital",
    rating: 4.7,
    reviews: 70,
    address: "148/150 Akowonjo Rd, 300001, Lagos",
    openStatus: "Open 24 hours",
    phone: "0814 609 2019",
    location: { lat: 6.5767, lng: 3.2946 },
  },
];

export default function SearchVendors() {
  const [search, setSearch] = useState("");
  const [vendors, setVendors] = useState(dummyVendors);

  const handleSearch = () => {
    // Placeholder for Google Business API
    setVendors(dummyVendors);
    console.log("Search for:", search);
  };

  return (
    <div className="flex flex-col p-4 mt-8">
      <div className="flex gap-4 mb-6 border-b pb-4">
        <div className="relative w-full md:max-w-xl">
          <Search size={20} className="absolute text-gray-600 top-2 left-2" />
          <Input
            placeholder="Search by vendor name, category, or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8"
          />
        </div>
        <Button onClick={handleSearch}>Search</Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          {vendors.map((vendor, index) => (
            <Card
              key={index}
              className="flex justify-between items-start p-4 hover:shadow-xl"
            >
              <div>
                <h2 className="text-gray-800 font-semibold mb-1">
                  {vendor.name}
                </h2>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-gray-400">{vendor.rating}</span>
                  <span className="text-yellow-500 flex">
                    {Array.from({ length: Math.floor(vendor.rating) }).map(
                      (_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="#facc15"
                          stroke="#facc15"
                        />
                      )
                    )}
                  </span>
                  <span className="ml-2">({vendor.reviews} reviews)</span>
                </div>
                <p className="text-gray-500 mt-2">{vendor.address}</p>
                <div className="flex gap-0 items-center">
                  <p className="text-green-600 mt-1">{vendor.openStatus}</p>
                  <Dot className="text-gray-600" />
                  <p className="text-gray-600 mt-1">{vendor.phone}</p>
                </div>
              </div>

              <div className="relative group">
                <DropdownMenu>
                  <DropdownMenuTrigger className="p-1 border rounded">
                    <EllipsisVertical size={20} className="text-gray-600" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Add vendor</DropdownMenuItem>
                    <DropdownMenuItem>Edit vendor</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash />
                      <span>Delete vendor</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </Card>
          ))}
        </div>

        <div className="w-full h-[600px]">
          {/* <GoogleMap vendors={vendors} /> */}
          <p className="italic mt-12 text-center">Map goes here...</p>
        </div>
      </div>
    </div>
  );
}
