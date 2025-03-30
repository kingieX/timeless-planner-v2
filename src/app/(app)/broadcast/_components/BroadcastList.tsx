import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, ChevronRight } from "lucide-react";

const mockBroadcasts = [
  {
    tag: "Vip",
    event: "Dinner party",
    totalGuests: 100,
    message: "Thank you",
    status: "Sent",
  },
  {
    tag: "Platinum",
    event: "Dinner party",
    totalGuests: 100,
    message: "Thank you",
    status: "Sent",
  },
  {
    tag: "Platinum",
    event: "Dinner party",
    totalGuests: 100,
    message: "Thank you",
    status: "Sent",
  },
  {
    tag: "Topaz",
    event: "Dinner party",
    totalGuests: 100,
    message: "Thank you",
    status: "Sent",
  },
];

export default function BroadcastList() {
  return (
    <div className="py-6">
      <Card>
        <CardContent className="p-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b text-left text-gray-600">
                <th className="p-2">Tag</th>
                <th className="p-2">Total guest</th>
                <th className="p-2">Message</th>
                <th className="p-2">Status</th>
                <th className="p-2"></th>
                <th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              {mockBroadcasts.map((broadcast, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                >
                  <td className="p-2 font-medium">
                    {broadcast.tag}
                    <br />
                    <span className="text-gray-500 text-sm">
                      {broadcast.event}
                    </span>
                  </td>
                  <td className="p-2">{broadcast.totalGuests}</td>
                  <td className="p-2">{broadcast.message}</td>
                  <td className="p-2 text-green-600">{broadcast.status}</td>
                  <td className="relative p-2">
                    <Button
                      className="md:absolute top-4 right-6"
                      variant="ghost"
                      size="icon"
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                  </td>
                  <td className="p-2">
                    {/* <Button variant="ghost" size="icon"> */}
                    <ChevronRight className="w-4 h-4" />
                    {/* </Button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
