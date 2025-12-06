export const metadata = {
  title:
    "Metallography Testing Services | Microstructure & Weld Analysis | Petrolabs India",
  description:
    "Petrolabs India Pvt. Ltd. offers NABL-accredited metallography testing services including microstructure analysis, macrostructure examination, weld profile inspection, grain size (ASTM E112), coating thickness, inclusion rating, carburization/decarburization studies, case depth measurement, and failure analysis for metals and alloys.",
  keywords: [
    "metallography testing",
    "metallurgical lab India",
    "microstructure analysis",
    "macrostructure analysis",
    "weld profile testing",
    "depth of penetration testing",
    "grain size ASTM E112",
    "coating thickness measurement",
    "failure analysis metals",
    "non-metallic inclusion rating ASTM E45",
    "carburization decarburization analysis",
    "case depth measurement",
    "metal defect analysis",
    "heat treatment condition assessment",
  ],
};

import Applications from "@/components/services/metallography/Applications";
import Industries from "@/components/services/metallography/Industries";
import MetallographyCTA from "@/components/services/metallography/MetallographyCTA";
import FAQ from "@/components/services/metallography/MetallographyFAQ";
import MetallographyHero from "@/components/services/metallography/MetallographyHero";
import MetallographyOverview from "@/components/services/metallography/MetallographyOverview";
import TestingParameters from "@/components/services/metallography/TestingParameters";
import React from "react";

function page() {
  return (
    <>
      <MetallographyHero />
      <MetallographyOverview />
      <TestingParameters />
      <Applications />
      <Industries />
      <FAQ />
      <MetallographyCTA />
    </>
  );
}

export default page;
