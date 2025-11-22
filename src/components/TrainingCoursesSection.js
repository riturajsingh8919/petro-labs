"use client";

import { LazyMotion, m, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  MdScience,
  MdBiotech,
  MdPrecisionManufacturing,
  MdWaterDrop,
  MdAnalytics,
} from "react-icons/md";
import {
  HiBeaker,
  HiCog,
  HiLightningBolt,
  HiShieldCheck,
  HiAcademicCap,
  HiChartBar,
} from "react-icons/hi";
import { SlChemistry } from "react-icons/sl";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

const TrainingCoursesSection = () => {
  const [activeTab, setActiveTab] = useState("analytical");

  const trainingData = {
    analytical: {
      title: "Analytical Chemistry",
      subtitle: "Advanced Laboratory Techniques",
      courses: [
        {
          name: "GC-MS/MS Training",
          description:
            "Master gas chromatography-mass spectrometry techniques for complex sample analysis and compound identification.",
          icon: MdScience,
          color: "primary",
        },
        {
          name: "ICP-OES Training",
          description:
            "Learn inductively coupled plasma optical emission spectroscopy for precise elemental analysis.",
          icon: MdBiotech,
          color: "accent1",
        },
        {
          name: "HPLC Training",
          description:
            "Develop expertise in high-performance liquid chromatography for pharmaceutical and chemical analysis.",
          icon: MdWaterDrop,
          color: "accent2",
        },
        {
          name: "AAS Training",
          description:
            "Acquire skills in atomic absorption spectroscopy for trace metal detection and quantification.",
          icon: MdAnalytics,
          color: "secondary",
        },
        {
          name: "GC Training",
          description:
            "Understand gas chromatography fundamentals and advanced separation techniques for volatile compounds.",
          icon: HiBeaker,
          color: "primary",
        },
        {
          name: "Chemistry (Analytical / Organic / Industrial)",
          description:
            "Comprehensive chemistry training covering analytical methods, organic synthesis, and industrial applications.",
          icon: SlChemistry,
          color: "accent1",
        },
      ],
    },
    lubrication: {
      title: "Lubrication & Reliability",
      subtitle: "Professional Certification Programs",
      courses: [
        {
          name: "Oil Analysis & Ferrography Training",
          description:
            "Learn advanced oil condition monitoring and wear particle analysis for predictive maintenance strategies.",
          icon: MdPrecisionManufacturing,
          color: "primary",
        },
        {
          name: "Condition-Based Maintenance Training",
          description:
            "Implement data-driven maintenance programs to optimize equipment reliability and reduce downtime.",
          icon: HiCog,
          color: "accent1",
        },
        {
          name: "Machinery Lubrication I (MLT I / MLA I)",
          description:
            "Foundation course covering lubrication fundamentals, lubricant selection, and basic machine maintenance.",
          icon: HiLightningBolt,
          color: "accent2",
        },
        {
          name: "Machinery Lubrication II (MLT II)",
          description:
            "Advanced lubrication practices including contamination control and lubricant storage best practices.",
          icon: HiShieldCheck,
          color: "secondary",
        },
        {
          name: "Machinery Lubrication Engineer (MLE)",
          description:
            "Professional certification for developing lubrication programs and managing reliability engineering teams.",
          icon: HiAcademicCap,
          color: "primary",
        },
        {
          name: "Machine Lubricant Analyst II (MLA II)",
          description:
            "Intermediate-level training in fluid analysis, interpreting test results, and diagnostic techniques.",
          icon: HiChartBar,
          color: "accent1",
        },
        {
          name: "Machine Lubricant Analyst III (MLA III)",
          description:
            "Expert-level certification covering advanced diagnostics, root cause analysis, and consulting skills.",
          icon: HiChartBar,
          color: "accent2",
        },
      ],
    },
  };

  const currentData = trainingData[activeTab];

  const colorClasses = {
    primary: {
      bg: "from-primary/15 to-primary/5",
      icon: "bg-primary",
      border: "border-primary/20",
      hover: "hover:shadow-primary/20",
    },
    accent1: {
      bg: "from-accent1/15 to-accent1/5",
      icon: "bg-accent1",
      border: "border-accent1/20",
      hover: "hover:shadow-accent1/20",
    },
    accent2: {
      bg: "from-accent2/15 to-accent2/5",
      icon: "bg-accent2",
      border: "border-accent2/20",
      hover: "hover:shadow-accent2/20",
    },
    secondary: {
      bg: "from-secondary/15 to-secondary/5",
      icon: "bg-secondary",
      border: "border-secondary/20",
      hover: "hover:shadow-secondary/20",
    },
  };

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="relative bg-linear-to-b from-gray-50 via-white to-gray-50 py-16 overflow-hidden">
        {/* Enhanced Background with linear and Floating Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-64 bg-linear-to-b from-primary/5 via-accent1/5 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-accent2/5 via-secondary/5 to-transparent" />
          <div className="absolute top-20 right-0 w-72 h-72 bg-linear-to-bl from-primary/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-linear-to-tr from-accent1/8 to-transparent rounded-full blur-3xl" />

          {/* Small Floating Shape Icons in Background */}
          <m.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-32 left-[15%] opacity-5"
          >
            <MdScience className="w-8 h-8 text-primary" />
          </m.div>

          <m.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-64 right-[20%] opacity-5"
          >
            <HiBeaker className="w-10 h-10 text-accent1" />
          </m.div>

          <m.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-40 left-[25%] opacity-5"
          >
            <HiCog className="w-9 h-9 text-accent2" />
          </m.div>

          <m.div
            animate={{
              y: [0, 18, 0],
              rotate: [0, -6, 0],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            className="absolute top-48 right-[10%] opacity-5"
          >
            <HiAcademicCap className="w-11 h-11 text-secondary" />
          </m.div>

          <m.div
            animate={{
              y: [0, -16, 0],
              rotate: [0, 7, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute bottom-56 right-[30%] opacity-5"
          >
            <MdBiotech className="w-8 h-8 text-primary" />
          </m.div>

          <m.div
            animate={{
              y: [0, 14, 0],
              rotate: [0, -9, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
            className="absolute top-96 left-[10%] opacity-5"
          >
            <HiLightningBolt className="w-9 h-9 text-accent1" />
          </m.div>
        </div>

        <div className="container mx-auto px-4 md:px-10 lg:px-16 relative z-10">
          {/* Compact Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-primary/10 via-accent1/10 to-primary/10 px-4 py-2 rounded-full mb-4">
              <HiAcademicCap className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                Professional Training
              </span>
            </div>
            <h2 className="text-4xl xl:text-5xl font-black leading-tight mb-3 text-gray-900">
              Elevate Your <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-recognized certifications and hands-on training programs
            </p>
          </m.div>

          {/* Tabbed Interface */}
          <div className="max-w-7xl mx-auto">
            {/* Tab Buttons */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-8 md:mb-10"
              role="tablist"
              aria-label="Training categories"
            >
              <div className="inline-flex bg-gray-100 rounded-2xl p-1.5 shadow-inner">
                <button
                  role="tab"
                  aria-selected={activeTab === "analytical"}
                  aria-controls="analytical-panel"
                  onClick={() => setActiveTab("analytical")}
                  className={`relative px-6 sm:px-8 md:px-12 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 cursor-pointer ${
                    activeTab === "analytical"
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {activeTab === "analytical" && (
                    <m.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-linear-to-r from-primary to-blue-600 rounded-xl shadow-lg"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <MdScience className="w-5 h-5" />
                    Analytical Chemistry
                  </span>
                </button>

                <button
                  role="tab"
                  aria-selected={activeTab === "lubrication"}
                  aria-controls="lubrication-panel"
                  onClick={() => setActiveTab("lubrication")}
                  className={`relative px-6 sm:px-8 md:px-12 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 cursor-pointer ${
                    activeTab === "lubrication"
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {activeTab === "lubrication" && (
                    <m.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-linear-to-r from-accent1 to-orange-600 rounded-xl shadow-lg"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <HiCog className="w-5 h-5" />
                    Lubrication & Reliability
                  </span>
                </button>
              </div>
            </m.div>

            {/* Tab Panels - Bento Grid Layout */}
            <AnimatePresence mode="wait">
              <m.div
                key={activeTab}
                id={`${activeTab}-panel`}
                role="tabpanel"
                aria-labelledby={`${activeTab}-tab`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Category Header */}
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center mb-8"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {currentData.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {currentData.subtitle}
                  </p>
                </m.div>

                {/* Bento Grid - Unique Staggered Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {currentData.courses.map((course, index) => {
                    const IconComponent = course.icon;
                    const colors = colorClasses[course.color];

                    return (
                      <m.div
                        key={course.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.08,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        whileHover={{
                          y: -8,
                          scale: 1.02,
                          transition: { duration: 0.3 },
                        }}
                        className="group relative cursor-pointer"
                      >
                        {/* Course Card */}
                        <div
                          className={`relative h-full bg-linear-to-br ${colors.bg} backdrop-blur-sm rounded-2xl p-6 md:p-7 border-2 ${colors.border} ${colors.hover} hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                        >
                          {/* Diagonal Accent Line */}
                          <div
                            className={`absolute -top-12 -right-12 w-32 h-32 ${colors.icon} opacity-5 rotate-45 group-hover:scale-150 transition-transform duration-700`}
                          />

                          {/* Icon - Only One */}
                          <m.div
                            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 ${colors.icon} rounded-xl shadow-lg mb-4`}
                          >
                            <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                          </m.div>

                          {/* Course Name */}
                          <h4 className="text-base md:text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                            {course.name}
                          </h4>

                          {/* Description - Two Lines */}
                          <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
                            {course.description}
                          </p>

                          {/* Hover Arrow */}
                          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                            <div
                              className={`w-8 h-8 ${colors.icon} rounded-lg flex items-center justify-center shadow-md`}
                            >
                              <svg
                                className="w-4 h-4 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2.5}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </m.div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex justify-center mt-10 md:mt-12"
                >
                  <m.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-4 bg-linear-to-r from-primary via-primary/95 to-primary rounded-xl font-bold text-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-accent1 via-accent1/95 to-accent1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative flex items-center gap-2">
                      View All Training Programs
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </m.button>
                </m.div>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default TrainingCoursesSection;
