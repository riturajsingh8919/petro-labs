import AboutStory from "@/components/aboutComponents/AboutStory";
import TeamExpertise from "@/components/aboutComponents/TeamExpertise";
import VisionMission from "@/components/aboutComponents/VisionMission";
import PageHeader from "@/components/PageHeader";
import React from "react";

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
