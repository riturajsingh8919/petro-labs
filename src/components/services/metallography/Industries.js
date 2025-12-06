"use client";

import { LazyMotion, m } from "framer-motion";
import {
  FaCar,
  FaPlane,
  FaIndustry,
  FaCog,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function Industries() {
  const industries = [
    {
      name: "Automotive",
      icon: FaCar,
      description: "Engine parts, transmissions, fasteners",
    },
    {
      name: "Aerospace",
      icon: FaPlane,
      description: "Aircraft components, turbine blades",
    },
    {
      name: "Oil & Gas",
      icon: FaIndustry,
      description: "Pipelines, valves, pressure vessels",
    },
    {
      name: "Manufacturing",
      icon: FaCog,
      description: "Tools, dies, machined components",
    },
    {
      name: "Defense",
      icon: FaShieldAlt,
      description: "Armor, weapons, critical parts",
    },
    {
      name: "Power Generation",
      icon: FaBolt,
      description: "Turbines, boilers, heat exchangers",
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
          <h2 className="text-3xl  font-black text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by leading companies across critical sectors
          </p>
        </m.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </m.div>
            );
          })}
        </div>
      </section>
    </LazyMotion>
  );
}
