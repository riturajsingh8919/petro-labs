"use client";

import { LazyMotion, m, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiCheckCircle, HiChevronDown } from "react-icons/hi2";
import { FaFlask, FaHammer } from "react-icons/fa";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function TestingTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(0);

  const testingServices = [
    {
      id: "mechanical",
      title: "Mechanical Testing",
      subtitle: "Strength, Toughness & Durability Analysis",
      icon: FaHammer,
      description:
        "Our NABL-accredited laboratory provides comprehensive mechanical testing of metals, alloys, and components to evaluate their strength, toughness, hardness, and durability.",
      fullDescription:
        "Advanced equipment and experienced metallurgical engineers ensure accurate, reliable, and standards-compliant results for industries such as automotive, aerospace, oil & gas, construction, defense, and manufacturing.",
      categories: [
        {
          name: "Tensile & Compression Testing",
          tests: [
            "Tensile Strength (UTS)",
            "Yield Strength (YS)",
            "0.2% Proof Stress (PS)",
            "% Elongation",
            "% Reduction in Area",
            "Compression Resistance",
          ],
        },
        {
          name: "Impact Testing",
          tests: [
            "Charpy Impact Test",
            "Izod Impact Test",
            "Low Temperature Testing",
            "High Temperature Testing",
          ],
        },
        {
          name: "Weld & Bend Testing",
          tests: [
            "Weldability Tests (ASME Sec IX)",
            "Procedure Qualification Tests",
            "Face, Root & Side Bend Tests",
            "Weld Profile Evaluation",
            "Depth of Penetration Studies",
          ],
        },
        {
          name: "Hardness Testing",
          tests: [
            "Rockwell Hardness (HRA, HRB, HRC)",
            "Brinell Hardness",
            "Vickers Hardness",
            "Micro Vickers Hardness",
          ],
        },
        {
          name: "Specialized Tests",
          tests: [
            "Flaring & Flattening Tests",
            "Nick Break Test",
            "Proof Load Testing",
            "Fastener Testing (Torque, Shear, Load)",
            "Grain Flow Examination",
            "Coating Thickness Measurement",
          ],
        },
      ],
      standards: "ASTM, ASME, ISO, BIS, BS, DIN & EN Standards",
      applications: [
        "Material strength validation for design & production",
        "Weld & fastener qualification testing",
        "Quality control in steel, alloys & non-ferrous materials",
        "Failure prevention in high-performance industries",
        "R&D support for new material development",
      ],
      equipment: [
        "Universal Testing Machines (UTM)",
        "Impact Testers",
        "Hardness Testers",
        "Bend Testing Equipment",
        "Torque & Load Analyzers",
      ],
      faqs: [
        {
          q: "What is tensile testing and why is it important?",
          a: "Tensile testing measures the maximum stress a material can withstand while being stretched. It's crucial for validating material strength, quality control, and ensuring safety in structural applications.",
        },
        {
          q: "What is the difference between Charpy and Izod impact tests?",
          a: "Both measure impact resistance, but Charpy uses a notched horizontal specimen, while Izod uses a vertical specimen. Charpy is more commonly used internationally.",
        },
        {
          q: "Do you provide welder qualification tests?",
          a: "Yes, we conduct welder qualification tests as per ASME Section IX, IS, BS, and DIN standards including bend tests and weld profile evaluation.",
        },
        {
          q: "Which hardness testing method should I choose?",
          a: "It depends on your material. Rockwell is common for metals, Brinell for larger specimens, and Vickers/Micro Vickers for small or thin materials.",
        },
        {
          q: "Can you test fasteners and bolts?",
          a: "Yes, we test fasteners for tensile strength, torque resistance, shear strength, and load capacity as per relevant standards.",
        },
      ],
    },
    {
      id: "chemical",
      title: "Chemical Analysis",
      subtitle: "Elemental Composition & Quality Verification",
      icon: FaFlask,
      description:
        "Our NABL-accredited metallurgical laboratory is equipped with advanced Optical Emission Spectrometer (OES) technology for accurate chemical analysis of metals and alloys.",
      fullDescription:
        "We provide testing services that help industries verify composition, quality, and compliance with international standards such as ASTM, BIS, ISO, EN, and DIN.",
      categories: [
        {
          name: "Ferrous Base Alloys",
          tests: [
            "Plain Carbon Steels",
            "Low Alloy Steels",
            "Stainless Steels",
            "Tool Steels",
            "Cast Irons",
          ],
        },
        {
          name: "Non-Ferrous Base Alloys",
          tests: [
            "Aluminium & Aluminium Alloys",
            "Copper & Copper Alloys (Brass, Bronze)",
            "Nickel Base Alloys",
            "Zinc Base Alloys",
            "Titanium Base Alloys",
          ],
        },
      ],
      elements: {
        "Major Alloying Elements": [
          "Fe",
          "C",
          "Mn",
          "Si",
          "Ni",
          "Cr",
          "Mo",
          "Cu",
          "Ti",
          "Zn",
          "Al",
        ],
        "Impurities & Trace Elements": [
          "P",
          "S",
          "Pb",
          "Sn",
          "Sb",
          "As",
          "B",
          "Co",
          "V",
          "W",
          "Nb",
          "Ta",
        ],
        "Special Elements": ["Mg", "Zr", "Be", "Hf", "Se"],
      },
      standards: "ASTM E415, ISO 15350, BIS Methods",
      applications: [
        "Material Identification: Confirm alloy grade & composition",
        "Quality Control: Ensure raw materials meet specifications",
        "Failure Investigations: Detect impurities & segregation",
        "Production Monitoring: Verify consistency in operations",
        "Export Certification: Compliance with global standards",
      ],
      equipment: [
        "Optical Emission Spectrometer (OES)",
        "Advanced Multi-Element Analyzers",
        "High-Precision Detection (ppm level)",
      ],
      faqs: [
        {
          q: "What is chemical analysis of metals?",
          a: "It is the determination of a metal's elemental composition using advanced methods like Optical Emission Spectroscopy (OES) to verify quality and compliance.",
        },
        {
          q: "Why is OES preferred for metal testing?",
          a: "OES provides fast, accurate, and multi-element analysis with ppm-level detection, making it ideal for quality control and material verification.",
        },
        {
          q: "Which metals can you test?",
          a: "We test ferrous alloys (steels, cast irons, stainless steels) and non-ferrous alloys (aluminium, copper, nickel, zinc, titanium).",
        },
        {
          q: "Do you provide grade identification?",
          a: "Yes, we confirm whether the sample meets the required alloy grade and specification standards.",
        },
        {
          q: "Do you support export compliance testing?",
          a: "Yes, our test reports comply with ASTM, BIS, ISO, and EN standards, accepted worldwide for export certification.",
        },
      ],
    },
  ];

  const currentTest = testingServices[activeTab];
  const TestIcon = currentTest.icon;

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="mb-14">
        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-12">
          <div className="grid grid-cols-2 gap-2">
            {testingServices.map((test, index) => {
              const Icon = test.icon;
              const isActive = activeTab === index;
              return (
                <m.button
                  key={index}
                  onClick={() => {
                    setActiveTab(index);
                    setActiveFAQ(0);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative flex items-center justify-center gap-3 px-6 py-5 rounded-xl font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-primary text-white shadow-lg"
                      : "bg-gray-50 text-gray-600 hover:bg-accent1 hover:text-white"
                  }`}
                >
                  <Icon className="w-6 h-6 shrink-0" />
                  <div className="text-left hidden sm:block">
                    <div className="text-lg">{test.title}</div>
                    <div className={`text-xs font-normal `}>
                      {test.subtitle}
                    </div>
                  </div>
                  <span className="sm:hidden text-lg">
                    {test.title.split(" ")[0]}
                  </span>

                  {isActive && (
                    <m.div
                      layoutId="activeTestTab"
                      className="absolute inset-0 bg-primary rounded-xl -z-10"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </m.button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <m.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Header Card */}
            <div className="bg-primary text-white rounded-3xl p-8 md:p-12 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
                  <TestIcon className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-black mb-3">
                    {currentTest.title} Services
                  </h2>
                  <p className="text-xl text-white/90 mb-4 font-semibold">
                    {currentTest.subtitle}
                  </p>
                  <p className="text-white/80 leading-relaxed text-lg mb-3">
                    {currentTest.description}
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    {currentTest.fullDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Test Categories */}
            <div className="mb-12">
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                {currentTest.id === "mechanical"
                  ? "Testing Capabilities"
                  : "Metals & Alloys We Analyze"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentTest.categories.map((category, idx) => (
                  <m.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-black">
                          {idx + 1}
                        </span>
                      </div>
                      <h4 className="font-black text-gray-900 text-lg">
                        {category.name}
                      </h4>
                    </div>
                    <div className="space-y-2.5">
                      {category.tests.map((test, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-gray-700 leading-relaxed">
                            {test}
                          </span>
                        </div>
                      ))}
                    </div>
                  </m.div>
                ))}
              </div>
            </div>

            {/* Elements (for Chemical) */}
            {currentTest.elements && (
              <div className="mb-12">
                <h3 className="text-3xl font-black text-gray-900 mb-6">
                  Elements Analyzed
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(currentTest.elements).map(
                    ([category, elements], idx) => (
                      <m.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-primary"
                      >
                        <h4 className="font-black text-gray-900 mb-4">
                          {category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {elements.map((element, eIdx) => (
                            <span
                              key={eIdx}
                              className="px-3 py-1.5 bg-primary/10 text-primary font-bold text-sm rounded-lg"
                            >
                              {element}
                            </span>
                          ))}
                        </div>
                      </m.div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Applications */}
            <div className="bg-gray-50 mb-12">
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                Applications
              </h3>
              <div className="space-y-4">
                {currentTest.applications.map((app, idx) => (
                  <m.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-md"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
                      <HiCheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 leading-relaxed font-medium">
                      {app}
                    </span>
                  </m.div>
                ))}
              </div>
            </div>

            {/* Standards & Equipment */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-accent1">
                <h3 className="text-xl font-black text-gray-900 mb-4">
                  Standards & Compliance
                </h3>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  {currentTest.standards}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-secondary">
                <h3 className="text-xl font-black text-gray-900 mb-4">
                  Equipment & Technology
                </h3>
                <div className="space-y-2">
                  {currentTest.equipment.map((eq, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span className="text-gray-700 font-medium text-sm">
                        {eq}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Choose */}
            <div className="bg-primary/5 rounded-2xl p-8 mb-12">
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                Why Choose Petrolabs?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "NABL-accredited laboratory",
                  "Advanced testing equipment",
                  "Experienced metallurgical engineers",
                  "Quick turnaround time",
                  "Standards-compliant reports",
                  "Trusted by major industries",
                ].map((item, idx) => (
                  <m.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md"
                  >
                    <HiCheckCircle className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </m.div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {currentTest.faqs.map((faq, idx) => {
                  const isActive = activeFAQ === idx;
                  return (
                    <div
                      key={idx}
                      className={`bg-white rounded-2xl overflow-hidden shadow-md transition-all ${
                        isActive ? "ring-2 ring-primary shadow-lg" : ""
                      }`}
                    >
                      <button
                        onClick={() => setActiveFAQ(isActive ? null : idx)}
                        className="w-full flex items-start justify-between p-6 text-left cursor-pointer"
                      >
                        <div className="flex items-start gap-4 flex-1">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center font-black shrink-0 transition-all ${
                              isActive
                                ? "bg-primary text-white"
                                : "bg-gray-100 text-gray-400"
                            }`}
                          >
                            {String(idx + 1).padStart(2, "0")}
                          </div>
                          <span className="font-bold text-gray-900 pr-4 text-lg">
                            {faq.q}
                          </span>
                        </div>
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                            isActive
                              ? "bg-primary/10 rotate-180"
                              : "bg-gray-100"
                          }`}
                        >
                          <HiChevronDown
                            className={`w-5 h-5 ${
                              isActive ? "text-primary" : "text-gray-400"
                            }`}
                          />
                        </div>
                      </button>

                      <m.div
                        initial={false}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="pl-14">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      </m.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </m.div>
        </AnimatePresence>
      </section>
    </LazyMotion>
  );
}
