export const metadata = {
  title: "Coolant & DEF Testing Services | NABL Accredited Lab | Petrolabs",
  description:
    "Petrolabs India Pvt. Ltd. offers professional Coolant and DEF (Diesel Exhaust Fluid) testing services to ensure engine protection, corrosion control, and emission compliance. Analysis includes glycol %, contamination, pH, TBN, metals, urea purity (ISO 22241), and overall fluid health.",
  keywords: [
    "coolant testing",
    "DEF testing",
    "diesel exhaust fluid analysis",
    "ISO 22241 DEF testing",
    "engine coolant analysis",
    "ethylene glycol testing",
    "corrosion inhibitor testing",
    "coolant contamination testing",
    "DEF urea purity",
    "NABL accredited coolant testing lab",
    "automotive coolant testing",
    "industrial coolant analysis",
  ],
};

import CoolantCTA from "@/components/services/coolant/CoolantCTA";
import FAQ from "@/components/services/coolant/CoolantFAQ";
import CoolantHero from "@/components/services/coolant/CoolantHero";
import CoolantOverview from "@/components/services/coolant/CoolantOverview";
import TestingServices from "@/components/services/coolant/TestingServices";
import WhyTest from "@/components/services/coolant/WhyTest";
import React from "react";

function page() {
  return (
    <>
      <CoolantHero />
      <CoolantOverview />
      <TestingServices />
      <WhyTest />
      <FAQ />
      <CoolantCTA />
    </>
  );
}

export default page;
