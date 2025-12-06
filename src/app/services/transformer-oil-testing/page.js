export const metadata = {
  title: "Transformer Oil Testing Services | NABL Accredited Lab | Petrolabs",
  description:
    "Petrolabs India Pvt. Ltd. offers NABL-accredited transformer oil testing. BDV, DGA, furan analysis, acidity, moisture & PCB testing as per IEC, ASTM & BIS standards. Ensure transformer reliability & safety.",
  keywords: [
    "transformer oil testing",
    "BDV testing",
    "dissolved gas analysis",
    "DGA testing lab India",
    "furan analysis",
    "PCB content testing",
    "NABL accredited transformer oil lab",
    "IEC transformer oil testing",
    "insulating oil analysis",
    "predictive maintenance transformers",
  ],
};

import Applications from "@/components/services/transformer/Applications";
import TestingParameters from "@/components/services/transformer/TestingParameters";
import TransformerCTA from "@/components/services/transformer/TransformerCTA";
import TransformerFAQ from "@/components/services/transformer/TransformerFAQ";
import TransformerHero from "@/components/services/transformer/TransformerHero";
import TransformerOverview from "@/components/services/transformer/TransformerOverview";
import TransformerWhyChoose from "@/components/services/transformer/TransformerWhyChoose";
import React from "react";

function page() {
  return (
    <>
      <TransformerHero />
      <TransformerOverview />
      <TestingParameters />
      <Applications />
      <TransformerWhyChoose />
      <TransformerFAQ />
      <TransformerCTA />
    </>
  );
}

export default page;
