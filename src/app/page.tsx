import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroSection from "./_components/HeroSection";
import FeaturesSection from "./_components/FeaturesSection";
import EventManagementSection from "./_components/EventManagementSection";
import EventCreationSection from "./_components/EventCreationSection";
import EasyVendorManagement from "./_components/EasyVendorManagement";
import AIFormsSection from "./_components/AIFormsSection";
import UseCasesSection from "./_components/UseCasesSection";
import IntegrationsSection from "./_components/IntegrationsSection";
import WhyChooseUs from "./_components/WhyChooseUs";
import TestimonialsSection from "./_components/TestimonialsSection";

// Feature data
const featureData = [
  {
    id: 1,
    text: "Event Creation & Management",
    description:
      "We are a trusted and accredited educational and migration services provider, offering counsel to students from all over the world.",
  },
  {
    id: 2,
    text: "Streamline Guest Management with Push Notifications",
    description:
      "We are a trusted and accredited educational and migration services provider, offering counsel to students from all over the world.",
  },
  {
    id: 3,
    text: "Vendor Management Made Easy",
    description:
      "We are a trusted and accredited educational and migration services provider, offering counsel to students from all over the world.",
  },
  {
    id: 4,
    text: "Built-In Communication",
    description:
      "We are a trusted and accredited educational and migration services provider, offering counsel to students from all over the world.",
  },
  {
    id: 5,
    text: "Gather Feedback or Opinion Using AI",
    description:
      "We are a trusted and accredited educational and migration services provider, offering counsel to students from all over the world.",
  },
  {
    id: 6,
    text: "Team Member Management",
    description:
      "We are a trusted and accredited educational and migration services provider, offering counsel to students from all over the world.",
  },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <main className="w-full flex flex-col py-8 sm:py-20 items-center">
        <Navbar />
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection
          title="All in one Features"
          description="Powerful tools designed to simplify event planning and management."
          features={featureData}
          imageSrc="/home/feature-image.png"
        />

        {/* EventManagementSection */}
        <EventManagementSection />

        {/* EventCreationSection */}
        <EventCreationSection />

        {/* EasyVendorManagement */}
        <EasyVendorManagement />

        {/* AIFormsSection */}
        <AIFormsSection />

        {/* UseCasesSection */}
        <UseCasesSection />

        {/* IntegrationsSection */}
        <IntegrationsSection />

        {/* WhyChooseUs */}
        <WhyChooseUs />

        {/* TestimonialsSection */}
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
