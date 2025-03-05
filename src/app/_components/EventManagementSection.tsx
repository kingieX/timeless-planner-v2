import Image from "next/image";

const EventPlanningTips = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between py-16 px-4 gap-8">
      {/* Image */}
      <div
        className="relative w-full md:w-2/5 md:bg-[#319AB5] flex md:justify-end"
        data-aos="fade-left"
      >
        <div className="flex justify-center md:justify-end w-full relative bg-gradient-to-r from-custom to-custom md:to-white">
          <Image
            src="/home/Essential.png"
            alt="Event Planning Tips"
            width={400}
            height={400}
            className="w-full rounded-full"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <h2
          className="md:text-4xl text-3xl max-w-sm font-bold text-gray-900 leading-tight"
          data-aos="fade-right"
        >
          Essential Event Planning and <br />
          <span className="text-primary">Coordination Tips</span>
        </h2>
        <p
          className="text-gray-600 max-w-md mt-4"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Plan ahead, stay organized with TimelessPlanner, communicate
          effectively, track RSVPs, and always have a backup plan for a
          stress-free, successful event!
        </p>
      </div>
    </section>
  );
};

export default EventPlanningTips;
