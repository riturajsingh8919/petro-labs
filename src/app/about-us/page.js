import AboutStory from "@/components/aboutComponents/AboutStory";
import TeamExpertise from "@/components/aboutComponents/TeamExpertise";
import VisionMission from "@/components/aboutComponents/VisionMission";
import PageHeader from "@/components/PageHeader";
import React from "react";

export const metadata = {
  title: "About Us",
  description:
    "Learn about PetroLabs India's vision, mission, and our expert team. We are committed to providing precision in every test and confidence in every result.",
  openGraph: {
    title: "About PetroLabs India",
    description:
      "Learn about PetroLabs India's vision, mission, and our expert team. We are committed to providing precision in every test and confidence in every result.",
    url: "/about-us",
  },
  alternates: {
    canonical: "/about-us",
  },
};

function page() {
  return (
    <>
      <PageHeader tagline="“Precision in Every Test. Confidence in Every Result.”" />
      <VisionMission />
      <AboutStory />
      <TeamExpertise />
    </>
  );
}

export default page;
