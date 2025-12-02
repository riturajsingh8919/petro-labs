"use client";

import { LazyMotion, m, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiCheckCircle, HiChevronDown } from "react-icons/hi2";
import {
  FaBottleWater,
  FaIndustry,
  FaRecycle,
  FaMicroscope,
  FaGlassWater,
} from "react-icons/fa6";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function WaterServicesGrid() {
  const [activeService, setActiveService] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(0);

  const services = [
    {
      title: "Drinking Water Testing",
      subtitle: "Safe & Compliant Drinking Water Analysis",
      icon: FaGlassWater,
      description:
        "We specialize in drinking water quality testing as per IS 10500:2012 standards. Our NABL-accredited laboratory ensures your water meets all required physical, chemical, and microbiological safety parameters.",
      parameters: {
        Physical: ["Colour", "Odour", "pH", "TDS", "Turbidity"],
        Chemical: [
          "Hardness",
          "Chlorides",
          "Sulphates",
          "Nitrates",
          "Fluoride",
          "Heavy Metals (Lead, Arsenic, Cadmium, Mercury)",
        ],
        Biological: ["E. coli", "Total Coliforms", "Faecal Coliforms"],
      },
      compliance: "BIS (IS 10500:2012)",
      benefits: [
        "Quick turnaround time",
        "BIS-compliant certifications for government tenders & audits",
        "Detailed reports with expert interpretation",
      ],
      faqs: [
        {
          q: "What standards are used for drinking water testing in India?",
          a: "We test drinking water as per IS 10500:2012 (BIS standards).",
        },
        {
          q: "How often should drinking water be tested?",
          a: "At least once every 6 months or whenever contamination is suspected.",
        },
        {
          q: "Can you test borewell and municipal supply water?",
          a: "Yes, we analyze borewell, tap, and packaged drinking water.",
        },
      ],
      cta: "💧 Ensure your water is safe!",
    },
    {
      title: "Packaged Drinking & Mineral Water",
      subtitle: "Quality Assurance for Bottled Water",
      icon: FaBottleWater,
      description:
        "We test Packaged Drinking Water (IS 14543:2016) and Natural Mineral Water (IS 13428:2005) to ensure purity and safety.",
      parameters: {
        "Physical & Chemical": [
          "TDS",
          "pH",
          "Hardness",
          "Heavy Metals",
          "Nitrate",
          "Fluoride",
        ],
        "Trace Contaminants": ["Pesticides", "Phenolic Compounds"],
        Microbiological: [
          "E. coli",
          "Coliforms",
          "Yeast & Mould",
          "Pseudomonas aeruginosa",
        ],
      },
      compliance: "BIS, FSSAI",
      industries: [
        "Bottled water manufacturers",
        "Beverages",
        "Food processing",
      ],
      faqs: [
        {
          q: "Is packaged drinking water testing mandatory?",
          a: "Yes. As per IS 14543:2016, packaged drinking water must be tested and certified.",
        },
        {
          q: "Do you test for pesticide residues?",
          a: "Yes. We conduct trace analysis for pesticides and phenolic compounds.",
        },
        {
          q: "Can you help with BIS/FSSAI compliance?",
          a: "Absolutely. We provide test reports aligned with BIS & FSSAI requirements.",
        },
      ],
      cta: "🥤 Guarantee purity in every drop",
    },
    {
      title: "Industrial Water Testing",
      subtitle: "Customized Testing for Industry Needs",
      icon: FaIndustry,
      description:
        "We provide water testing solutions tailored to industrial applications across multiple sectors.",
      types: [
        "Food Industry Water (IS 4251:1967)",
        "Construction Water (IS 456:2000)",
        "Irrigation Water (IS 11624:2019)",
        "Swimming Pool Water",
        "Ice Manufacturing Water",
        "Boiler Feed & Cooling Tower Water",
        "Distilled/Demineralized Water",
        "Purified & WFI (EP, BP, USP standards)",
      ],
      keyParameters: [
        "Hardness",
        "pH",
        "Chlorides",
        "Sulphates",
        "Alkalinity",
        "Silica",
        "Iron",
        "Copper",
        "Bacteria",
      ],
      applications: [
        "Concrete durability",
        "Crop irrigation",
        "Industrial cooling efficiency",
        "Pharma-grade compliance",
      ],
      faqs: [
        {
          q: "Why is construction water testing important?",
          a: "Because water with high chlorides, sulphates, or hardness can reduce concrete strength.",
        },
        {
          q: "Do you provide testing for pharma-grade water?",
          a: "Yes, we test Purified Water & Water for Injection (WFI) as per EP, BP & USP standards.",
        },
        {
          q: "Can you test irrigation water quality?",
          a: "Yes, as per IS 11624:2019 to assess sodium hazard, salinity, and trace elements.",
        },
      ],
      cta: "🏭 Reliable water testing for every industry",
    },
    {
      title: "Waste Water & Effluent Testing",
      subtitle: "Regulatory-Compliant Wastewater Analysis",
      icon: FaRecycle,
      description:
        "We analyze industrial effluents, STP/ETP discharges, and wastewater as per CPCB, SPCB, and MoEF guidelines.",
      parameters: {
        Physical: ["Colour", "Odour", "TSS", "TDS", "pH", "Temperature"],
        Organic: ["BOD", "COD", "Oil & Grease"],
        Nutrients: ["Ammonical Nitrogen", "TKN", "Phosphate", "Free Ammonia"],
        "Heavy Metals": [
          "Arsenic",
          "Mercury",
          "Lead",
          "Chromium",
          "Nickel",
          "Cadmium",
        ],
        "Toxic Substances": ["Cyanide", "Phenolic Compounds", "Pesticides"],
      },
      compliance: "BIS, APHA, ASTM, IS 2296 (Surface Water Classes A–D)",
      industries: [
        "Pharma",
        "Chemical",
        "Textile",
        "Food & Beverages",
        "Construction",
      ],
      faqs: [
        {
          q: "Why is wastewater testing important?",
          a: "To ensure compliance with CPCB/SPCB discharge standards and avoid penalties.",
        },
        {
          q: "What parameters are included in wastewater analysis?",
          a: "We test for BOD, COD, TSS, heavy metals, pesticides, nutrients, and more.",
        },
        {
          q: "Can you test treated effluent from STP/ETP plants?",
          a: "Yes, we provide treated wastewater compliance testing for industries and municipalities.",
        },
      ],
      cta: "🌍 Protect the environment. Stay compliant",
    },
    {
      title: "Microbiological Water Testing",
      subtitle: "Safeguarding Public Health with Microbial Analysis",
      icon: FaMicroscope,
      description:
        "Microbiological testing is critical for detecting faecal contamination in water. We test for indicator organisms to ensure water safety.",
      parameters: {
        "Drinking Water / Ground Water": [
          "Total Plate Count",
          "Total Coliforms",
          "Faecal Coliforms",
          "E. coli",
        ],
        "Wastewater / Treated Water": [
          "Coliforms",
          "Faecal Coliforms",
          "E. coli",
        ],
      },
      protocols: ["BIS", "APHA", "WHO guidelines"],
      importance: [
        "Ensures water safety for public health",
        "Detects contamination at early stages",
        "Essential for industries like food, beverages, pharma, and healthcare",
      ],
      faqs: [
        {
          q: "Why test water microbiologically?",
          a: "To check for faecal contamination and ensure safety against waterborne diseases.",
        },
        {
          q: "Which microorganisms do you test for?",
          a: "We test for Total Coliforms, Faecal Coliforms, E. coli, and Total Plate Count.",
        },
        {
          q: "Do you follow WHO protocols?",
          a: "Yes, we follow WHO, BIS, APHA guidelines for microbial testing.",
        },
      ],
      cta: "🧪 Ensure microbial safety in your water",
    },
  ];

  const currentService = services[activeService];
  const ServiceIcon = currentService.icon;

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="relative">
        {/* Tabs Navigation */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === index;
              return (
                <m.button
                  key={index}
                  onClick={() => {
                    setActiveService(index);
                    setActiveFAQ(0);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative text-base flex items-center text-left gap-3 px-6 py-4 rounded-xl font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-primary text-white shadow-lg"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="inline">{service.title}</span>
                  <span className="lg:hidden">{index + 1}</span>

                  {isActive && (
                    <m.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-xl -z-10"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </m.button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <m.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Header Card */}
            <div className="bg-primary text-white rounded-3xl p-8 md:p-12 mb-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
                  <ServiceIcon className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-black mb-3">
                    {currentService.title}
                  </h2>
                  <p className="text-xl text-white/90 mb-4 font-semibold">
                    {currentService.subtitle}
                  </p>
                  <p className="text-white/80 leading-relaxed text-lg">
                    {currentService.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Parameters Section */}
            {currentService.parameters && (
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                  Parameters Tested
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(currentService.parameters).map(
                    ([category, params], idx) => (
                      <m.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-black text-sm">
                              {idx + 1}
                            </span>
                          </div>
                          <h4 className="font-black text-gray-900">
                            {category}
                          </h4>
                        </div>
                        <div className="space-y-2.5">
                          {params.map((param, pIdx) => (
                            <div
                              key={pIdx}
                              className="flex items-start gap-2.5"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              <span className="text-gray-700 leading-relaxed">
                                {param}
                              </span>
                            </div>
                          ))}
                        </div>
                      </m.div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Water Types (for Industrial) */}
            {currentService.types && (
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                  Water Types We Test
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentService.types.map((type, idx) => (
                    <m.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                        <span className="text-primary font-black group-hover:text-white">
                          {idx + 1}
                        </span>
                      </div>
                      <span className="text-gray-700 font-semibold">
                        {type}
                      </span>
                    </m.div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits/Importance */}
            {(currentService.benefits || currentService.importance) && (
              <div className="bg-gray-50 mb-8">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                  {currentService.benefits
                    ? "Why Choose Us?"
                    : "Why It Matters"}
                </h3>
                <div className="space-y-4">
                  {(currentService.benefits || currentService.importance).map(
                    (item, idx) => (
                      <m.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-md"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
                          <HiCheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700 leading-relaxed font-medium">
                          {item}
                        </span>
                      </m.div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {currentService.compliance && (
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-primary">
                  <h4 className="font-black text-gray-900 mb-3 text-lg">
                    Compliance Standards
                  </h4>
                  <p className="text-gray-700 font-semibold">
                    {currentService.compliance}
                  </p>
                </div>
              )}
              {currentService.industries && (
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-secondary">
                  <h4 className="font-black text-gray-900 mb-3 text-lg">
                    Industries Served
                  </h4>
                  <p className="text-gray-700 font-semibold">
                    {currentService.industries.join(", ")}
                  </p>
                </div>
              )}
              {currentService.protocols && (
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-accent1">
                  <h4 className="font-black text-gray-900 mb-3 text-lg">
                    Protocols Followed
                  </h4>
                  <p className="text-gray-700 font-semibold">
                    {currentService.protocols.join(", ")}
                  </p>
                </div>
              )}
              {currentService.applications && (
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-accent2">
                  <h4 className="font-black text-gray-900 mb-3 text-lg">
                    Applications
                  </h4>
                  <p className="text-gray-700 font-semibold">
                    {currentService.applications.join(", ")}
                  </p>
                </div>
              )}
            </div>

            {/* FAQs */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {currentService.faqs.map((faq, idx) => {
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

            {/* CTA Card */}
            <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-black mb-4">
                  {currentService.cta}
                </h3>
                <p className="text-white/80 text-lg">
                  Get accurate, NABL-accredited testing with fast turnaround
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <a
                  href="tel:7675043138"
                  className="flex items-center justify-center gap-3 px-8 py-5 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
                >
                  <span className="text-2xl">
                    <FaPhoneAlt />
                  </span>
                  <div className="text-left">
                    <div className="text-xs text-white/70">Call us</div>
                    <div className="text-lg">7675043138</div>
                  </div>
                </a>

                <a
                  href="mailto:info@petrolabs.com"
                  className="flex items-center justify-center gap-3 px-8 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 text-white font-bold rounded-xl transition-all"
                >
                  <span className="text-2xl">
                    <FaEnvelope />
                  </span>
                  <div className="text-left">
                    <div className="text-xs text-white/70">Email us</div>
                    <div className="text-sm">info@petrolabs.com</div>
                  </div>
                </a>
              </div>
            </div>
          </m.div>
        </AnimatePresence>
      </section>
    </LazyMotion>
  );
}
