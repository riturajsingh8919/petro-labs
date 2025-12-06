"use client";

import { useState } from "react";
import { LazyMotion, m, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiQuestionMarkCircle } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Will I operate real instruments?",
      answer:
        "Yes—each batch gets hands-on runs on production-grade instruments with instructor supervision. You'll work on GC-MS/MS, HPLC, GC, ICP-OES, AAS, and other advanced analytical instruments.",
    },
    {
      question: "Do you help with job placement?",
      answer:
        "We offer career prep + referrals. Final hiring decisions rest with employers. We provide resume polish, interview prep, mock interviews, and connect you with our partner labs and industries where feasible.",
    },
    {
      question: "Can I mix tracks (e.g., HPLC + ICP-OES)?",
      answer:
        "Yes—pick a custom bundle (popular: HPLC+GC+ICP-OES). We offer flexible training programs that can be customized based on your career goals and instrument interests.",
    },
    {
      question: "Do you provide hostel options?",
      answer:
        "We'll share nearby accommodation suggestions on request. Contact us and we'll provide a list of budget-friendly and convenient accommodation options near our training facility.",
    },
    {
      question: "Is there a certificate?",
      answer:
        "Yes—detailing instruments, hours, competencies, and project. You'll receive a completion certificate, skill transcript, instrument logbook, and your capstone report that you can showcase during interviews.",
    },
    {
      question: "What is the batch size?",
      answer:
        "We maintain small batch sizes (typically 8-12 students) to ensure everyone gets adequate hands-on time with instruments and personalized attention from instructors.",
    },
    {
      question: "Do I need prior lab experience?",
      answer:
        "Freshers are welcome! Basic lab safety knowledge and pipetting skills are helpful but not mandatory. We start with fundamentals and gradually build to advanced techniques.",
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <HiQuestionMarkCircle className="w-5 h-5 text-primary" />
              <span className="text-primary font-bold text-sm">FAQs</span>
            </div>
            <h2 className="text-3xl  font-black text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know about our training programs
            </p>
          </m.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-md border-2 border-gray-100 overflow-hidden hover:border-primary transition-all"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="font-black text-gray-900 text-lg pr-4">
                    {faq.question}
                  </span>
                  <HiChevronDown
                    className={`w-6 h-6 text-primary shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
