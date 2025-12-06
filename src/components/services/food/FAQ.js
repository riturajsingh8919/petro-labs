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
      q: "What standards do you follow for food testing?",
      a: "We follow FSSAI, BIS, ISO, AOAC, Codex, and ASTM standards for all food and agricultural product testing to ensure compliance with both national and international requirements.",
    },
    {
      q: "Can you test for pesticide residues in food?",
      a: "Yes, we conduct comprehensive pesticide residue analysis using advanced GC-MS and LC-MS/MS technology for multi-residue screening in various food products.",
    },
    {
      q: "Do you provide nutritional labeling support?",
      a: "Yes, we perform complete nutritional value analysis including macronutrients, micronutrients, vitamins, minerals, and energy calculation for product labeling and FSSAI compliance.",
    },
    {
      q: "What microbiological tests do you conduct?",
      a: "We test for Total Plate Count, E. coli, Salmonella, Listeria, Staphylococcus aureus, Coliforms, Yeast & Mould, and other pathogens as per FSSAI and WHO guidelines.",
    },
    {
      q: "Which industries can benefit from food testing?",
      a: "Food manufacturers, exporters, dairy plants, beverage companies, spice processors, meat processors, bakeries, packaged food industries, and agricultural product suppliers.",
    },
    {
      q: "How long does food testing take?",
      a: "Standard testing takes 5-7 business days depending on the parameters. Microbiological tests may take 3-5 days, while complex contaminant analysis may take 7-10 days. Expedited service is available.",
    },
    {
      q: "Do you test for heavy metals in food?",
      a: "Yes, we test for Lead (Pb), Arsenic (As), Cadmium (Cd), Mercury (Hg), and other heavy metals using ICP-OES and ICP-MS technology.",
    },
    {
      q: "Can you help with export compliance?",
      a: "Yes, our test reports are internationally accepted and comply with EU, US, Middle East, and other export market requirements including Codex and FDA standards.",
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
            className="text-3xl  font-black text-gray-900 mb-3"
          >
            Frequently Asked Questions
          </m.h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Common questions about food testing services
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
