"use client";

import { LazyMotion, m } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function LearningOutcomes() {
  const outcomes = [
    "Prepare samples correctly (extractions, digestions, filtrations) with traceability",
    "Set up, run, and troubleshoot GC-MS/MS, GC, HPLC, ICP-OES, AAS",
    "Build calibration curves; assess precision, accuracy, LOD/LOQ",
    "Maintain QA/QC controls (blanks, spikes, CCV/CCB, recovery)",
    "Draft SOPs, COAs, validation summaries, and handle e-records compliantly",
    "Communicate results to QC/QA and defend findings during audits",
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6 md:px-10">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              What You&apos;ll Be Able to Do
            </h2>
            <p className="text-gray-600 text-lg">
              Practical skills that employers look for
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {outcomes.map((outcome, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 shadow-md border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {outcome}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
