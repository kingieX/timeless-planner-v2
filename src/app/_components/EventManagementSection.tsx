import Image from "next/image";

const EventPlanningTips = () => {
  return (
    <section className=" border w-full flex flex-col md:flex-row items-center justify-between py-16 px-4 gap-8">
      {/* Image */}
      <div className="relative w-full md:w-2/5 md:bg-[#319AB5] flex md:justify-end">
        {/* <div className="absolute left-0 top-0 bg-[#319AB5] h-full rounded-tr -z-1"></div> */}
        <div className="flex justify-center md:justify-end w-full relative bg-gradient-to-r from-custom to-custom md:to-white">
          {/* Background Shape */}
          <Image
            src="/home/Essential.png"
            alt="Event Planning Tips"
            width={400}
            height={400}
            className="w-ful rounded-full"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <h2 className="md:text-4xl text-3xl max-w-sm font-bold text-gray-900 leading-tight">
          Essential Event Planning and <br />
          <span className="text-primary">Coordination Tips</span>
        </h2>
        <p className="text-gray-600 max-w-md mt-4">
          Learn the key strategies to streamline event planning, enhance
          coordination, and ensure success.
        </p>
      </div>
    </section>
  );
};

export default EventPlanningTips;
