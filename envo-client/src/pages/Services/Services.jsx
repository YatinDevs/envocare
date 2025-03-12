import React from "react";
import AboutDetailSection from "../Aboutus/AboutDetailSection";
import CTA from "./CTA";
import WeServe from "./WeServe";
import ServiceHeroSection from "./ServiceHeroSection";

function Services() {
  return (
    <div>
      <ServiceHeroSection />
      <AboutDetailSection />
      <WeServe />
      <CTA />
    </div>
  );
}

export default Services;
