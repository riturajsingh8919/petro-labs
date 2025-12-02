"use client";

import { LazyMotion, m } from "framer-motion";
import {
  HiShieldCheck,
  HiCurrencyDollar,
  HiWrenchScrewdriver,
  HiCheckBadge,
} from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function WhyTest() {
  const reasons = [
    {
      icon: HiShieldCheck,
      title: "Prevent Engine Damage",
      description:
        "Detect contamination and degradation before costly failures occur",
    },
    {
      icon: HiCurrencyDollar,
      title: "Reduce Operating Costs",
      description: "Optimize coolant life and avoid unnecessary replacements",
    },
    {
      icon: HiWrenchScrewdriver,
      title: "Extend Equipment Life",
      description: "Proper coolant maintenance increases engine longevity",
    },
    {
      icon: HiCheckBadge,
      title: "Meet Emission Standards",
      description: "Ensure DEF quality for BS-VI and Euro-6 compliance",
    },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="mb-14">
        <div className="bg-primary rounded-3xl p-8 md:p-12 text-white">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Why Test Coolant & DEF?
            </h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Regular testing protects your investment and ensures compliance
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-black mb-2">{reason.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {reason.description}
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
