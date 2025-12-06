export const metadata = {
  title:
    "Mechanical Testing & Chemical Analysis of Metals | NABL Accredited Metallurgical Lab | Petrolabs",
  description:
    "Petrolabs India Pvt. Ltd. offers NABL-accredited Mechanical Testing and Chemical Analysis of Metals. Services include tensile, impact, hardness, weld testing, fastener testing, OES chemical analysis, alloy identification, and trace element detection as per ASTM, ISO, BIS, DIN & EN standards. Ideal for automotive, aerospace, oil & gas, construction, and manufacturing industries.",
  keywords: [
    "mechanical testing services",
    "tensile testing lab",
    "impact testing Charpy Izod",
    "hardness testing Rockwell Brinell Vickers",
    "weld testing ASME Sec IX",
    "fastener testing lab",
    "metallurgical testing lab India",
    "chemical analysis of metals",
    "OES testing lab India",
    "ferrous alloy analysis",
    "aluminium alloy testing",
    "copper alloy analysis",
    "nickel alloy testing",
    "zinc alloy analysis",
    "titanium alloy analysis",
    "ASTM metal testing",
    "NABL accredited metallurgical lab",
  ],
};

import MechanicalCTA from "@/components/services/mechanical/MechanicalCTA";
import MechanicalHero from "@/components/services/mechanical/MechanicalHero";
import TestingTabs from "@/components/services/mechanical/TestingTabs";
import React from "react";

function page() {
  return (
    <>
      <MechanicalHero />
      <TestingTabs />
      <MechanicalCTA />
    </>
  );
}

export default page;
