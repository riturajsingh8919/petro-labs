"use client";

import { LazyMotion, m } from "framer-motion";
import { useState } from "react";
import { HiChevronDown, HiQuestionMarkCircle } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function FAQ() {
  const [activeFAQ, setActiveFAQ] = useState(0);

  const faqs = [
    {
      q: "How often should coolant be tested?",
      a: "Automotive coolants should be tested annually or every 50,000 km. Heavy-duty and industrial equipment should be tested every 6 months or 1,000 operating hours.",
    },
    {
      q: "What causes coolant degradation?",
      a: "Coolant degrades due to high temperatures, contamination (dirt, oil, fuel), oxidation, and depletion of corrosion inhibitors over time.",
    },
    {
      q: "What is DEF/AdBlue and why is it important?",
      a: "DEF (Diesel Exhaust Fluid) is a urea-based solution used in SCR systems to reduce NOx emissions in diesel engines. Poor quality DEF can damage the SCR system and cause non-compliance with emission standards.",
    },
    {
      q: "Can contaminated DEF damage my vehicle?",
      a: "Yes. Contaminated or poor-quality DEF can clog injectors, damage the SCR catalyst, and trigger engine de-rating or shutdown.",
    },
    {
      q: "Do you test coolant for different vehicle types?",
      a: "Yes, we test coolants for passenger vehicles, commercial trucks, construction equipment, marine engines, and industrial machinery.",
    },
    {
      q: "What standards do you follow for DEF testing?",
      a: "We test DEF as per ISO 22241 standards, which specify quality requirements for urea content, purity, and contaminants.",
    },
    {
      q: "Can you test used coolant vs. new coolant?",
      a: "Yes, we analyze both used (in-service) coolant to assess condition and new coolant to verify manufacturer specifications.",
    },
    {
      q: "How long does testing take?",
      a: "Standard coolant and DEF testing typically takes 3-5 business days. Expedited testing is available upon request.",
    },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="mb-14 bg-gray-50">
        <div className="text-center mb-12">
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4"
          >
            <HiQuestionMarkCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">
              Got Questions?
            </span>
          </m.div>
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-gray-900 mb-3"
          >
            Frequently Asked Questions
          </m.h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Common questions about coolant and DEF testing
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeFAQ === index;

            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`group rounded-2xl overflow-hidden transition-all duration-300 ${
                  isActive
                    ? "bg-white shadow-xl ring-2 ring-primary/20"
                    : "bg-white shadow-md hover:shadow-lg"
                }`}
              >
                <button
                  onClick={() => setActiveFAQ(isActive ? null : index)}
                  className="w-full flex items-start justify-between p-6 text-left transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center font-black text-sm shrink-0 transition-all ${
                        isActive
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <span
                      className={`font-bold text-base md:text-lg pr-4 transition-colors ${
                        isActive
                          ? "text-gray-900"
                          : "text-gray-700 group-hover:text-gray-900"
                      }`}
                    >
                      {faq.q}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                      isActive
                        ? "bg-primary/10 rotate-180"
                        : "bg-gray-100 group-hover:bg-gray-200"
                    }`}
                  >
                    <HiChevronDown
                      className={`w-5 h-5 transition-colors ${
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
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0">
                    <div className="pl-14 pr-12">
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
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
