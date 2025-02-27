"use client";

import FAQSection from "@/components/FAQSection";
import { CircleCheckBig } from "lucide-react";

interface PricingPlan {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  buttonText: string;
  dark: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Basic",
    subtitle: "Plan Member",
    price: "Free",
    features: [
      "lorem ipsumlorem ipsum",
      "lorem ipsumlorem ipsum",
      "lorem ipsumlorem ipsum",
      "lorem ipsumlorem ipsum",
    ],
    buttonText: "Get Started",
    dark: false,
  },
  {
    title: "Standard",
    subtitle: "Plan",
    price: "45k",
    features: [
      "lorem ipsumlorem ipsum",
      "lorem ipsumlorem ipsum",
      "lorem ipsumlorem ipsum",
      "lorem ipsumlorem ipsum",
    ],
    buttonText: "Get Started",
    dark: true,
  },
  {
    title: "Business",
    subtitle: "Plan",
    price: "95k",
    features: [
      "lorem ipsumlorem ipsum",
      "lorem ipsumlorem ipsum",
      "lorem ipsumlorem ipsum",
      "lorem ipsumlorem ipsum",
    ],
    buttonText: "Get Started",
    dark: false,
  },
];

interface PriceCardProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  buttonText: string;
  dark: boolean;
}

function PriceCard({
  title,
  subtitle,
  price,
  features,
  buttonText,
}: PriceCardProps) {
  return (
    <div
      className="px-10 py-8 rounded-lg shadow-md bg-white hover:bg-priceCard hover:text-white transition-colors duration-300 group"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h3 className="text-lg font-semibold text-gray-700 group-hover:text-white">
        {title}
      </h3>
      <p className="text-lg font-semibold text-gray-700 group-hover:text-white">
        {subtitle}
      </p>
      <p className="text-4xl font-bold mt-4">
        {price} <span className="text-lg font-normal">• Plan</span>
      </p>
      <button className="w-full mt-4 px-6 py-2 rounded-full border border-primary text-primary group-hover:border-white group-hover:text-white hover:bg-gray-600">
        {buttonText}
      </button>
      <ul className="mt-6 space-y-2 mb-8">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center text-sm font-light gap-2 py-1"
          >
            <CircleCheckBig className="text-primary group-hover:text-white" />{" "}
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="w-full md:mt-12 mt-8 py-16 px-6 md:px-16 bg-gray-50 mx-auto">
      <p
        className="text-sm font-light"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Professional Plans
      </p>
      <h2
        className="text-3xl md:text-4xl max-w-md font-semibold text-gray-900 text-left mb-8"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        Choose the <br />
        best plan for you
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-6 md:py-8">
        {pricingPlans.map((plan, index) => (
          <PriceCard key={index} {...plan} />
        ))}
      </div>
      <FAQSection
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      />
    </div>
  );
}
