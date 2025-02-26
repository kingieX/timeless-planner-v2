import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Smart Event Planning",
    description:
      "Leverage AI-driven insights to streamline event coordination.",
  },
  {
    title: "Save Time & Effort",
    description: "Automate tasks and reduce manual workload significantly.",
  },
  {
    title: "Seamless Collaboration",
    description: "Coordinate with vendors, teams, and attendees effortlessly.",
  },
  {
    title: "Real-time Event Monitoring",
    description: "Track event progress and receive instant updates.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full md:py-16 py-8 bg-[#F5FAFF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Why Choose Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Our platform simplifies event management with smart, efficient, and
          easy-to-use tools.
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all flex items-start gap-4"
            >
              <CheckCircle className="w-10 h-10 text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
