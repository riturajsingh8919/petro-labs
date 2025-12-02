"use client";

import { LazyMotion, m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiCheckCircle, HiArrowRight } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

const ServicesGrid = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Petroleum & Lubricant Testing",
      slug: "petroleum-lubricant-testing",
      description:
        "Comprehensive petroleum and lubricant analysis for optimal equipment performance and compliance.",
      benefits: [
        "Quality Assurance",
        "Performance Optimization",
        "Regulatory Compliance",
      ],
      image: "/services/1.jpg",
    },
    {
      title: "Transformer Oil Testing",
      slug: "transformer-oil-testing",
      description:
        "Electrical insulating oil testing ensuring power transformer reliability and longevity.",
      benefits: [
        "Breakdown Voltage",
        "Moisture Analysis",
        "Contamination Detection",
      ],
      image: "/services/2.jpg",
    },
    {
      title: "Water Testing Services",
      slug: "water-testing",
      description:
        "Complete water quality testing for drinking, industrial, and environmental applications.",
      benefits: [
        "Potability Testing",
        "Industrial Standards",
        "Environmental Monitoring",
      ],
      image: "/services/3.jpg",
    },
    {
      title: "Coolant & DEF Testing",
      slug: "coolant-def-testing",
      description:
        "Engine coolant and diesel exhaust fluid testing for automotive and industrial systems.",
      benefits: ["Freeze Point Analysis", "pH Balance", "Contamination Check"],
      image: "/services/4.jpg",
    },
    {
      title: "RoHS & ELC Certification",
      slug: "rohs-elc-testing",
      description:
        "Regulatory compliance testing for hazardous substances and product safety certification.",
      benefits: ["RoHS Compliance", "Heavy Metal Testing", "ELC Directives"],
      image: "/services/5.jpg",
    },
    {
      title: "Chemical & Mechanical Testing",
      slug: "chemical-mechanical-testing",
      description:
        "Advanced material analysis including chemical composition and mechanical properties.",
      benefits: [
        "Composition Analysis",
        "Tensile Testing",
        "Hardness Evaluation",
      ],
      image: "/services/6.jpg",
    },
    {
      title: "Metallography Testing",
      slug: "metallography-testing",
      description:
        "Microstructure analysis and failure investigation of metallic materials.",
      benefits: ["Grain Structure", "Phase Analysis", "Defect Detection"],
      image: "/services/7.jpg",
    },
    {
      title: "Food & Agriculture Testing",
      slug: "food-agriculture-testing",
      description:
        "Safety and quality testing for food products, soil, and agricultural inputs.",
      benefits: [
        "Pesticide Residue",
        "Nutritional Analysis",
        "Microbial Testing",
      ],
      image: "/services/8.jpg",
    },
    {
      title: "Environmental Testing",
      slug: "environmental-testing",
      description:
        "Comprehensive environmental monitoring and pollution assessment services.",
      benefits: ["Air Quality", "Soil Analysis", "Emissions Testing"],
      image: "/services/9.jpg",
    },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <div className="relative bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-10 lg:px-16 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 h-full py-8 md:py-12">
            {/* Left - Service List */}
            <div className="lg:col-span-5 flex flex-col h-full">
              {/* Active Badge */}
              <div className="mb-4 shrink-0">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-bold text-primary">
                    {String(activeService + 1).padStart(2, "0")} /{" "}
                    {String(services.length).padStart(2, "0")} Selected
                  </span>
                </div>
              </div>

              {/* Scrollable Service List */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-1.5">
                {services.map((service, index) => (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03, duration: 0.3 }}
                    onMouseEnter={() => setActiveService(index)}
                    onClick={() => setActiveService(index)}
                    className={`group relative cursor-pointer transition-all duration-300 ${
                      activeService === index
                        ? "bg-white shadow-lg"
                        : "bg-transparent hover:bg-gray-50"
                    }`}
                  >
                    <div className="p-3 flex items-center justify-between gap-3">
                      {/* Title */}
                      <h3
                        className={`text-sm md:text-base font-black transition-all duration-300 leading-tight flex-1 ${
                          activeService === index
                            ? "text-gray-900"
                            : "text-gray-700"
                        }`}
                      >
                        {service.title}
                      </h3>

                      {/* Arrow Button */}
                      <Link href={`/services/${service.slug}`}>
                        <m.div
                          whileHover={{ scale: 1.1, x: 2 }}
                          whileTap={{ scale: 0.9 }}
                          className={`w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer ${
                            activeService === index
                              ? "bg-primary text-white shadow-md"
                              : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                          }`}
                        >
                          <HiArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                        </m.div>
                      </Link>
                    </div>

                    {/* Active Indicator */}
                    <AnimatePresence>
                      {activeService === index && (
                        <m.div
                          layoutId="activeIndicator"
                          className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-primary"
                          initial={{ opacity: 0, scaleY: 0 }}
                          animate={{ opacity: 1, scaleY: 1 }}
                          exit={{ opacity: 0, scaleY: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>
                  </m.div>
                ))}
              </div>
            </div>

            {/* Right - Image & Description */}
            <div className="lg:col-span-7 h-full min-h-[400px] lg:min-h-0">
              <AnimatePresence mode="wait">
                {services.map(
                  (service, index) =>
                    activeService === index && (
                      <m.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4 }}
                        className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-gray-900 shadow-2xl h-full"
                      >
                        {/* Image */}
                        <div className="relative h-full">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-black/20" />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10">
                          <m.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                          >
                            {/* Number Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30 mb-3 md:mb-4">
                              <span className="text-xs md:text-sm font-black text-primary">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <span className="text-xs font-medium text-white/80">
                                of {services.length}
                              </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 md:mb-4 leading-tight">
                              {service.title}
                            </h3>

                            <p className="text-sm md:text-base lg:text-lg text-white/90 mb-4 md:mb-6 leading-relaxed max-w-2xl">
                              {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {service.benefits.map((benefit, idx) => (
                                <m.span
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.2 + idx * 0.08 }}
                                  className="px-2.5 md:px-3 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs md:text-sm font-medium rounded-lg border border-white/30 flex items-center gap-1.5"
                                >
                                  <HiCheckCircle className="w-3.5 h-3.5 shrink-0 text-accent1" />
                                  <span>{benefit}</span>
                                </m.span>
                              ))}
                            </div>
                          </m.div>
                        </div>
                      </m.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default ServicesGrid;
