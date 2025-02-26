import {
  ShieldCheck,
  Clock,
  Users,
  CheckCircle,
  Layers,
  Award,
} from "lucide-react";

const benefits = [
  {
    title: "Secure & Reliable",
    description:
      "We ensure top-notch security and reliability for your event management.",
    icon: <ShieldCheck className="text-white w-6 h-6" />,
  },
  {
    title: "Save Time and  Effort",
    description:
      "With TimelessPlanner, everything you need is in one place. From setting event details to managing tasks, guests, and vendors, the platform eliminates the need for multiple tools, saving you time and effort.",
    icon: <Clock className="text-white w-6 h-6" />,
  },
  {
    title: "User-Friendly",
    description:
      "An intuitive interface that makes event management easy for everyone.",
    icon: <Users className="text-white w-6 h-6" />,
  },
  {
    title: "Verified & Trusted",
    description:
      "Thousands of successful events managed with positive user feedback.",
    icon: <CheckCircle className="text-white w-6 h-6" />,
  },
  {
    title: "All-in-one Event Planning tool",
    description:
      "Connect with the tools you already use for a smooth experience.",
    icon: <Layers className="text-white w-6 h-6" />,
  },
  {
    title: "Award-Winning Service",
    description:
      "Recognized globally for excellent event management solutions.",
    icon: <Award className="text-white w-6 h-6" />,
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-cente">
        <h2 className="text-sm font-semibold text-[#42CEF2]">Benefits</h2>
        <p className="text-2xl text-primary font-semibold mt-2">
          Why Choose Us
        </p>

        {/* Grid Layout */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg flex flex-col items-start gap-4 transition-all duration-300
        ${
          index % 2 === 0
            ? "bg-white md:bg-gray-100"
            : "bg-gray-100 md:bg-white"
        }
      `}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded bg-primary flex items-center justify-center">
                {benefit.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
