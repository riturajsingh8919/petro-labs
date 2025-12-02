import ContactCTA from "@/components/services/petroleum/ContactCTA";
import FAQ from "@/components/services/petroleum/FAQ";
import PetroleumHero from "@/components/services/petroleum/PetroleumHero";
import PetroleumOverview from "@/components/services/petroleum/PetroleumOverview";
import TestingServices from "@/components/services/petroleum/TestingServices";
import WhyChoose from "@/components/services/petroleum/WhyChoose";

export const metadata = {
  title:
    "Petroleum Products & Lubricants Testing | Oils, Fuels, Greases | Petrolabs",
  description:
    "NABL-accredited petroleum product & lubricant testing services. Accurate analysis of oils, fuels, greases, AdBlue, coolants, thermic fluids & quenching oils. BIS, ASTM & ISO compliant.",
  keywords: [
    "petroleum testing",
    "lubricant testing",
    "fuel quality testing",
    "grease testing",
    "AdBlue testing",
    "DEF testing",
    "coolant testing",
    "metalworking fluid testing",
    "thermic fluid testing",
    "quenching oil testing",
    "oil analysis India",
    "NABL accredited lab",
  ],
};

export default function Page() {
  return (
    <>
      <PetroleumHero />
      <PetroleumOverview />
      <TestingServices />
      <WhyChoose />
      <FAQ />
      <ContactCTA />
    </>
  );
}
