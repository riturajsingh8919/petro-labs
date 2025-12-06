import AboutPetroLabsSection from "@/components/AboutPetroLabsSection";
import BlogSection from "@/components/BlogSection";
import CoreExpertiseSection from "@/components/CoreExpertiseSection";
import CounterSection from "@/components/CounterSection";
import Home from "@/components/ImageSliderMain";
import ServicesSlider from "@/components/ServicesSlider";
import TestimonialSection from "@/components/TestimonialSection";
import TrainingCoursesSection from "@/components/TrainingCoursesSection";
import React from "react";

function Page() {
  return (
    <>
      <Home />
      <CoreExpertiseSection />
      <ServicesSlider />
      <AboutPetroLabsSection />
      <CounterSection />
      <TrainingCoursesSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
}

export default Page;
