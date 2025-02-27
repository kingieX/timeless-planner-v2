import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import ContactSection from "./_components/ContactSection";
import FAQSection from "./_components/FAQSection";

const page = () => {
  return (
    <div>
      <Navbar />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default page;
