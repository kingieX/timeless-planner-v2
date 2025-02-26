import { Check } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Quick & Easy Event Setup",
    description:
      "Create events in minutes by adding key details like name, date, time, location, and industry. Whether virtual or physical, set up everything seamlessly.",
  },
  {
    title: "Smart Guest List Management",
    description:
      "Upload guest lists manually or via CSV, assign tags for better organization, and keep track of attendees effortlessly.",
  },
  {
    title: "Seamless RSVP & Notifications",
    description:
      "Send invites through SMS, WhatsApp, or email, manage confirmations, and track responses—all from one interface.",
  },
];

export default function EventCreationSection() {
  return (
    <section className="w-full md:py-16 py-8 bg-[#A0E6F8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Features */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-3xl md:text-left text-center max-w-md font-bold text-gray-900">
            Effortless Event Creation & Management Streamline Your Event
            Planning
          </h2>
          {/* <p className="text-gray-600 text-lg">
            Streamline your event planning with powerful tools designed for ease
            and efficiency.
          </p> */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-4 border border-gray-100 max-w-md rounded-lg bg-white flex items-center gap-4 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary group"
              >
                <div className="flex items-start justify-center gap-2">
                  <Check className="text-[#319AB5] w-8 h-6 bg-teal-50 rounded p-1" />
                  <div>
                    <h3 className="text-lg text-gray-900 font-semibold group-hover:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-white">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image Mockup */}
        <div className="md:w-1/2">
          <Image
            src="/home/Event-creation.png"
            alt="Event Management UI"
            width={600}
            height={400}
            className=""
          />
        </div>
      </div>
    </section>
  );
}
