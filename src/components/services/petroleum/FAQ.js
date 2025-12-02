"use client";

import { LazyMotion, m } from "framer-motion";
import { useState } from "react";
import { HiChevronDown, HiQuestionMarkCircle } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function FAQ() {
  const [activeFAQ, setActiveFAQ] = useState(0); // First FAQ open by default

  const faqs = [
    {
      question:
        "What standards do you follow for petroleum and lubricant testing?",
      answer:
        "We follow BIS, ASTM, ISO, and IP test methods, ensuring accurate and internationally compliant results.",
    },
    {
      question: "Why is lubricant testing important for industries?",
      answer:
        "Lubricant testing helps monitor oil condition, contamination, and additive depletion, preventing costly equipment failures and extending machinery life.",
    },
    {
      question: "Do you test fuels like petrol, diesel, and furnace oil?",
      answer:
        "Yes, our fuel testing services include petrol, diesel, kerosene, and furnace oil, covering key parameters such as flash point, density, sulfur content, and distillation range.",
    },
    {
      question: "Can you test AdBlue (DEF) quality?",
      answer:
        "Yes, we test AdBlue/DEF as per ISO 22241 to ensure correct urea concentration, pH, and absence of heavy metals for compliance with emission standards.",
    },
    {
      question: "What is included in grease testing?",
      answer:
        "Grease testing covers worked penetration, dropping point, oil separation, water washout, and four-ball wear/weld tests to check stability and performance.",
    },
    {
      question: "Do you provide coolant and thermic fluid testing?",
      answer:
        "Yes, we evaluate coolants for glycol concentration, pH, inhibitors, and thermic fluids for viscosity, TAN, CCR, and flash point to maintain system reliability.",
    },
    {
      question: "Can you customize test packages based on my industry?",
      answer:
        "Absolutely. We offer customized test packages for manufacturing, automotive, power, steel, chemical, pharma, and other industries.",
    },
    {
      question: "How fast can I get my test reports?",
      answer:
        "We provide fast turnaround times with detailed, easy-to-interpret reports. Urgent testing can also be accommodated upon request.",
    },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="bg-gray-50">
        {/* Header */}
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
            Find answers to common questions about our petroleum testing
            services
          </p>
        </div>

        {/* FAQ Grid */}
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
                    {/* Number Badge */}
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center font-black text-sm shrink-0 transition-all ${
                        isActive
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Question */}
                    <span
                      className={`font-bold text-base md:text-lg pr-4 transition-colors ${
                        isActive
                          ? "text-gray-900"
                          : "text-gray-700 group-hover:text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Arrow Icon */}
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

                {/* Answer */}
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
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
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
