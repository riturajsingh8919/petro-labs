import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactInfo from "@/components/contact/ContactInfo";
import LocationMap from "@/components/contact/LocationMap";
import PageHeader from "@/components/PageHeader";
import React from "react";

export const metadata = {
  title: "Contact Petrolabs | NABL Accredited Testing Laboratory | Get a Quote",
  description:
    "Get in touch with Petrolabs India Pvt. Ltd. for NABL-accredited testing services. Contact us for quotations, sample pickup, technical support, or service inquiries across environmental, food, water, metallurgical, and oil testing.",
  keywords: [
    "contact petrolabs",
    "testing laboratory contact",
    "NABL accredited lab India",
    "get a testing quote",
    "laboratory customer support",
    "sample pickup request",
    "testing service inquiry",
  ],
};

function page() {
  return (
    <>
      <PageHeader
        tagline={"Need Testing Support? Our Team is Just a Call Away."}
      />
      <ContactInfo />
      <ContactFormSection />
      <LocationMap />
    </>
  );
}

export default page;
