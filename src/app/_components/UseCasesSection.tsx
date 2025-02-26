import Image from "next/image";

const useCases = [
  {
    title: "Anyone organizing an event",
    description:
      "Weather it’s a birthday, virtual meetup, or social gathering, TimeslessPlanner makes planning simple, fast, and efficient",
    image: "/home/conference.png",
  },
  {
    title: "Wedding & Party Planners",
    description:
      "Effortlessly track guest list, vendors, RSVPs, and timelines to create unforgettable celebrations.",
    image: "/home/wedding.png",
  },
  {
    title: "Event Planners & Coordinators",
    description:
      "Manage multiple events, streamline vendor communication, and ensure everything runs smoothly from start to finish.",
    image: "/home/festival.png",
  },
  {
    title: "Business owners & Corporate Teams ",
    description:
      "Plan conferences, meetings, &ncompany events with a structured workflow, task assignments, & real time collaboration.",
    image: "/home/networking.png",
  },
  {
    title: "Organization & Nonprofits",
    description:
      "Plan fundraisers, networking events, and community programs with easy guest management, automated notifications, and task delegation",
    image: "/home/fundraiser.png",
  },
  {
    title: "Entrepreneurs & Freelancers ",
    description:
      "Keep projects, tasks, and client events organized in one place, ensuring deadlines are met without hassle",
    image: "/home/birthday.png",
  },
];

export default function UseCasesSection() {
  return (
    <section className="w-full md:py-16 py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Use Cases
        </h2>
        <p className="text-gray-600 max-w-5xl mx-auto mt-2">
          Timeless planner is built for individuals, business owners and
          corporate organizations who wants to simplify event planning, manage
          tasks effortlessly, and execute projects with ease. Weather youre
          planning a small gathering or a large coporatre event, this tool helps
          you stay organized and stress free
        </p>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all"
            >
              <Image
                src={useCase.image}
                alt={useCase.title}
                width={400}
                height={250}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  {useCase.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
