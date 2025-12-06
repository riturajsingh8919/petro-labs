"use client";

import { LazyMotion, m } from "framer-motion";
import {
  HiCheckBadge,
  HiBeaker,
  HiClock,
  HiDocumentText,
  HiUsers,
  HiGlobeAlt,
} from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function WhyChoose() {
  const reasons = [
    {
      icon: HiCheckBadge,
      title: "NABL Accredited",
      description: "Certified laboratory ensuring highest quality standards",
    },
    {
      icon: HiBeaker,
      title: "Advanced Equipment",
      description: "GC-MS, HPLC, ICP-OES, FTIR, LC-MS/MS, AAS technology",
    },
    {
      icon: HiClock,
      title: "Fast Turnaround",
      description: "Quick and reliable results without compromising accuracy",
    },
    {
      icon: HiDocumentText,
      title: "Multi-Standard Compliance",
      description: "FSSAI, BIS, AOAC, Codex, ISO & ASTM standards",
    },
    {
      icon: HiUsers,
      title: "Expert Team",
      description: "Experienced food technologists and microbiologists",
    },
    {
      icon: HiGlobeAlt,
      title: "Export Support",
      description: "International compliance for global market access",
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
            Why Choose Petrolabs?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your trusted partner for comprehensive food testing services
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
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
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </m.div>
            );
          })}
        </div>
      </section>
    </LazyMotion>
  );
}
