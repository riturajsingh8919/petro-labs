export const metadata = {
  title:
    "Water Testing Services | NABL Accredited Lab | Drinking, Industrial & Wastewater Analysis – Petrolabs",
  description:
    "Petrolabs India Pvt. Ltd. offers NABL-accredited water testing services including drinking water (IS 10500), packaged water (IS 14543/IS 13428), industrial water, wastewater & effluent testing as per BIS, CPCB & APHA standards. Comprehensive physical, chemical & microbiological analysis for safe, compliant water quality.",
  keywords: [
    "water testing services",
    "drinking water testing IS 10500",
    "packaged drinking water testing IS 14543",
    "mineral water testing IS 13428",
    "industrial water analysis",
    "wastewater testing",
    "effluent testing CPCB",
    "microbiological water testing",
    "NABL accredited water testing lab",
    "BIS water quality testing",
    "STP water testing",
    "ETP water testing",
    "boiler water testing",
    "cooling tower water testing",
    "irrigation water testing",
    "construction water testing",
  ],
};

import WaterServicesGrid from "@/components/services/water/WaterServicesGrid";
import WaterTestingHero from "@/components/services/water/WaterTestingHero";
import React from "react";

function page() {
  return (
    <>
      <WaterTestingHero />
      <WaterServicesGrid />
    </>
  );
}

export default page;
