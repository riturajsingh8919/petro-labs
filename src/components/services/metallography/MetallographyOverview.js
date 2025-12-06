"use client";

import { LazyMotion, m } from "framer-motion";
import Image from "next/image";
import { HiMagnifyingGlassCircle, HiBeaker, HiChartBar } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function MetallographyOverview() {
  const highlights = [
    {
      icon: HiMagnifyingGlassCircle,
      title: "Advanced Microscopy",
      description: "Optical microscopes with image analysis systems",
    },
    {
      icon: HiBeaker,
      title: "Comprehensive Testing",
      description: "Microstructure to macrostructure evaluation",
    },
    {
      icon: HiChartBar,
      title: "Detailed Analysis",
      description: "Root cause identification and reporting",
    },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Expert Metallographic Analysis
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              At Petrolabs India Pvt. Ltd., we provide advanced Metallography
              Testing Services to evaluate the microstructure and macrostructure
              of metals and alloys.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Our NABL-accredited laboratory uses state-of-the-art Optical
              Microscopes and Biovis MP 2000 Image Analysis Systems with
              50x–1000x magnification to detect surface and internal defects,
              study material characteristics, and ensure compliance with
              international standards.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Metallography helps industries assess material integrity, weld
              quality, coating thickness, and failure mechanisms, ensuring
              components perform reliably under demanding conditions.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[550px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/services/metallography-lab.png"
              alt="Metallography Laboratory Equipment"
              fill
              className="object-cover"
            />
          </m.div>
        </div>

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
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </m.div>
            );
          })}
        </div>
      </section>
    </LazyMotion>
  );
}
