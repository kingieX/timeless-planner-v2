"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How does the payment plan work?",
    answer:
      "Our payment plan allows you to choose flexible options based on your needs. You can pay monthly or annually with no hidden fees.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial with full access to all features. No credit card required.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely! You can cancel your subscription at any time without any penalties.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, our support team is available 24/7 to assist you via email or live chat.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="w-full py-16 px-6 md:px-12 max-w-7xl mx-auto"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-left mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
            data-aos="fade-up"
          >
            <div className="flex justify-between items-center py-3">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 font-medium border rounded-full p-2">
                  0{index + 1}
                </span>
                <span className="text-lg text-gray-900 font-medium">
                  {faq.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === index && (
              <p
                className="text-gray-600 text-sm mt-2 ml-10"
                data-aos="fade-in"
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
