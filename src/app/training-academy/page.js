import TrainingAcademyHero from "@/components/training-academy/TrainingAcademyHero";
import WhyPetrolabs from "@/components/training-academy/WhyPetrolabs";
import TrainingTracks from "@/components/training-academy/TrainingTracks";
import TrainingFormat from "@/components/training-academy/TrainingFormat";
import LearningOutcomes from "@/components/training-academy/LearningOutcomes";
import CareerPathways from "@/components/training-academy/CareerPathways";
import WeeklySchedule from "@/components/training-academy/WeeklySchedule";
import CareerSupport from "@/components/training-academy/CareerSupport";
import FAQSection from "@/components/training-academy/FAQSection";
import EnrollmentCTA from "@/components/training-academy/EnrollmentCTA";
import TableOfContents from "@/components/training-academy/TableOfContents";

export const metadata = {
  title:
    "Lab Analyst & QC Training Academy | B.Sc, B.Pharm, Diploma, ITI | Petrolabs",
  description:
    "Hands-on industrial training for B.Sc, M.Sc, B.Pharm & M.Pharm graduates. Learn on NABL-accredited labs with GC-MS/MS, HPLC, ICP-OES, AAS. Job-ready QC/QA analyst training with career support.",
  keywords:
    "lab analyst training, QC training India, NABL lab training, GC-MS training, HPLC training, pharma QC training, BSc chemistry jobs, lab analyst career, analytical chemistry course, Petrolabs training academy",
  openGraph: {
    title: "Petrolabs Training Academy - Build Your Career as a Lab Analyst",
    description:
      "Hands-on training on real instruments. NABL-accredited labs. Job-ready programs for QC/QA analyst roles.",
    type: "website",
    images: ["/training/academy-hero.jpg"],
  },
};

export default function TrainingAcademyPage() {
  return (
    <div className="bg-white scroll-smooth">
      <TableOfContents />

      <div id="hero">
        <TrainingAcademyHero />
      </div>

      <div id="why-petrolabs">
        <WhyPetrolabs />
      </div>

      <div id="training-tracks">
        <TrainingTracks />
      </div>

      <div id="training-format">
        <TrainingFormat />
      </div>

      <div id="learning-outcomes">
        <LearningOutcomes />
      </div>

      <div id="career-pathways">
        <CareerPathways />
      </div>

      <div id="weekly-schedule">
        <WeeklySchedule />
      </div>

      <div id="career-support">
        <CareerSupport />
      </div>

      <div id="faqs">
        <FAQSection />
      </div>

      <div id="enrollment">
        <EnrollmentCTA />
      </div>
    </div>
  );
}
