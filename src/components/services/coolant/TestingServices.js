"use client";

import { LazyMotion, m } from "framer-motion";
import { useState } from "react";
import { HiCheckCircle, HiChevronDown } from "react-icons/hi2";
import { FaSnowflake, FaTint } from "react-icons/fa";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function TestingServices() {
  const [expandedService, setExpandedService] = useState(0);

  const services = [
    {
      title: "Engine Coolant Testing",
      icon: FaSnowflake,
      description:
        "Comprehensive analysis to evaluate coolant health and its ability to protect engines from overheating, freezing, and corrosion.",
      parameters: [
        {
          name: "Freeze Point / Boiling Point",
          detail: "Ensures coolant provides protection in extreme temperatures",
        },
        {
          name: "pH Value",
          detail: "Monitors acidity/alkalinity to prevent corrosion",
        },
        {
          name: "Reserve Alkalinity",
          detail: "Measures coolant's ability to neutralize acids",
        },
        {
          name: "Glycol Concentration (%)",
          detail: "Verifies proper freeze and boil-over protection",
        },
        {
          name: "Chloride Content",
          detail: "Detects contamination that causes corrosion",
        },
        {
          name: "Sulfate Content",
          detail: "Identifies harmful chemical contamination",
        },
        {
          name: "Corrosion Inhibitors",
          detail: "Ensures protective additives are present",
        },
        {
          name: "Total Dissolved Solids (TDS)",
          detail: "Measures overall coolant contamination",
        },
      ],
      applications: [
        "Automotive vehicles (cars, trucks, buses)",
        "Heavy-duty construction equipment",
        "Industrial machinery & generators",
        "Marine engines",
        "Railway locomotives",
      ],
    },
    {
      title: "DEF / AdBlue Testing",
      icon: FaTint,
      description:
        "Diesel Exhaust Fluid (DEF/AdBlue) testing as per ISO 22241 to ensure compliance with emission standards and optimal SCR system performance.",
      parameters: [
        {
          name: "Urea Content (%)",
          detail: "Must be 32.5% ± 0.7% for proper NOx reduction",
        },
        {
          name: "Density @ 20°C",
          detail: "Verifies correct formulation and purity",
        },
        {
          name: "Refractive Index",
          detail: "Confirms urea concentration accuracy",
        },
        {
          name: "pH Value",
          detail: "Ensures DEF is within acceptable range (9.0-11.0)",
        },
        {
          name: "Alkalinity as NH₃",
          detail: "Detects ammonia contamination",
        },
        {
          name: "Biuret Content",
          detail: "Low biuret prevents SCR catalyst damage",
        },
        {
          name: "Insoluble Matter",
          detail: "Ensures DEF is free from particles",
        },
        {
          name: "Metals (Na, K, Ca, Mg, Fe, Cu, Zn, Cr, Ni, Al, P)",
          detail: "Heavy metal contamination can damage SCR systems",
        },
      ],
      compliance: "ISO 22241-1, ISO 22241-2, ISO 22241-3",
      applications: [
        "Commercial diesel vehicles (BS-VI compliant)",
        "Heavy trucks & buses",
        "Construction & mining equipment",
        "Agricultural machinery",
        "Industrial diesel generators",
      ],
    },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="mb-14">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Our Testing Services
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Specialized analysis for coolants and DEF to ensure peak performance
            and compliance
          </p>
        </m.div>

        <div className="space-y-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedService === index;

            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-primary/20 transition-all"
              >
                <button
                  onClick={() => setExpandedService(isExpanded ? null : index)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-6 flex-1">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 transition-all ml-4 ${
                      isExpanded ? "rotate-180 bg-primary/10" : ""
                    }`}
                  >
                    <HiChevronDown
                      className={`w-6 h-6 ${
                        isExpanded ? "text-primary" : "text-gray-400"
                      }`}
                    />
                  </div>
                </button>

                <m.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-8 pt-0 bg-gray-50">
                    <div className="mb-8">
                      <h4 className="text-xl font-black text-gray-900 mb-6">
                        Key Testing Parameters
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.parameters.map((param, idx) => (
                          <div
                            key={idx}
                            className="bg-white rounded-xl p-5 shadow-md border-l-4 border-primary"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center shrink-0 mt-0.5">
                                <HiCheckCircle className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <h5 className="font-bold text-gray-900 mb-1">
                                  {param.name}
                                </h5>
                                <p className="text-sm text-gray-600">
                                  {param.detail}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {service.compliance && (
                      <div className="mb-8">
                        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-accent1">
                          <h4 className="font-black text-gray-900 mb-2">
                            Compliance Standards
                          </h4>
                          <p className="text-gray-700 font-semibold">
                            {service.compliance}
                          </p>
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="text-xl font-black text-gray-900 mb-4">
                        Applications & Industries
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {service.applications.map((app, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm"
                          >
                            <span className="text-primary font-bold">•</span>
                            <span className="text-gray-700 text-sm font-medium">
                              {app}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </m.div>
              </m.div>
            );
          })}
        </div>
      </section>
    </LazyMotion>
  );
}
