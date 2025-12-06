import PageHeader from "@/components/PageHeader";
import ServicesGrid from "@/components/services/ServicesGrid";
import React from "react";

function page() {
  return (
    <>
      <PageHeader tagline="Comprehensive testing and analysis solutions for industries worldwide" />
      <ServicesGrid />
    </>
  );
}

export default page;
