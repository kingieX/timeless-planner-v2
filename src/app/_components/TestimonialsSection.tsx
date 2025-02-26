"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Jane Doe",
    comment:
      "This platform has made event planning so much easier for us! Overall, this service has been a life-changer for me. It has revolutionized freedom.",
    image: "/home/customer.png",
    rating: 5,
  },
  {
    name: "John Smith",
    comment:
      "Fantastic features and seamless integration with my workflow. This service has been a life-changer for me.",
    image: "/home/customer.png",
    rating: 4,
  },
  {
    name: "Emily Brown",
    comment: "I love how intuitive and user-friendly the interface is!",
    image: "/home/customer.png",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    if (index < testimonials.length - 1) setIndex(index + 1);
  };

  const prevTestimonial = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="w-full py-16 text-center" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="bg-gray-100 py-12 px-8 shadow-lg rounded-lg text-center flex flex-col">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <div className="flex md:flex-row flex-col md:gap-4 justify-center">
            {/* Profile Image */}
            <Image
              src={testimonials[index].image}
              alt={testimonials[index].name}
              width={80}
              height={80}
              className="w-20 h-24 rounded mb-4"
              data-aos="fade-right"
            />

            <div data-aos="fade-left">
              {/* Comment */}
              <p className="text-left text-gray-600 max-w-xl text-sm font-light">
                {testimonials[index].comment}
              </p>

              <div className="flex justify-between items-center">
                <div className="flex flex-col items-start">
                  {/* Name */}
                  <h4 className="mt-4 font-semibold text-gray-900">
                    {testimonials[index].name}
                  </h4>

                  {/* Star Rating */}
                  <div className="flex mt-2">
                    {[...Array(testimonials[index].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-primary w-5 h-5"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between gap-4" data-aos="fade-in">
                  {/* Left Arrow */}
                  <button
                    onClick={prevTestimonial}
                    disabled={index === 0}
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-all
                ${
                  index > 0
                    ? "bg-primary text-white hover:bg-primary/70"
                    : "bg-gray-100 text-gray-500"
                }`}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={nextTestimonial}
                    disabled={index === testimonials.length - 1}
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-all
                ${
                  index < testimonials.length - 1
                    ? "bg-primary text-white hover:bg-primary/70"
                    : "bg-gray-100 text-gray-500"
                }`}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
