"use client";

import { LazyMotion, m } from "framer-motion";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import {
  FaOilCan,
  FaGasPump,
  FaIndustry,
  FaTint,
  FaSnowflake,
  FaCog,
  FaFire,
  FaFlask,
} from "react-icons/fa";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function TestingServices() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Lubricant Testing",
      icon: FaOilCan,
      description:
        "We analyze industrial and automotive lubricants to monitor condition, performance, and contamination.",
      parameters: [
        "Viscosity @ 40°C & 100°C",
        "Total Acid Number (TAN) / Total Base Number (TBN)",
        "Water Content (Karl Fischer)",
        "Oxidation, Nitration, Sulfation (FTIR)",
        "ISO Cleanliness Codes (Particle Count)",
        "Elemental Analysis (Wear Metals, Additives – ICP-OES)",
      ],
    },
    {
      title: "Fuel Quality Testing",
      icon: FaGasPump,
      description:
        "Ensure fuels meet quality standards for efficiency and compliance (Petrol, Diesel, Furnace Oil, etc.).",
      parameters: [
        "Flash Point & Fire Point",
        "Cetane / Octane Number",
        "Density & Specific Gravity",
        "Sulfur Content",
        "Water & Sediment",
        "Distillation Range",
      ],
    },
    {
      title: "Grease Testing",
      icon: FaIndustry,
      description:
        "We test industrial and automotive greases for consistency, stability, and performance.",
      parameters: [
        "Worked Penetration",
        "Dropping Point",
        "Oil Separation",
        "Water Washout Resistance",
        "Four-Ball Wear & Weld Test",
      ],
    },
    {
      title: "AdBlue / DEF Testing",
      icon: FaTint,
      description: "Ensure compliance with ISO 22241 to reduce NOx emissions.",
      parameters: [
        "Urea Content (%)",
        "Density & pH Value",
        "Alkalinity / Biuret",
        "Insoluble Materials",
        "Heavy Metal Contamination",
      ],
    },
    {
      title: "Coolant Testing",
      icon: FaSnowflake,
      description:
        "Evaluate coolant health and its ability to protect engines from overheating and corrosion.",
      parameters: [
        "pH Value",
        "Reserve Alkalinity",
        "Glycol Concentration",
        "Chloride & Sulfate Content",
        "Corrosion Inhibitors",
      ],
    },
    {
      title: "Metalworking Fluid Testing",
      icon: FaCog,
      description:
        "Critical for machining and cutting operations to ensure worker safety and tool performance.",
      parameters: [
        "Concentration (Refractometer)",
        "Bacterial & Fungal Contamination",
        "pH Value",
        "Hardness & Chlorides",
        "Tramp Oil %",
      ],
    },
    {
      title: "Thermic Fluid Testing",
      icon: FaFire,
      description:
        "Maintain heat transfer efficiency and prevent system damage.",
      parameters: [
        "Viscosity @ 40°C & 100°C",
        "Flash Point / Fire Point",
        "Conradson Carbon Residue (CCR)",
        "Moisture Content",
        "TAN (Acid Number)",
      ],
    },
    {
      title: "Quenching Oil Testing",
      icon: FaFlask,
      description:
        "Test oils used in heat-treatment operations for reliability and consistency.",
      parameters: [
        "Viscosity",
        "Flash Point",
        "Cooling Curve Characteristics",
        "Carbon Residue",
        "Water Content",
      ],
    },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="relative">
        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-black text-gray-900 mb-3"
        >
          Our Testing Services & Key Parameters
        </m.h2>
        <p className="text-gray-600 mb-8">
          Comprehensive analysis across all petroleum products and lubricants
        </p>

        <div className="space-y-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === index;

            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-primary transition-colors"
              >
                {/* Header */}
                <button
                  onClick={() => setActiveService(isActive ? null : index)}
                  className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-gray-900">
                        {index + 1}. {service.title}
                      </h3>
                    </div>
                  </div>
                  <HiChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform ${
                      isActive ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Content */}
                <m.div
                  initial={false}
                  animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 bg-gray-50">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">
                        Key Parameters:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.parameters.map((param, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="text-primary font-bold mt-0.5">
                              ✓
                            </span>
                            <span className="text-gray-700">{param}</span>
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
