export const metadata = {
  title: "Food Testing Services | NABL Accredited Food Lab India | Petrolabs",
  description:
    "Petrolabs India Pvt. Ltd. offers NABL-accredited Food Testing Services across spices, dairy, meat, beverages, oils, bakery & processed foods. Chemical, nutritional, microbiological, and contaminant analysis as per FSSAI, BIS, ISO, AOAC & Codex standards.",
  keywords: [
    "food testing services",
    "NABL food testing lab",
    "spice testing lab",
    "dairy product testing",
    "meat testing laboratory",
    "beverage testing lab",
    "edible oil testing",
    "bakery product testing",
    "food contaminant analysis",
    "nutritional analysis",
    "microbiological food testing",
    "pesticide residue testing",
    "FSSAI food testing",
    "food lab India",
  ],
};

import FAQ from "@/components/services/food/FAQ";
import FoodCategories from "@/components/services/food/FoodCategories";
import FoodCTA from "@/components/services/food/FoodCTA";
import FoodHero from "@/components/services/food/FoodHero";
import FoodOverview from "@/components/services/food/FoodOverview";
import TestingParameters from "@/components/services/food/TestingParameters";
import WhyChoose from "@/components/services/food/WhyChoose";
import React from "react";

function page() {
  return (
    <>
      <FoodHero />
      <FoodOverview />
      <FoodCategories />
      <TestingParameters />
      <WhyChoose />
      <FAQ />
      <FoodCTA />
    </>
  );
}

export default page;
