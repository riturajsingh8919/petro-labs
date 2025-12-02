"use client";

import { LazyMotion, m } from "framer-motion";
import Image from "next/image";
import { HiCheckCircle } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function WhyChoose() {
  const reasons = [
    "NABL-accredited testing laboratory",
    "State-of-the-art instruments (FTIR, ICP-OES, Karl Fischer, Particle Counters, GC-MS)",
    "40+ years of combined industry expertise",
    "Customized test packages for lubricants, fuels, and specialty fluids",
    "Fast turnaround with actionable reports",
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="my-12 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[470px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1"
          >
            <Image
              src="/services/petroleum-equipment1.png"
              alt="Advanced Testing Equipment"
              fill
              className="object-cover"
            />
          </m.div>

          {/* Content */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
              Why Choose Petrolabs?
            </h2>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                >
                  <HiCheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">
                    {reason}
                  </span>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
