"use client";

import { LazyMotion, m } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi2";
import Image from "next/image";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function TransformerWhyChoose() {
  const reasons = [
    "NABL-accredited transformer oil testing lab",
    "Testing as per IEC, ASTM, IS, and BIS standards",
    "Advanced analytical instruments: GC, Karl Fischer, Tan Delta Testers",
    "Expertise in DGA interpretation & condition monitoring",
    "Detailed test reports with predictive maintenance insights",
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">
              Why Choose Petrolabs?
            </h2>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-md border-l-4 border-primary"
                >
                  <HiCheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed font-medium">
                    {reason}
                  </span>
                </m.div>
              ))}
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2"
          >
            <Image
              src="/services/transformer-equipment.png"
              alt="Advanced Testing Equipment"
              fill
              className="object-cover"
            />
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
