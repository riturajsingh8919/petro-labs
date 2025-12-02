"use client";

import { LazyMotion, m } from "framer-motion";
import {
  HiBeaker,
  HiShieldCheck,
  HiBriefcase,
  HiDocumentText,
} from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function WhyPetrolabs() {
  const features = [
    {
      icon: HiBeaker,
      title: "Live Instruments",
      description:
        "GC-MS/MS, GC, HPLC, ICP-OES, AAS, FTIR, UV-Vis, Karl Fischer, Particle Counters",
      color: "primary",
    },
    {
      icon: HiShieldCheck,
      title: "Standards-Aligned",
      description:
        "ASTM, ISO, BIS, APHA, AOAC, ICH certified methods and practices",
      color: "secondary",
    },
    {
      icon: HiDocumentText,
      title: "Job-Ready Projects",
      description:
        "SOPs, CAL/verification logs, reporting templates, and hands-on case studies",
      color: "accent1",
    },
    {
      icon: HiBriefcase,
      title: "Career Support",
      description:
        "Resume polish, interview prep, and referrals to partner labs",
      color: "accent2",
    },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Why Choose Petrolabs?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              India&apso;s leading NABL-accredited training center with 25+
              years of industry experience
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all group"
                >
                  <div
                    className={`w-14 h-14 bg-${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
