import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import PricingPage from "./_components/PricingPage";

const page = () => {
  return (
    <div>
      <Navbar />
      <PricingPage />
      <Footer />
    </div>
  );
};

export default page;
