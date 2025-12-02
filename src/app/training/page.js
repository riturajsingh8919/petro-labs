import PageHeader from "@/components/PageHeader";
import TrainingHero from "@/components/training/TrainingHero";
import WhyChooseUs from "@/components/training/WhyChooseUs";
import TrainingPrograms from "@/components/training/TrainingPrograms";
import WhoCanJoin from "@/components/training/WhoCanJoin";
import EnrollCTA from "@/components/training/EnrollCTA";

export const metadata = {
  title:
    "Petrolabs Training Academy | Analytical Chemistry & Lubrication Courses",
  description:
    "Petrolabs Training Academy offers industrial training in GC-MS/MS, ICP-OES, HPLC, AAS, GC, chemistry, oil analysis, ferrography, CBM, lubrication & ICML certifications. Hands-on, industry-focused courses.",
  keywords:
    "industrial training petrolabs, analytical chemistry training, lubrication training, ICML courses India, oil analysis training, HPLC training, GC-MS training, ICP-OES training, MLA certification training",
};

export default function TrainingPage() {
  return (
    <div className="bg-white">
      <PageHeader
        tagline={
          "Professional training in analytical chemistry, lubrication, and reliability engineering"
        }
      />
      <TrainingHero />
      <WhyChooseUs />
      <TrainingPrograms />
      <WhoCanJoin />
      <EnrollCTA />
    </div>
  );
}
