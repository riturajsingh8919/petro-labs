// app/page.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageSlider from "./ImageSlider";
import Link from "next/link";

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const slides = [
    {
      id: 1,
      images: [
        { src: "/slide-1-a.png", alt: "Laboratory testing" },
        { src: "/slide-1-b.png", alt: "Quality analysis" },
        { src: "/slide-1-c.png", alt: "Professional equipment" },
      ],
      content: [
        {
          title: "Petroleum & Lubricant",
          highlight: "Testing",
          description:
            "Complete analysis of petroleum products, lubricants, fuels, and oils including viscosity, flash point, pour point, and contamination testing for quality assurance and performance optimization.",
          buttonText: "Learn More",
          buttonLink: "/services/petroleum-lubricant-testing",
        },
        {
          title: "Transformer Oil",
          highlight: "Testing",
          description:
            "Specialized dielectric strength, moisture content, and dissolved gas analysis for transformer oils ensuring electrical safety and optimal performance in power distribution systems.",
          buttonText: "Learn More",
          buttonLink: "/services/transformer-oil-testing",
        },
        {
          title: "Water Testing",
          highlight: "Services",
          description:
            "Comprehensive microbiological, chemical, and physical water quality analysis for drinking, industrial, and environmental applications with ISO-certified laboratory results.",
          buttonText: "Learn More",
          buttonLink: "/services/water-testing",
        },
      ],
    },
    {
      id: 2,
      images: [
        { src: "/slide-2-a.png", alt: "Certification process" },
        { src: "/slide-2-b.png", alt: "Testing facility" },
        { src: "/slide-2-c.png", alt: "Quality control" },
      ],
      content: [
        {
          title: "Coolant & DEF",
          highlight: "Testing",
          description:
            "Precise freeze point, pH, reserve alkalinity, and urea concentration analysis of engine coolants and diesel exhaust fluid (DEF) to maintain vehicle performance and emission standards.",
          buttonText: "Get Started",
          buttonLink: "/services/coolant-def-testing",
        },
        {
          title: "RoHS & ELC",
          highlight: "Certification",
          description:
            "Restriction of Hazardous Substances (RoHS) and End-of-Life vehicle certification testing ensuring compliance with international environmental regulations for global market access.",
          buttonText: "Get Started",
          buttonLink: "/services/rohs-elc-testing",
        },
        {
          title: "Chemical & Mechanical",
          highlight: "Testing",
          description:
            "Advanced tensile strength, hardness testing, chemical composition analysis, and material characterization services for industrial materials, components, and finished products.",
          buttonText: "Get Started",
          buttonLink: "/services/chemical-mechanical-testing",
        },
      ],
    },
    {
      id: 3,
      images: [
        { src: "/slide-3-a.png", alt: "Environmental testing" },
        { src: "/slide-3-b.png", alt: "Food analysis" },
        { src: "/slide-3-c.png", alt: "Metallography lab" },
      ],
      content: [
        {
          title: "Metallography",
          highlight: "Testing",
          description:
            "Detailed microscopic examination, grain size analysis, phase identification, and failure analysis for metals and alloys ensuring metallurgical quality control and process optimization.",
          buttonText: "Read More",
          buttonLink: "/services/metallography-testing",
        },
        {
          title: "Food & Agriculture",
          highlight: "Testing",
          description:
            "Comprehensive microbiological testing, pesticide residue analysis, nutritional profiling, and contaminant detection for food safety and agricultural product quality with NABL accreditation.",
          buttonText: "Read More",
          buttonLink: "/services/food-agriculture-testing",
        },
        {
          title: "Environmental",
          highlight: "Testing",
          description:
            "Complete air quality monitoring, soil contamination analysis, water pollution assessment, and environmental impact studies for regulatory compliance and sustainability initiatives.",
          buttonText: "Read More",
          buttonLink: "/services/environmental-testing",
        },
      ],
    },
  ];

  const handleNext = () => {
    setDirection("right");
    setActiveImageIndex(0);
    setCurrentSlideIndex((prev) => (prev + 1 === slides.length ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setDirection("left");
    setActiveImageIndex(0);
    setCurrentSlideIndex((prev) =>
      prev - 1 < 0 ? slides.length - 1 : prev - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentSlideIndex ? "right" : "left");
    setActiveImageIndex(0);
    setCurrentSlideIndex(index);
  };

  const currentSlide = slides[currentSlideIndex];
  const currentContent = currentSlide.content[activeImageIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (direction) => ({
      x: direction === "right" ? "-50%" : "50%",
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const contentVariants = {
    enter: {
      opacity: 0,
      x: 20,
    },
    center: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-white relative overflow-hidden pt-20">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent1 rounded-full blur-3xl opacity-5" />
      </div>

      {/* Main Carousel Container */}
      <div className="relative flex items-center lg:items-start py-12">
        <div className="container mx-auto px-4 md:px-10 lg:px-16">
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlideIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
                  {/* Content Section - Clean & Minimal */}
                  <div className="flex-1 max-w-2xl order-2 lg:order-1">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeImageIndex}
                        variants={contentVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                      >
                        {/* Heading */}
                        <h1 className="text-4xl xl:text-5xl font-black leading-tight mb-6 text-gray-900">
                          <span className="text-gray-900">
                            {currentContent.title}
                          </span>
                          <br />
                          <span className="text-primary">
                            {currentContent.highlight}
                          </span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-10">
                          {currentContent.description}
                        </p>

                        {/* CTA Button */}
                        <Link href={currentContent.buttonLink}>
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 cursor-pointer overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-linear-to-r from-primary to-primary/85 transition-opacity duration-300 group-hover:opacity-0" />
                            <div className="absolute inset-0 bg-linear-to-r from-accent1 via-accent2 to-accent2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <span className="relative z-10 text-white">
                              {currentContent.buttonText}
                            </span>
                            <svg
                              className="w-5 h-5 relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </motion.button>
                        </Link>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Image Slider Section */}
                  <div className="flex-1 w-full lg:w-auto order-1 lg:order-2">
                    <ImageSlider
                      images={currentSlide.images}
                      onActiveChange={setActiveImageIndex}
                      activeIndex={activeImageIndex}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-8 mt-4 lg:mt-0">
            {/* Previous Button */}
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(53, 130, 186, 1)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevious}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center text-gray-700 hover:text-white border border-gray-200 transition-colors duration-300 cursor-pointer"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            {/* Dots Navigation */}
            <div className="flex gap-3">
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  animate={{ scale: currentSlideIndex === index ? 1.3 : 1 }}
                  whileHover={{
                    scale: currentSlideIndex === index ? 1.3 : 1.15,
                  }}
                  onClick={() => handleDotClick(index)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlideIndex === index
                      ? "w-12 h-3 bg-linear-to-r from-primary to-accent1"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(53, 130, 186, 1)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center text-gray-700 hover:text-white border border-gray-200 transition-colors duration-300 cursor-pointer"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
