import AboutPetroLabsSection from "@/components/AboutPetroLabsSection";
import BlogSection from "@/components/BlogSection";
import CoreExpertiseSection from "@/components/CoreExpertiseSection";
import CounterSection from "@/components/CounterSection";
import Home from "@/components/ImageSliderMain";
import ServicesSlider from "@/components/ServicesSlider";
import TestimonialSection from "@/components/TestimonialSection";
import TrainingCoursesSection from "@/components/TrainingCoursesSection";
import AccreditationSection from "@/components/AccreditationSection";
import React from "react";

export const metadata = {
  title: "PetroLabs India Pvt. Ltd.",
  description:
    "Welcome to PetroLabs India. We supply world-class oil, fuel and fluid analysis instruments, and provide NABL accredited laboratory testing and industrial training.",
  openGraph: {
    title: "PetroLabs India | Reliable Diagnostics & Training",
    description:
      "Welcome to PetroLabs India. We supply world-class oil, fuel and fluid analysis instruments, and provide NABL accredited laboratory testing and industrial training.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

function Page() {
  return (
    <>
      <Home />
      <CoreExpertiseSection />
      <ServicesSlider />
      <AboutPetroLabsSection />
      <AccreditationSection />
      <CounterSection />
      <TrainingCoursesSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
}

export default Page;
