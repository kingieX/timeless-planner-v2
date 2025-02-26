/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function IntegrationsSection() {
  return (
    <section className="w-full px-10 md:py-16 py-8 bg-[#ECF5FF] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-center relative z-10">
        <h2 className="text-sm md:text-xl font-bold text-gray-900 max-w-xl mx-auto">
          Yes, we integrate with all the tools you're already using, so you can
          run everything in one place.
        </h2>
      </div>

      <div className="w-full md:px-20">
        <Image
          src="/home/socials.png"
          alt="socials"
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>
    </section>
  );
}
