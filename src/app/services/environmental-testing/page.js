export const metadata = {
  title:
    "Environmental Testing Services | Air, Water, Soil, Noise Monitoring | NABL Accredited Lab",
  description:
    "Petrolabs India Pvt. Ltd. offers comprehensive Environmental Testing Services including Ambient Air Quality (CPCB NAAQS), Indoor Air Quality (NIOSH/OSHA), Stack Emission Monitoring, Noise & Vibration Monitoring, Water & Wastewater Analysis, Soil Testing, and Environmental Compliance Reporting. NABL-accredited laboratory for industries, construction, municipalities & infrastructure projects.",
  keywords: [
    "environmental testing services",
    "ambient air quality testing",
    "indoor air quality testing",
    "environment monitoring lab",
    "CPCB NAAQS monitoring",
    "NIOSH OSHA air testing",
    "stack emission monitoring",
    "noise and vibration monitoring",
    "water and wastewater testing",
    "soil testing laboratory",
    "environmental compliance testing",
    "NABL environmental lab India",
  ],
};

import AirCTA from "@/components/services/environment/AirCTA";
import AirHero from "@/components/services/environment/AirHero";
import AirTabs from "@/components/services/environment/AirTabs";
import React from "react";

function page() {
  return (
    <>
      <AirHero />
      <AirTabs />
      <AirCTA />
    </>
  );
}

export default page;
