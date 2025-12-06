export const metadata = {
  title:
    "RoHS & ELV Certification Testing Services | NABL Accredited Compliance Lab | Petrolabs",
  description:
    "Petrolabs India Pvt. Ltd. provides NABL-accredited RoHS and ELV certification testing services. We test for restricted substances including Lead, Mercury, Cadmium, Hexavalent Chromium, PBB, PBDE, and Phthalates as per EU RoHS (2011/65/EU) and ELV Directive (2000/53/EC). Advanced analysis using XRF, ICP-OES, ICP-MS, and GC-MS for electronics and automotive compliance.",
  keywords: [
    "RoHS certification",
    "RoHS testing lab India",
    "Restriction of Hazardous Substances",
    "IEC 62321 testing",
    "lead cadmium mercury testing",
    "RoHS 3 phthalates testing",
    "RoHS compliance lab",
    "ELV certification",
    "End of Life Vehicle testing",
    "automotive compliance lab India",
    "ELV Directive 2000/53/EC",
    "heavy metal testing automotive parts",
    "NABL ELV testing lab",
    "environmental compliance testing",
  ],
};

import CertificationTabs from "@/components/services/rohs/CertificationTabs";
import RoHSCTA from "@/components/services/rohs/RoHSCTA";
import RoHSHero from "@/components/services/rohs/RoHSHero";
import React from "react";

function page() {
  return (
    <>
      <RoHSHero />
      <CertificationTabs />
      <RoHSCTA />
    </>
  );
}

export default page;
