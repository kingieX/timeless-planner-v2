import { Check } from "lucide-react";
import Image from "next/image";

const vendorFeatures = [
  {
    title: "Google Business Integration",
    description:
      "Search and select vendors directly from Google, saving time and ensuring you find the best options for your event.",
  },
  {
    title: "Manual Vendor Entry",
    description:
      "Add vendor details manually—name, industry, contact info, and address—so you have everything in one place for quick reference.",
  },
  {
    title: " Direct Vendor Communication",
    description:
      "Contact vendors seamlessly through the app via email, WhatsApp, or SMS, making coordination fast and efficient.",
  },
];

export default function EasyVendorManagement() {
  return (
    <section className="w-full md:py-16 py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-16">
        {/* Left Side - Image Mockup */}
        <div className="md:w-1/2">
          <Image
            src="/home/vendor-management.png"
            alt="Vendor Management UI"
            width={600}
            height={400}
            className=""
          />
        </div>

        {/* Right Side - Features */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-3xl md:text-left text-center max-w-lg font-bold text-gray-900">
            Easy Vendor Management
            <br />
            Find, Connect, Manage Vendors
          </h2>
          <div className="space-y-4">
            {vendorFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-4 border border-gray-100 max-w-md rounded-lg bg-white flex items-center gap-4 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary group"
              >
                <div className="flex items-start gap-2">
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
      </div>
    </section>
  );
}
