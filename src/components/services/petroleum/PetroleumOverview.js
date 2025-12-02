"use client";

import { LazyMotion, m } from "framer-motion";
import Image from "next/image";
import { HiBeaker, HiCheckBadge, HiClock } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function PetroleumOverview() {
  const highlights = [
    {
      icon: HiCheckBadge,
      title: "NABL Accredited",
      description: "ISO/IEC 17025 certified laboratory",
    },
    {
      icon: HiBeaker,
      title: "Advanced Equipment",
      description: "FTIR, ICP-OES, GC-MS, Karl Fischer",
    },
    {
      icon: HiClock,
      title: "Fast Results",
      description: "Quick turnaround with detailed reports",
    },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="my-12 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Text */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              End-to-End Testing Solutions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Petrolabs India Pvt. Ltd., we provide end-to-end Petroleum
              Products and Lubricants Testing Services to help industries ensure
              product quality, equipment reliability, and compliance with
              international standards.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our NABL-accredited laboratories are equipped with advanced
              instruments to deliver accurate, reliable, and fast results for
              lubricants, fuels, greases, AdBlue, coolants, metalworking fluids,
              thermic fluids, and quenching oils.
            </p>
          </m.div>

          {/* Image */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/services/petroleum-lab.png"
              alt="Modern Testing Laboratory"
              fill
              className="object-cover"
            />
          </m.div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </m.div>
            );
          })}
        </div>
      </section>
    </LazyMotion>
  );
}
