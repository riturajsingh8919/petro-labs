"use client";

import { LazyMotion, m } from "framer-motion";
import {
  HiBolt,
  HiCpuChip,
  HiSquare3Stack3D,
  HiCircleStack,
} from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function Applications() {
  const applications = [
    {
      title: "Power & Distribution Transformers",
      icon: HiBolt,
    },
    {
      title: "High Voltage Switchgear",
      icon: HiCpuChip,
    },
    {
      title: "Circuit Breakers",
      icon: HiSquare3Stack3D,
    },
    {
      title: "Capacitors & Electrical Equipment",
      icon: HiCircleStack,
    },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="mb-14">
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center"
          >
            Applications of Transformer Oil Testing
          </m.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <m.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center group cursor-default"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 leading-tight">
                    {app.title}
                  </h3>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
