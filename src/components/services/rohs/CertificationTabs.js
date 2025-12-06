"use client";

import { LazyMotion, m, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiCheckCircle, HiChevronDown } from "react-icons/hi2";
import { FaMicrochip, FaCar } from "react-icons/fa";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function CertificationTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(0);

  const certifications = [
    {
      id: "rohs",
      title: "RoHS Certification",
      subtitle: "Restriction of Hazardous Substances",
      icon: FaMicrochip,
      description:
        "We provide RoHS Certification Testing Services to help manufacturers comply with the EU Directive 2011/65/EU and its amendments. RoHS restricts the use of hazardous substances in electrical and electronic equipment (EEE) to protect human health and the environment.",
      fullDescription:
        "Our NABL-accredited laboratory uses advanced analytical techniques like XRF, ICP-OES, ICP-MS, and GC-MS to ensure accurate detection of restricted substances.",
      substances: [
        { name: "Lead (Pb)", limit: "< 1000 ppm" },
        { name: "Mercury (Hg)", limit: "< 1000 ppm" },
        { name: "Cadmium (Cd)", limit: "< 100 ppm" },
        { name: "Hexavalent Chromium (Cr6+)", limit: "< 1000 ppm" },
        { name: "Polybrominated Biphenyls (PBB)", limit: "< 1000 ppm" },
        { name: "Polybrominated Diphenyl Ethers (PBDE)", limit: "< 1000 ppm" },
        { name: "DEHP (Phthalate)", limit: "< 1000 ppm" },
        { name: "BBP (Phthalate)", limit: "< 1000 ppm" },
        { name: "DBP (Phthalate)", limit: "< 1000 ppm" },
        { name: "DIBP (Phthalate)", limit: "< 1000 ppm" },
      ],
      methods: [
        {
          name: "XRF (X-Ray Fluorescence Spectroscopy)",
          description: "Rapid screening of heavy metals in materials",
        },
        {
          name: "ICP-OES / ICP-MS",
          description: "High precision elemental analysis for trace detection",
        },
        {
          name: "GC-MS (Gas Chromatography-Mass Spectrometry)",
          description: "Phthalate detection in plastics, rubbers, and polymers",
        },
      ],
      products: [
        "IT & Telecommunication Equipment",
        "Consumer Electronics",
        "Medical Devices",
        "Automotive Electronic Components",
        "Lighting Equipment",
        "Industrial Control Equipment",
        "Household Appliances",
        "Toys & Recreational Equipment",
      ],
      standards: "EU RoHS Directive 2011/65/EU, IEC 62321, EN Standards",
      faqs: [
        {
          q: "What products require RoHS certification?",
          a: "All electrical and electronic equipment (EEE) sold in the EU, including IT equipment, consumer electronics, medical devices, and automotive components.",
        },
        {
          q: "What happens if products don't comply?",
          a: "Non-compliance may result in fines, product recalls, or bans from the EU market. It can also damage brand reputation and lead to legal liability.",
        },
        {
          q: "Do you provide RoHS 3 testing for phthalates?",
          a: "Yes, we test for DEHP, BBP, DBP, and DIBP as per the updated RoHS 3 directive.",
        },
        {
          q: "How long does RoHS testing take?",
          a: "Standard RoHS testing takes 5-7 business days. Expedited testing is available upon request.",
        },
        {
          q: "Can you test individual components or finished products?",
          a: "Yes, we test both individual components (PCBs, connectors, cables) and complete finished products.",
        },
      ],
    },
    {
      id: "elv",
      title: "ELV Certification",
      subtitle: "End-of-Life Vehicles Directive",
      icon: FaCar,
      description:
        "We provide ELV Certification Testing Services to help automotive manufacturers comply with the EU End-of-Life Vehicles Directive (2000/53/EC). ELV focuses on reduction, reuse, recycling, and recovery of vehicles and restricts hazardous substances in automotive materials.",
      fullDescription:
        "Our testing ensures compliance for OEMs, auto component manufacturers, and exporters targeting global markets.",
      substances: [
        { name: "Lead (Pb)", limit: "< 1000 ppm" },
        { name: "Mercury (Hg)", limit: "< 1000 ppm" },
        { name: "Cadmium (Cd)", limit: "< 100 ppm" },
        { name: "Hexavalent Chromium (Cr6+)", limit: "< 1000 ppm" },
      ],
      methods: [
        {
          name: "XRF Analysis",
          description:
            "Quick screening of metals in automotive parts and components",
        },
        {
          name: "ICP-OES / ICP-MS",
          description: "High precision quantification of restricted elements",
        },
        {
          name: "GC-MS",
          description:
            "Analysis of polymer and plastic-based automotive materials",
        },
      ],
      products: [
        "Automotive Body Parts",
        "Interior Components & Upholstery",
        "Electrical & Electronic Systems",
        "Battery Components",
        "Paints & Coatings",
        "Plastic & Polymer Parts",
        "Metal Alloys & Castings",
        "Wiring Harnesses",
      ],
      standards: "EU ELV Directive 2000/53/EC, ISO 1043, IMDS Compliance",
      faqs: [
        {
          q: "Who needs ELV certification?",
          a: "Automobile OEMs, tier-1 suppliers, component manufacturers, and exporters targeting EU markets require ELV certification.",
        },
        {
          q: "How is ELV different from RoHS?",
          a: "RoHS applies to electronics and electrical equipment, while ELV is specific to automotive materials, components, and end-of-life vehicle recycling.",
        },
        {
          q: "What testing methods do you use?",
          a: "We use XRF, ICP-OES, ICP-MS, and GC-MS to detect restricted substances in metals, plastics, coatings, and polymers.",
        },
        {
          q: "Is ELV testing mandatory for exports?",
          a: "Yes, ELV compliance is mandatory for automotive components and vehicles exported to the European Union.",
        },
        {
          q: "Can you test paints and coatings?",
          a: "Yes, we test automotive paints, powder coatings, and surface treatments for restricted substances.",
        },
      ],
    },
  ];

  const currentCert = certifications[activeTab];
  const CertIcon = currentCert.icon;

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="mb-14">
        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-12">
          <div className="grid grid-cols-2 gap-2">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
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
                  className={`relative flex items-center justify-center gap-3 px-6 py-5 rounded-xl font-bold transition-all duration-300 cursor-pointer hover:text-white ${
                    isActive
                      ? "bg-primary text-white shadow-lg"
                      : "bg-gray-200 text-gray-600 hover:bg-accent1 "
                  }`}
                >
                  <Icon className="w-6 h-6 shrink-0" />
                  <div className="text-left hidden sm:block">
                    <div className="text-lg">{cert.title}</div>
                    <div className={`text-xs font-normal `}>
                      {cert.subtitle}
                    </div>
                  </div>
                  <span className="sm:hidden text-lg">
                    {cert.title.split(" ")[0]}
                  </span>

                  {isActive && (
                    <m.div
                      layoutId="activeTabBg"
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
                  <CertIcon className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-black mb-3">
                    {currentCert.title}
                  </h2>
                  <p className="text-xl text-white/90 mb-4 font-semibold">
                    {currentCert.subtitle}
                  </p>
                  <p className="text-white/80 leading-relaxed text-lg mb-3">
                    {currentCert.description}
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    {currentCert.fullDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Restricted Substances */}
            <div className="mb-12">
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                Restricted Substances Under {currentCert.title.split(" ")[0]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentCert.substances.map((substance, idx) => (
                  <m.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-secondary hover:shadow-xl transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="font-black text-gray-900">
                        {substance.name}
                      </h4>
                      <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                        <span className="text-secondary font-black text-xs">
                          {idx + 1}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 font-semibold">
                      Limit:{" "}
                      <span className="text-secondary">{substance.limit}</span>
                    </p>
                  </m.div>
                ))}
              </div>
            </div>

            {/* Testing Methods */}
            <div className="mb-12">
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                Testing Methods & Techniques
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentCert.methods.map((method, idx) => (
                  <m.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-primary font-black text-xl">
                        {idx + 1}
                      </span>
                    </div>
                    <h4 className="font-black text-gray-900 mb-3 text-lg">
                      {method.name}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {method.description}
                    </p>
                  </m.div>
                ))}
              </div>
            </div>

            {/* Products Covered */}
            <div className="bg-gray-50 mb-12">
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                Products & Components We Test
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentCert.products.map((product, idx) => (
                  <m.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">
                      {product}
                    </span>
                  </m.div>
                ))}
              </div>
            </div>

            {/* Standards & Why Choose */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-accent1">
                <h3 className="text-xl font-black text-gray-900 mb-4">
                  Compliance Standards
                </h3>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  {currentCert.standards}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-primary">
                <h3 className="text-xl font-black text-gray-900 mb-4">
                  Why Choose Petrolabs?
                </h3>
                <div className="space-y-3">
                  {[
                    "NABL-accredited laboratory",
                    "Advanced XRF, ICP-OES, GC-MS instruments",
                    "Expert interpretation & consultation",
                    "Fast turnaround with detailed reports",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <HiCheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-gray-700 font-medium text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {currentCert.faqs.map((faq, idx) => {
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
