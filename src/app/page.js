import dynamic from "next/dynamic";
import Home from "@/components/ImageSliderMain";

// Below-the-fold sections load after the hero — keeps first paint tiny
const CoreExpertiseSection = dynamic(
  () => import("@/components/CoreExpertiseSection"),
);
const ServicesSlider = dynamic(() => import("@/components/ServicesSlider"));
const AboutPetroLabsSection = dynamic(
  () => import("@/components/AboutPetroLabsSection"),
);
const AccreditationSection = dynamic(
  () => import("@/components/AccreditationSection"),
);
const CounterSection = dynamic(() => import("@/components/CounterSection"));
const TrainingCoursesSection = dynamic(
  () => import("@/components/TrainingCoursesSection"),
);
const TestimonialSection = dynamic(
  () => import("@/components/TestimonialSection"),
);
const BlogSection = dynamic(() => import("@/components/BlogSection"));

export const metadata = {
  title: "PetroLabs India Pvt. Ltd.",
  description:
    "Welcome to PetroLabs India. We supply world-class oil, fuel and fluid analysis instruments, and provide NABL accredited laboratory testing and industrial training.",
  openGraph: {
    title: "PetroLabs India | Reliable Diagnostics & Training",
    description:
      "Welcome to PetroLabs India. We supply world-class oil, fuel and fluid analysis instruments, and provide NABL accredited laboratory testing and industrial training.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

function Page() {
  return (
    <>
      <Home />
      <CoreExpertiseSection />
      <ServicesSlider />
      <AboutPetroLabsSection />
      <AccreditationSection />
      <CounterSection />
      <TrainingCoursesSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
}

export default Page;
