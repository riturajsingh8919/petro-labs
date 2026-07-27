import PageHeader from "@/components/PageHeader";
import ServicesGrid from "@/components/services/ServicesGrid";
import React from "react";

export const metadata = {
  title: "Testing & Analysis Services | PetroLabs India",
  description:
    "Comprehensive testing and analysis solutions for industries worldwide. Explore our NABL accredited services including Petroleum, Environmental, and Food testing.",
  openGraph: {
    title: "Testing & Analysis Services | PetroLabs India",
    description:
      "Comprehensive testing and analysis solutions for industries worldwide. Explore our NABL accredited services including Petroleum, Environmental, and Food testing.",
    url: "/services",
  },
  alternates: {
    canonical: "/services",
  },
};

function page() {
  return (
    <>
      <PageHeader tagline="Comprehensive testing and analysis solutions for industries worldwide" />
      <ServicesGrid />
    </>
  );
}

export default page;
