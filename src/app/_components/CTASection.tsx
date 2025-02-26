import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full py-16 text-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="w-full bg-gradient-to-r from-gray-100 to-[#5598C4] md:py-32 py-12 px-8 flex flex-col items-center text-left rounded-2xl">
          <div>
            <p className="text-sm md:text-lg">Trusted By 900K+ users</p>
            <h2 className="text-2xl text-gray-900 md:text-4xl font-bold">
              Ready to plan your First Event?
            </h2>
            <p className="text-2xl md:text-4xl font-bold mt-2">
              <span className="text-primary">Timeless Planner</span> would
              assist you.
            </p>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/signup"
              className="bg-primary text-white md:px-6 px-4 py-3 rounded-full shadow-md flex items-center justify-center gap-2 group hover:bg-opacity-80 transition"
            >
              <span>Get Started</span>
              <ArrowRight className="text-white transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/features"
              className="border border-primary text-primary md:px-8 px-4 py-3 rounded-full shadow-md hover:bg-gray-200 transition"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
