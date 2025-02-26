import { Check } from "lucide-react";
import Image from "next/image";

const feedbackFeatures = [
  {
    title: "Guest Opinions Collection",
    description:
      "Easily collect detailed feedback on events or tasks, helping you improve and tailor future experiences.",
  },
  {
    title: "Fully Customizable Questions",
    description:
      "Design your forms to ask the right questions and create a flow that aligns with your needs.",
  },
  {
    title: " Dynamic Design Flow",
    description:
      "Create personalized, conversational experiences that engage respondents and encourage thoughtful answers.",
  },
];

export default function AIFormsSection() {
  return (
    <section className="w-full md:py-16 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Features */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-3xl md:text-left text-center max-w-lg font-bold text-gray-900">
            AI-Driven Feedback Forms <br />
            Collect Insights and Customize Your Flow
          </h2>
          <div className="space-y-4">
            {feedbackFeatures.map((feature, index) => (
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

        {/* Right Side - Image Mockup */}
        <div className="md:w-1/2">
          <Image
            src="/home/ai-feedback.png"
            alt="AI Feedback Forms"
            width={600}
            height={400}
            className=""
          />
        </div>
      </div>
    </section>
  );
}
